import {NavLink} from "react-router-dom"
import s from './Header.module.scss'
import {useSelector} from "react-redux";
import {AppRootStateType} from "../../../bll/store";


const Header = () => {

    const isFetching = useSelector<AppRootStateType, boolean>(state => state.app.isFetching)


    if (isFetching) {
        return (
            <header></header>
        )
    } else {

        return (
            <header>
                <NavLink children={'Sign In'} to={'/signin'}
                         className={({isActive}) => (isActive ? s.linkActive : s.link)}/>
                <NavLink children={'Sign Up'} to={'/signup'}
                         className={({isActive}) => (isActive ? s.linkActive : s.link)}/>
                <NavLink children={'Forgot pass'} to={'/forgotPass'}
                         className={({isActive}) => (isActive ? s.linkActive : s.link)}/>
                <NavLink children={'New pass'} to={'/newPass'}
                        className={({isActive}) => (isActive ? s.linkActive : s.link)}/>
                <NavLink children={'Profile'} to={'/profile'}
                         className={({isActive}) => (isActive ? s.linkActive : s.link)}/>
                <NavLink children={'Error'} to={'/error'}
                         className={({isActive}) => (isActive ? s.linkActive : s.link)}/>
                {/*<NavLink children={'Packs List'} to={'/packsList'} className={({isActive}) => (isActive ? s.linkActive : s.link)}/>*/}
                {/*<NavLink children={'Packs Item'} to={'/packsItem'} className={({isActive}) => (isActive ? s.linkActive : s.link)}/>*/}

            </header>
        )
    }
}

export default Header