import {useDispatch} from "react-redux";
import {useAppSelector} from "../../../../bll/store";
import {singInTC} from "../../../../bll/reducers/singInReducer";
import {Navigate, useNavigate} from "react-router-dom";
import {useCheckBox} from "../../../../hooks/useCheckBox";
import s from './SignIn.module.scss'
import Preloader from "../../../common/Preloader/Preloader";
import React from "react";
import {InputFieldType} from "../SignUp/SignUp";
import {signUpAC} from "../../../../bll/reducers/sign-up-reducer";
import {useInput} from "../../../../hooks/useInput";
import SignInForm from "./SignInForm/SignInForm";


const SignIn = () => {

    const dispatch = useDispatch()
    const isLoggedIn = useAppSelector<boolean>(state => state.auth.isAuth)
    const isFetching = useAppSelector<boolean>(state => state.app.isFetching)
    const responseError = useAppSelector<null | string>(state => state.app.error)
    const navigate = useNavigate()

    const email = useInput('', ['isEmail', 'isEmpty'])
    const password = useInput('', ['minLength', 'maxLength', 'isEmpty'])
    const rememberMe = useCheckBox(false)

    const singInData = {email: email.value, password: password.value, rememberMe: rememberMe.isDone}
    const passwordInputMode: InputFieldType = !password.isShow ? 'password' : 'text'
    const formIsValid = email.value && !email.error && !password.error
    const signInBtnClass = `${s.sign_in_btn} ${!formIsValid && s.btn_not_allowed}`

    const signInBtnClickHandler = () => {
        dispatch(singInTC(singInData))
    }
    const signUpLinkHandler = () => {
        dispatch(signUpAC(false))
        navigate('/signup')
    }

    if (isLoggedIn) return <Navigate to='/profile'/>

    return (
        <section className={s.main_box}>
            {isFetching
                ? <Preloader/>
                :
                <SignInForm
                    responseError={responseError}
                    passwordInputMode={passwordInputMode}
                    email={email}
                    password={password}
                    signInBtnClickHandler={signInBtnClickHandler}
                    signUpLinkHandler={signUpLinkHandler}
                    signInBtnClass={signInBtnClass}
                    formIsValid={formIsValid}
                />
            }
        </section>
    )
}

export default SignIn

