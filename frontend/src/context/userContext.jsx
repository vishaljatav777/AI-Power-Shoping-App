/* eslint-disable react-refresh/only-export-components */
import React, {
  useContext,
  useEffect,
  useState,
  useCallback,
  createContext,
} from "react";
import { AuthDataContext } from "../context/AuthDataProvider.jsx";
import axios from "axios";

// ✅ Context in same file
export const UserDataContext = createContext();

function UserContext({ children }) {
  let [userData, setUserData] = useState(null);
  let { serverUrl } = useContext(AuthDataContext);

  const getCurrentUser = useCallback(async () => {
    try {
      let result = await axios.post(
        serverUrl + "/api/user/getcurrentuser",
        {},
        { withCredentials: true }
      );
      setUserData(result.data);
    } catch (Error) {
      setUserData(null);
      console.error(Error);
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
