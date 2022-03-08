import blockStyle from '../../../styles/container.module.scss'
import s from './ProfilePage.module.scss'
import SuperButton from "../../common/c2-SuperButton/SuperButton";
import Ava from "../../common/Ava/Ava";
import {deleteMeTC, UserType} from "../../../bll/reducers/auth-reducer";
import {useDispatch, useSelector} from "react-redux";
import {AppRootStateType} from "../../../bll/store";
import {authApi} from "../../../dal/profile-api/auth-api";
import {useNavigate} from "react-router-dom";
import ChangeProfile from "./ChangeProfile/ChangeProfile";


const ProfilePage = () => {
    const user = useSelector<AppRootStateType, UserType>(state => state.auth.user)
    const isAuth = useSelector<AppRootStateType, boolean>(state => state.auth.isAuth)
    const navigate = useNavigate()
    const dispatch = useDispatch()

    const login = () => {
        authApi.log()
    }
    const deleteName = () => {
        dispatch(deleteMeTC())
    }
    if(!isAuth){
        navigate("/signin")
    }

    return (
        <div className={`${s.profileContainer} ${blockStyle.container}`}>
            <h2>Personal Information</h2>
            <Ava/>
            <div className={s.userData}>
                <ChangeProfile userName={user.name} avatar={user.avatar || ''}/>
                <div>
                    <p>email: {user.email}</p>
                    <p> public Card Packs Count: {user.publicCardPacksCount}</p>
                    <p>nik name:{user.name}</p>
                </div>
                <div>
                    <SuperButton onClick={login}>login</SuperButton>
                    <SuperButton onClick={deleteName}>delete</SuperButton>
                </div>
            </div>
        </div>
    )
}

export default ProfilePage