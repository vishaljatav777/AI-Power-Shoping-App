import React, { useContext, useState } from "react";
import Logo from "../assets/Logo.png";
import { IoSearchCircleOutline } from "react-icons/io5";
import { IoSearchCircle } from "react-icons/io5";
import { FaUser } from "react-icons/fa";
import { FaShoppingCart } from "react-icons/fa";
import { UserDataContext } from "../context/userContext.jsx";
import { useNavigate } from "react-router-dom";
import { AuthDataContext } from "../context/AuthDataProvider.jsx";
import axios from "axios";
import { IoMdHome } from "react-icons/io";
import { BsCollection } from "react-icons/bs";
import { MdContacts } from "react-icons/md";

function Nav() {
  let {getCurrentUser, userData } = useContext(UserDataContext);
  let [showSearch, setShowSearch]= useState(false)
  let [showProfile, setShowProfile]= useState(false)
  let navigate = useNavigate()

  let {serverUrl} = useContext(AuthDataContext) 

const handlelogout = async () => {
  try {
    const result = await axios.get(
      serverUrl + "/api/user/logout",
      { withCredentials: true }
    );
    console.log(result.data);
    getCurrentUser(); // refresh context
    navigate("/login");
  } catch (error) {
    console.log(error);
  }
};
  return (
    <div className="w-[100vw] h-[70px] bg-[#ecfafaec] z-10 fixed top-0 flex items- center justify-between px-[30px] shadow-md shadow-black ">
      <div className="w-[20%] lg:w-[30%] flex items-center justify-start gap-[10px]">
        <img className="w-[30px]" src={Logo} alt="" />
        <h1 className="text-[25px] text-black font-sans"> OneCart</h1>
      </div>

      <div className="w-[50%] lg:w-[40%] hidden md:flex">
        <ul className="flex items-center justify-center gap-[19px] text-white">
          <li className="text-[15px] hover:bg-slate-500 cursor-pointer bg-[#000000c9] py-[10px] px-[20px] rounded-2xl">
            HOME
          </li>
          <li className="text-[15px] hover:bg-slate-500 cursor-pointer bg-[#000000c9] py-[10px] px-[20px] rounded-2xl">
            COLLECTIONS
          </li>
          <li className="text-[15px] hover:bg-slate-500 cursor-pointer bg-[#000000c9] py-[10px] px-[20px] rounded-2xl">
            ABOUT
          </li>
          <li className="text-[15px] hover:bg-slate-500 cursor-pointer bg-[#000000c9] py-[10px] px-[20px] rounded-2xl">
            CONTACT
          </li>
        </ul>
      </div>

      <div className="w-[30%] flex items-center justify-end gap-[20px]">
        {!showSearch && <IoSearchCircleOutline className="w-[30px] h-[38px] text-[#000000] cursor-pointer" onClick={()=>setShowSearch(prev=>!prev)}/>}
        {showSearch && <IoSearchCircle className="w-[30px] h-[38px] text-[#000000] cursor-pointer" onClick={()=>setShowSearch(prev=>!prev)}/>}
        {!userData && (
          <FaUser className="w-[30px] h-[29px] text-[#000000] cursor-pointer" onClick={()=> setShowProfile(prev=>!prev)}/>
        )}
        {userData && (
          <div className="w-[30px] h-[30px] bg-[#080808] text-[white] rounded-full flex items-center justify-center cursor-pointer" onClick={()=> setShowProfile(prev=>!prev)}>
            {userData?.name.slice(0, 1)}
          </div>
        )}
        <FaShoppingCart className="w-[30px] h-[29px] text-[#000000] cursor-pointer hidden md:block" />
        <p className="absolute w-[18px] h-[18px] items-center justify-center bg-black px-[5px] py-[2px] text-white rounded-full text-[9px] top-[10px] right-[23px] hidden md:block">
          10
        </p>
      </div>
      {showSearch && <div className='w-[100%] h-[80px] bg-[#d8f6f9dd] absolute top-[100%] left-0 right-0 flex items-center justify-center'>
        <input type="text" className='w-[50%] h-[60%] bg-[#233533] rounded-[30px] px-[50px] placeholder:text-white text-[white] text-[18px]' placeholder="Search Here" />
      </div>}

      {showProfile && <div className='absolute w-[220px] h-[150px] bg-[#000000d7] top-[110%] right-[4%] border-[1px] border-[#aaa9a9] rounded-[10px] z-10'>
        <ul className='w-[100%] h-[100%] flex items-start justify-around flex-col text-[17px] py-[10px] text-[white]'>
          {!userData && <li className='w-[100%] hover:bg-[#2f2f2f] px-[15px] py-[10px] cursor-pointer' onClick={()=>{navigate("/login");setShowProfile(false)}}>Login</li>}
          {userData && <li className='w-[100%] hover:bg-[#2f2f2f] px-[15px] py-[10px] cursor-pointer' onClick={()=>{handlelogout();setShowProfile(false)}}>LogOut</li>}
          <li className='w-[100%] hover:bg-[#2f2f2f] px-[15px] py-[10px] cursor-pointer'>Orders</li>
          <li className='w-[100%] hover:bg-[#2f2f2f] px-[15px] py-[10px] cursor-pointer'>About</li>
        </ul>

      </div>}

      <div className='w-[100vw] h-[90px] flex items-center text-[12px] justify-between px-[20px] fixed bottom-0 left-0 bg-[#191818] md:hidden' >
        <button className='text-white flex items-center justify-center flex-col gap-[2px]'><IoMdHome className="w-[30px] h-[25px] text-white md:hidden" />Home</button>
        <button className='text-white flex items-center justify-center flex-col gap-[2px]'><BsCollection className="w-[30px] h-[25px] text-white md:hidden" />Collection</button>
        <button className='text-white flex items-center justify-center flex-col gap-[2px]'><MdContacts className="w-[30px] h-[25px] text-white md:hidden" />Contact</button>
        <button className='text-white flex items-center justify-center flex-col gap-[2px]'><FaShoppingCart className="w-[30px] h-[25px] text-white md:hidden" />Cart</button>


      </div>


    </div>
  );
}

export default Nav;
