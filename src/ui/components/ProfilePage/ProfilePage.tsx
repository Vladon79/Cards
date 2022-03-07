import blockStyle from '../../../styles/container.module.scss'
import s from './ProfilePage.module.scss'
import SuperButton from "../../common/c2-SuperButton/SuperButton";
import SuperInputText from "../../common/c1-SuperInputText/SuperInputText";
import Ava from "../../common/Ava/Ava";
import {UserType} from "../../../bll/reducers/profile-reducer";
import {useDispatch, useSelector} from "react-redux";
import {AppRootStateType} from "../../../bll/store";
import {toggleIsFetchingAC} from "../../../bll/reducers/app-reducer";
import {profileAPI} from "../../../dal/profile-api/profile-api";

const ProfilePage = () => {
    const user = useSelector<AppRootStateType, UserType>(state => state.profile.user)
    const dispatch = useDispatch()
    const handler = () => {
        dispatch(toggleIsFetchingAC(true))
    }
    const handler1 = () => {
        profileAPI.reg()
    }
    return (
        <div className={`${s.profileContainer} ${blockStyle.container}`}>
            <h2>Personal Information</h2>
            <Ava/>
            <div className={s.userData}>
                <div>
                    <p>email: {user.email}</p>
                    <p> public Card Packs Count: {user.publicCardPacksCount}</p>
                    <p>nik name:{user.name}</p>
                </div>
                <div>
                    <SuperButton onClick={handler}>button</SuperButton>
                    <SuperButton onClick={handler1}>button1</SuperButton>
                </div>


            </div>

        </div>
    )
}

export default ProfilePage