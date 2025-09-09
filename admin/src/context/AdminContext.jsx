/* eslint-disable react-refresh/only-export-components */
import React, { createContext, useEffect, useState,  useCallback } from 'react'
import axios from 'axios'

export const adminDataContext = createContext()

function AdminContext({ children }) {
  let [adminData, setAdminData] = useState(null)
  const serverUrl = "http://localhost:8000"

  const getAdmin = useCallback(async () => {
    let result = await axios.get(serverUrl + "/api/user/getadmin", { withCredentials: true })
    setAdminData(result.data)
    console.log(result.data)
  }, [serverUrl])

  useEffect(() => {
    getAdmin()
  }, [getAdmin])

  let value = {
    adminData,
    setAdminData,
    getAdmin
  }

  return (
    <adminDataContext.Provider value={value}>
      {children}
    </adminDataContext.Provider>
  )
}

export default AdminContext
