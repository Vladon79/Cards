import blockStyle from '../../../styles/container.module.scss'
import s from './ProfilePage.module.scss'
import SuperButton from "../../common/c2-SuperButton/SuperButton";
import SuperInputText from "../../common/c1-SuperInputText/SuperInputText";
import Ava from "../../common/Ava/Ava";
import {UserType} from "../../../bll/reducers/profile-reducer";
import {useDispatch, useSelector} from "react-redux";
import {AppRootStateType} from "../../../bll/store";
import {toggleIsFetchingAC} from "../../../bll/reducers/app-reducer";

const ProfilePage = () => {
    const user = useSelector<AppRootStateType, UserType>(state => state.profile.user)
    const dispatch = useDispatch()
    const handler = () => {
        dispatch(toggleIsFetchingAC(true))
    }
    const handler1 = () => {
        dispatch(toggleIsFetchingAC(false))
    }
    return (
        <div className={`${s.profileContainer} ${blockStyle.container}`}>
            <h2>Personal Information</h2>
            <Ava/>
            <div className={s.buttonInputBlock}>
                <SuperInputText></SuperInputText>
                <div>
                    email: {user.email}
                    public Card Packs Count: {user.publicCardPacksCount}
                    nik name:{user.name}
                    <SuperButton onClick={handler}>button</SuperButton>
                    <SuperButton onClick={handler1}>button1</SuperButton>
                </div>

            </div>

        </div>
    )
}

export default ProfilePage