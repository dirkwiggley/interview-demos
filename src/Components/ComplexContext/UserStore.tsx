import React, { useEffect } from "react";

export interface UserInterface {
  id: number;
  login: string;
  email: string;
}

export const defaultUserInfo: UserInterface = {
  id: 0,
  login: "nobody",
  email: "default@default.com",
}

const isUserDataType = (arg: any): arg is UserInterface => {
  return arg &&
    arg.id &&
    arg.login &&
    arg.email;
}

export const UserContext = React.createContext<[UserInterface, (userData: UserInterface) => void] | null>(null);

const USER_DATA = "USER_DATA";

// This is a function that creates a React state with the object data
// and a setter for that data. It returns the data object and a wrapper
// around the state setter that also stores the data in local storage.
// Additionally, when first called it checks to see if the data exists
// in local storage and initializes itself with that data.
const UserStore = (initial: UserInterface): [UserInterface, (userData: UserInterface) => void] => {
  const [user, setUser] = React.useState<UserInterface>(initial);

  useEffect(() => {
    const userStr = localStorage.getItem(USER_DATA);
    if (userStr) {
      const newUser = JSON.parse(userStr);
      if (isUserDataType(newUser)) {
        setUser(newUser);
      }
    }
  }, []);

  const setContextAndLocal = (userData: UserInterface) => {
    localStorage.setItem(USER_DATA, JSON.stringify(userData));
    setUser(userData);
  }

  return [user, setContextAndLocal];
}

// This is the actual provider code
const UserProvider = ({ children }: { children: React.ReactNode }) => {
  const [user, setUser] = UserStore(defaultUserInfo);

  return <UserContext.Provider value={[user, setUser]}>{children}</UserContext.Provider>;
};

export { UserProvider };
