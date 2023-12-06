import * as React from "react";

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

// Set up the storage here with useState
export const useUserStore = (initial: UserInterface) => React.useState<UserInterface | null>(initial);
type UseUserStoreType = ReturnType<typeof useUserStore>;
// Just a reminder that creating a context of UseUserStoreType returns an 
// array with the following 2 elements
type UserStoreType = UseUserStoreType[0];
type SetUserStoreType = UseUserStoreType[1];

const UserContext = React.createContext<UseUserStoreType | null>(null);

export const useUserContext = () => React.useContext(UserContext)!;

export const UserProvider = ({ children }: { children: React.ReactNode }) => (
    <UserContext.Provider value={useUserStore(defaultUserInfo)}>
        {children}
    </UserContext.Provider>
);
