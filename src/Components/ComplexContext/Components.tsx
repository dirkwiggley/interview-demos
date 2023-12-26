import React, { useContext } from "react";
import { UserContext } from "./UserStore";

export function Sidebar() {
  const [user] = useContext(UserContext)!;

  return (
    <div style={{ padding: 5, borderTop: "1px solid black", width: "45%" }}>
      <div style={{ display: "flex" }}>
        Context Data
      </div>
      <hr />
      <div style={{ display: "flex" }}>
        Id: {user?.id}
      </div>
      <div style={{ display: "flex" }}>
        Login: {user?.login}
      </div>
      <div style={{ display: "flex" }}>
        Email: {user?.email}
      </div>
    </div>
  );

}

export function Profile() {
  const [user, setUser] = useContext(UserContext)!;

  const handleIdChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const changeValue = Number(event.target.value);
    if ((!isNaN(changeValue)) && user != null) {
      const newId = parseInt(event.target.value, 10);
      const newUserValues = { ...user, id: changeValue };
      setUser(newUserValues)
    } else {
      alert("Bad input value. Id must be a number");
      return;
    }
  }

  const handleLoginChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const newLogin = event.target.value;
    if (newLogin && user != null) {
      const newUserValues = { ...user, login: newLogin };
      setUser(newUserValues)
    } else {
      alert("Bad input value. Login can not be null");
      return;
    }
  }

  const handleEmailChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const newEmail = event.target.value;
    if (newEmail && user != null) {
      const newUserValues = { ...user, email: newEmail };
      setUser(newUserValues)
    } else {
      alert("Bad input value. Email can not be null");
      return;
    }
  }

  return (
    <div style={{ padding: 5, borderTop: "1px solid black", borderLeft: "1px solid black", width: "55%" }}>
      <div style={{ display: "flex", marginBottom: 5 }}>
        Input new data here
      </div>
      <hr />
      <div style={{ display: "flex", marginBottom: 5 }}>
        <div style={{ marginRight: 5 }}>
          Id
        </div>
        <input onChange={(event) => handleIdChange(event)}  value={user?.id}></input>
      </div>
      <div style={{ display: "flex", marginBottom: 5 }}>
        <div style={{ marginRight: 5 }}>
          Login
        </div>
        <input onChange={(event) => handleLoginChange(event)} value={user?.login}></input>
      </div>
      <div style={{ display: "flex" }}>
        <div style={{ marginRight: 5 }}>
          Email
        </div>
        <input onChange={(event) => handleEmailChange(event)} value={user?.email}></input>
      </div>
    </div>
  )
}