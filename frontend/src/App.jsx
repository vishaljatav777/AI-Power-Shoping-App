import React from "react";
import { Route, Routes } from "react-router-dom";
import Registration from "./Pages/Registration";
import Login from "./Pages/Login";
import Home from "./Pages/Home";

function App(){
    return(
        <>
        <Routes>
            <Route path='/' element = {<Home/>}/>
            <Route path='/login' element = {<Login/>}/>
            <Route path='/singup' element = {<Registration/>}/>
        </Routes>
        </>
    )
}

export default App