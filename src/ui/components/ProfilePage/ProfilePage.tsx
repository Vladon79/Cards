import blockStyle from '../../../styles/container.module.scss'
import s from './ProfilePage.module.scss'
import SuperButton from "../../common/c2-SuperButton/SuperButton";
import Ava from "../../common/Ava/Ava";
import {UserType} from "../../../bll/reducers/auth-reducer";
import {useSelector} from "react-redux";
import {AppRootStateType} from "../../../bll/store";
import {authApi} from "../../../dal/profile-api/auth-api";
import {useNavigate} from "react-router-dom";
import image from '../../../assets/image/img.png'


const ProfilePage = () => {
    const user = useSelector<AppRootStateType, UserType>(state => state.auth.user)
    const isAuth = useSelector<AppRootStateType, boolean>(state => state.auth.isAuth)
    const navigate = useNavigate()

    const login = () => {
        authApi.log()
    }

    const profileSettings = () => {
        navigate("/profileSettings")
    }

    if (!isAuth) {
        navigate("/signin")
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
                    <SuperButton onClick={login}>login</SuperButton>
                </div>
            </div>
        </div>
    )
}

export default ProfilePage