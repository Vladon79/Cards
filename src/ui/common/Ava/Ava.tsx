import s from './Ava.module.scss'

type AvaPropsType = {
    ava: string
}

const Ava = ({ava}:AvaPropsType) => {
    //const ava = useSelector<AppRootStateType, string>(state => state.auth.user.avatar ? state.auth.user.avatar : userPhoto)
    return (
        <div className={s.ava}>
            <img src={ava} className={s.ava}/>
        </div>
    )
}

export default Ava