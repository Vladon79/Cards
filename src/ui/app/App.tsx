import './App.module.scss';
import Header from "../components/Header/MainHeader";
import React, {useEffect} from 'react';
import {Navigate, Route, Routes} from 'react-router-dom';
import ErrorPage from "../features/ErrorPage/ErrorPage";
import TestPage from "../features/TestPage/TestPage";
import ProfilePage from "../components/ProfilePage/ProfilePage";
import SignIn from "../features/Login/SingIn/SignIn";
import s from './App.module.scss'
import Preloader from "../common/Preloader/Preloader";
import {useDispatch, useSelector} from "react-redux";
import {AppRootStateType} from "../../bll/store";
import ProfileSettings from "../components/ProfilePage/ProfileSettings/ProfileSettings";
import SignUp from '../features/Login/SignUp/SignUp';
import {appInitializeTC} from "../../bll/reducers/app-reducer";
import {CheckEmail} from "../features/Login/CheckEmail/CheckEmail";
import {NewPass} from "../features/Login/NewPass/NewPass";
import PacksListPage from "../components/PacksListPage/PacksListPage";
import ForgotPass from "../features/Login/ForgotPass/ForgotPass";
import PacksListPageContainer from "../components/PacksListPage/PacksListPageContainer";


const App = () => {
    const isInitialized = useSelector<AppRootStateType, boolean>(state => state.app.isInitialized)
    const isFetching = useSelector<AppRootStateType, boolean>(state => state.app.isFetching)
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
            {isFetching
                ? <Preloader/>
                :
                <div className={s.content}>
                    <Routes>
                        <Route path="*" element={<Navigate to="/profile"/>}/>
                        <Route path="/signin" element={<SignIn/>}/>
                        <Route path="/signup" element={<SignUp/>}/>
                        <Route path="/forgotPass" element={<ForgotPass/>}/>
                        <Route path="/checkEmail" element={<CheckEmail/>}/>
                        <Route path="/newPass" element={<NewPass/>}>
                            <Route path=":token" element={<NewPass/>}/>
                        </Route>
                        <Route path="/error" element={<ErrorPage/>}/>
                        <Route path="/profile" element={<ProfilePage/>}/>
                        <Route path="/test" element={<TestPage/>}/>
                        <Route path="/profileSettings" element={<ProfileSettings/>}/>
                        <Route path="/packsList" element={<PacksListPageContainer/>}/>
                    </Routes>
                </div>
            }
        </div>
    )
}

export default App;
