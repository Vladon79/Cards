import blockStyle from '../../../styles/container.module.scss'
import s from './ProfilePage.module.scss'
import SuperButton from "../../common/c2-SuperButton/SuperButton";
import Ava from "../../common/Ava/Ava";
import {deleteMeTC, UserType} from "../../../bll/reducers/auth-reducer";
import {useDispatch, useSelector} from "react-redux";
import {AppRootStateType} from "../../../bll/store";
import {authApi} from "../../../dal/profile-api/auth-api";
import {useNavigate} from "react-router-dom";
import {ChangeEvent, useState} from "react";
import SuperInputText from "../../common/c1-SuperInputText/SuperInputText";
import {changeProfileTC} from "../../../bll/reducers/profile-reducer";
import ChangeProfile from "./ChangeProfile/ChangeProfile";

const ProfilePage = () => {
    const user = useSelector<AppRootStateType, UserType>(state => state.profile.user)





    const navigate = useNavigate()
    const dispatch = useDispatch()
    const auth = () => {
        authApi.authMe()
    }
    // const updateMe = () => {
    //     authApi.updateMe('https://images.unsplash.com/photo-1614027164847-1b28cfe1df60?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8M3x8fGVufDB8fHx8&w=1000&q=80')
    // }
    const login = () => {
        authApi.log()
    }
    const deleteName = () => {
        dispatch(deleteMeTC())
    }
    const nav = () => {
        navigate("/signin")
    }
    return (
        <div className={`${s.profileContainer} ${blockStyle.container}`}>
            <h2>Personal Information</h2>
            <Ava/>
            <div className={s.userData}>
                <ChangeProfile userName={user.name} avatar={user.avatar || ''}/>
                {/*<SuperInputText value={name} onChange={nameOnChangeHandler}/>*/}
                {/*<SuperButton onClick={nameChangeOnClickHandler}>change Name</SuperButton>*/}
                <div>
                    <p>email: {user.email}</p>
                    <p> public Card Packs Count: {user.publicCardPacksCount}</p>
                    <p>nik name:{user.name}</p>
                </div>
                <div>
                    <SuperButton onClick={auth}>auth</SuperButton>
                    {/*<SuperButton onClick={updateMe}>updateMe</SuperButton>*/}
                    <SuperButton onClick={login}>login</SuperButton>
                    <SuperButton onClick={deleteName}>delete</SuperButton>
                    <SuperButton onClick={nav}>nav</SuperButton>
                </div>
            </div>
        </div>
    )
}

export default ProfilePage