import s from './Ava.module.scss'
import {useSelector} from "react-redux";
import {AppRootStateType} from "../../../bll/store";
import userPhoto from '../../../assets/image/img.png'

type AvaPropsType = {
    logo: string
}

const Ava = () => {
    const ava = useSelector<AppRootStateType, string>(state => state.profile.user.avatar ? state.profile.user.avatar : userPhoto)
    return (
        <div className={s.ava}>
            <img src={ava} className={s.ava}/>
        </div>
    )
}

export default Ava