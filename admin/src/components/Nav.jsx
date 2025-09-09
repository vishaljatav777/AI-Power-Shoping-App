import React, { useContext } from 'react'
import Logo from "../assets/Logo.png";
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { authDataContext } from '../context/authContext.jsx';
import { adminDataContext } from '../context/AdminContext.jsx';


function Nav() {
    let navigate = useNavigate();
    let serverUrl = useContext(authDataContext)
    let {getAdmin} = useContext(adminDataContext)

    const logout = async () => {
        try{
            const result = await axios.get(
                serverUrl + "/api/user/logout",
                { withCredentials: true })
            console.log(result.data);
            getAdmin();
            navigate("/login");
        }
        catch(error){
            console.log(error);
        }
    }

  return (
    <div className='w-[100vw] h-[70px] bg-[#ecfafaec] z-10 fixed top-0 flex items- center justify-between px-[30px] shadow-md shadow-black '>
       
        <div className="w-[40%] lg:w-[30%] flex items-center justify-start gap-[10px]" onClick={()=>navigate("/")}>
            <img className="w-[30px]" src={Logo} alt="" />
            <h1 className="text-[25px] text-black font-sans"> OneCart</h1>
        
        </div>

        <button className='text-[15px] hover:border-[2px] border-[#89daea] cursor-pointer bg-[#000000ca] py-[10px] px-[20px] rounded-2xl text-white ' onClick={logout}>Logout</button>
    
    
    </div>
  )
}

export default Nav