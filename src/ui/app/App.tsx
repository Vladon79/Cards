import React from 'react';
import './App.scss';
import Header from "../components/Header/Header";
import {Route, Routes} from 'react-router-dom';
import ErrorPage from "../../features/ErrorPage/ErrorPage";
import TestPage from "../../features/TestPage/TestPage";
import ProfilePage from "../components/ProfilePage/ProfilePage";
import SignIn from "../../features/Login/SignIn";
import SignUp from "../../features/Login/SignUp";
import Preloader from "../common/Preloader/Preloader";

const App = () => {
    return (
        <div className="App">
            <Header/>
            <div>
                <Routes>
                    <Route path="/"/>
                    <Route path="/signin" element={<SignIn/>}/>
                    <Route path="/signup" element={<SignUp/>}/>
                    <Route path="/error" element={<ErrorPage/>}/>
                    <Route path="/profile" element={<ProfilePage/>}/>
                    <Route path="/test" element={<TestPage/>}/>s
                </Routes>
            </div>

        </div>
    );
}

export default App;
