import React, {useEffect} from 'react';
import './App.module.scss';
import Header from "../components/Header/Header";
import {Route, Routes} from 'react-router-dom';
import ErrorPage from "../../features/ErrorPage/ErrorPage";
import TestPage from "../../features/TestPage/TestPage";
import ProfilePage from "../components/ProfilePage/ProfilePage";
import SignIn from "../../features/Login/SignIn";
import SignUp from "../../features/Login/SignUp";
import s from './App.module.scss'
import Preloader from "../common/Preloader/Preloader";
import {useDispatch, useSelector} from "react-redux";
import {AppRootStateType} from "../../bll/store";
import {authMeTC} from "../../bll/reducers/auth-reducer";



const App = () => {
    const isFetching = useSelector<AppRootStateType, boolean>(state => state.app.isFetching)
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(authMeTC())
    }, [dispatch])
    return (
        <div className="App">
            <Header/>
            {isFetching && <Preloader/>}
            <div className={s.content}>
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
