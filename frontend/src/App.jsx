import React, {useContext} from "react";
import { Route, Routes } from "react-router-dom";
import Registration from "./Pages/Registration";
import Login from "./Pages/Login";
import Home from "./Pages/Home";
import Nav from "./components/Nav";
import { UserDataContext } from "./context/userContext.jsx";


function App(){
    let {userData} = useContext(UserDataContext)
    return(
        <>
        {userData && <Nav/>}
        <Routes>
            <Route path='/' element = {<Home/>}/>
            <Route path='/login' element = {<Login/>}/>
            <Route path='/singup' element = {<Registration/>}/>
        </Routes>
        </>
    )
}

export default App