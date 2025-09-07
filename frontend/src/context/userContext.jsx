import React, { useContext, useEffect, useState,useCallback } from "react";
import { UserDataContext } from "./userDataProvider.jsx";
import { AuthDataContext } from "../context/AuthDataProvider.jsx";
import axios from "axios";

function UserContext({ children }) {
  let [userData, setUserData] = useState(null);
  let { serverUrl } = useContext(AuthDataContext);

const getCurrentUser = useCallback(async () => {
  try {
    let result = await axios.post(
      "http://localhost:8000/api/user/getcurrentuser",
      {},
      { withCredentials: true }
    );
    setUserData(result.data);
  } catch (error) {
    setUserData(null);
    console.error(error);
  }
}, [serverUrl]);

useEffect(() => {
  getCurrentUser();
}, [getCurrentUser]);


  let value = {
    userData,
    setUserData,
    getCurrentUser,
  };

  return (
      <UserDataContext.Provider value={value}>
        {children}
      </UserDataContext.Provider>
  );
}

export default UserContext;
