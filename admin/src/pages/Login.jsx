import React, { useContext, useState } from "react";
import Logo from "../assets/Logo.png";
import { useNavigate } from "react-router-dom";
import { IoEyeOutline, IoEye } from "react-icons/io5";
import axios from "axios";
import { authDataContext } from "../context/authContext.jsx"; // ✅ import both contexts
import { adminDataContext } from "../context/AdminContext.jsx";

function Login() {
  let [show, setShow] = useState(false);
  let [email, setEmail] = useState("");
  let [password, setPassword] = useState("");
  let navigate = useNavigate();

  // ✅ get serverUrl from authDataContext
  let { serverUrl } = useContext(authDataContext);

  // ✅ get adminData & getAdmin from adminDataContext
  let { getAdmin } = useContext(adminDataContext);

  const AdminLogin = async (e) => {
    e.preventDefault();
    try {
      const result = await axios.post(
        serverUrl + "/api/auth/adminlogin",
        { email, password },
        { withCredentials: true }
      );
      console.log(result.data);

      // refresh admin info after login
      getAdmin;

      navigate("/");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="w-[100vw] h-[100vh] bg-gradient-to-l from-[#141414] to-[#0c2025] text-[white] flex flex-col items-center justify-start">
      {/* Logo + Title */}
      <div
        className="w-[100%] h-[80px] flex items-center justify-start px-[30px] gap-[10px] cursor-pointer"
        onClick={() => navigate("/")}
      >
        <img className="w-[40px]" src={Logo} alt="OneCart Logo" />
        <h1 className="text-[22px] font-sans">OneCart</h1>
      </div>

      {/* Registration header */}
      <div className="w-[100%] h-[100px] flex items-center justify-center flex-col gap-[10px]">
        <span className="text-[25px] font-semibold">Login Page</span>
        <span className="text-[16px]">
          Welcome to OneCart, Apply to Admin Login
        </span>
      </div>

      <div className="max-w-[600px] w-[90%] h-[400px] bg-[#00000025] border-[1px] border-[#96969635] backdrop-blur-2xl rounded-lg shadow-lg flex items-center justify-center">
        <form
          action=""
          onSubmit={AdminLogin}
          className="w-[90%] h-[90%] flex flex-col items-center justify-start gap-[20px]"
        >
          <div className="w-[90%] h-[400px] flex flex-col items-center justify-center gap-[15px] relative">
            <input
              type="email"
              className="w-[100%] h-[50px] border-[2px] border-[#96969635] backdrop-blur-sm rounded-lg shadow-lg bg-transparent placeholder-[#ffffffc7] px-[20px] font-semibold"
              placeholder="Email"
              required
              onChange={(e) => setEmail(e.target.value)}
              value={email}
            />
            <input
              type={show ? "text" : "password"}
              className="w-[100%] h-[50px] border-[2px] border-[#96969635] backdrop-blur-sm rounded-lg shadow-lg bg-transparent placeholder-[#ffffffc7] px-[20px] font-semibold"
              placeholder="Password"
              required
              onChange={(e) => setPassword(e.target.value)}
              value={password}
            />
            {show ? (
              <IoEye
                className="w-[20px] h-[20px] bottom-[50%] cursor-pointer absolute right-[5%]"
                onClick={() => setShow((prev) => !prev)}
              />
            ) : (
              <IoEyeOutline
                className="w-[20px] h-[20px] cursor-pointer bottom-[50%] absolute right-[5%]"
                onClick={() => setShow((prev) => !prev)}
              />
            )}
            <button className="w-[100%] h-[50px] bg-[#6060f5] rounded-lg flex items-center justify-center mt-[20px] text-[17px] font-semibold cursor-pointer">
              Login
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Login;
