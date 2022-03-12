import React, {useEffect} from 'react';
import {Route, Routes} from 'react-router-dom';
import {useDispatch} from "react-redux";

import './App.module.scss';
import s from './App.module.scss'

import SignIn from "../features/Login/SingIn/SignIn";
import SignUp from "../features/Login/SignUp/SignUp";
import TestPage from "../features/TestPage/TestPage";
import ErrorPage from "../features/ErrorPage/ErrorPage";

import Header from "../components/Header/MainHeader";
import ProfilePage from "../components/ProfilePage/ProfilePage";
import ProfileSettings from "../components/ProfilePage/ProfileSettings/ProfileSettings";
import Preloader from "../common/Preloader/Preloader";

import {useAppSelector} from "../../bll/store";
import {appInitializeTC} from "../../bll/reducers/app-reducer";
import {selectorFetching, selectorIsInitialized} from "../../bll/selectors/selectors";


const App = () => {

    const isInitialized = useAppSelector<boolean>(selectorIsInitialized)
    const isFetching = useAppSelector<boolean>(selectorFetching)

    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(appInitializeTC())
    }, [])

    if (!isInitialized) {
        return <Preloader/>
    }

    return (
        <div className="App">
            <Header/>
            {isFetching && <Preloader/>}
            <div className={s.content}>
                <Routes>
                    <Route path="/" element={<ProfilePage/>}/>
                    <Route path="/signin" element={<SignIn/>}/>
                    <Route path="/signup" element={<SignUp/>}/>
                    <Route path="/error" element={<ErrorPage/>}/>
                    <Route path="/profile" element={<ProfilePage/>}/>
                    <Route path="/test" element={<TestPage/>}/>
                    <Route path="/profileSettings" element={<ProfileSettings/>}/>
                </Routes>
            </div>

        </div>
    )
}

export default App;
