import SuperInputText from "../../../common/c1-SuperInputText/SuperInputText";
import SuperButton from "../../../common/c2-SuperButton/SuperButton";
import {ChangeEvent, useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {changeProfileTC, signOutTC} from "../../../../bll/reducers/auth-reducer";
import s from "../ProfilePage.module.scss";
import blockStyle from "../../../../styles/container.module.scss";
import Ava from "../../../common/Ava/Ava";
import {AppRootStateType} from "../../../../bll/store";
import {useNavigate} from "react-router-dom";
import image from '../../../../assets/image/img.png'

const ChangeProfile = () => {
    const userName = useSelector<AppRootStateType, string>(state => state.auth.user.name)
    const userAva = useSelector<AppRootStateType, string>(state => state.auth.user.avatar ? state.auth.user.avatar : image)

    const [name, setName] = useState<string>(userName)
    const [ava, setAva] = useState<string>(userAva)

    const navigate = useNavigate()
    const dispatch = useDispatch()

    const nameOnChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
        setName(e.currentTarget.value)
    }
    const avaOnChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
        setAva(e.currentTarget.value)
    }
    const nameChangeOnClickHandler = () => {
        dispatch(changeProfileTC(name, ava))
        navigate('/profile')
    }

    const signOut = () => {
        dispatch(signOutTC())
        navigate('/signin')
    }

    return (
        <div className={`${s.profileContainer} ${blockStyle.container}`}>
            <>
                <Ava ava={ava}/>
                <SuperInputText name={'Ava'} value={ava} onChange={avaOnChangeHandler}/>
                <SuperInputText name={'Name'} value={name} onChange={nameOnChangeHandler}/>
                <SuperButton onClick={nameChangeOnClickHandler}>Edit profile</SuperButton>
                <SuperButton onClick={signOut}>Sign out</SuperButton>
            </>
        </div>

    )
}

export default ChangeProfile