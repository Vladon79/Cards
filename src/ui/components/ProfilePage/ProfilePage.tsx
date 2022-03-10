import blockStyle from '../../../styles/container.module.scss'
import s from './ProfilePage.module.scss'
import SuperButton from "../../common/c2-SuperButton/SuperButton";
import Ava from "../../common/Ava/Ava";
import {signOutTC, UserType} from "../../../bll/reducers/auth-reducer";
import {useDispatch, useSelector} from "react-redux";
import {AppRootStateType} from "../../../bll/store";

import {Navigate, useNavigate} from "react-router-dom";
import image from '../../../assets/image/img.png'
import { authApi } from '../../../bll/api/auth-api';


const ProfilePage = () => {
    const user = useSelector<AppRootStateType, UserType>(state => state.auth.user)
    const isAuth = useSelector<AppRootStateType, boolean>(state => state.auth.isAuth)
    const navigate = useNavigate()
    const dispatch = useDispatch()

   /* const login = () => {
        authApi.log()
    }*/

    const profileSettings = () => {
        navigate("/profileSettings")
    }

    const signOut = () => {
        dispatch(signOutTC())
    }

    if (!isAuth) {
    return <Navigate to={'/signin'}/>
    }

    return (
        <div className={`${s.profileContainer} ${blockStyle.container}`}>
            <h2>Personal Information</h2>
            <Ava ava={user.avatar || image}/>
            <div className={s.userData}>
                <div>
                    <p>email: {user.email}</p>
                    <p> public Card Packs Count: {user.publicCardPacksCount}</p>
                    <p>nik name:{user.name}</p>
                </div>
                <div>
                    <SuperButton onClick={profileSettings}>Edit profile</SuperButton>
                    {/*<SuperButton onClick={login}>login</SuperButton>*/}
                    <SuperButton onClick={signOut}>signOut</SuperButton>
                </div>
            </div>
        </div>
    )
}

export default ProfilePage