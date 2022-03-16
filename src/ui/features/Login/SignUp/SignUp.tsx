import React, {useEffect} from 'react'
import s from './SignUp.module.scss'
import {register, signUpAC} from "../../../../bll/reducers/sign-up-reducer";
import {useDispatch} from "react-redux";
import {Navigate} from "react-router-dom";
import {useAppSelector} from "../../../../bll/store";
import Preloader from "../../../common/Preloader/Preloader";
import {maxLength, minLength} from "../login-constants";
import {useInput} from "../../../../hooks/useInput";
import SignUpForm from "./SignUpForm/SignUpForm";

export type InputFieldType = 'password' | 'text'

const SignUp = () => {

    const dispatch = useDispatch()
    const isLoggedIn = useAppSelector<boolean>(state => state.auth.isAuth)
    const isFetching = useAppSelector<boolean>(state => state.app.isFetching)
    const isRegistered = useAppSelector<boolean>(state => state.signUp.isRegistered)
    const responseError = useAppSelector<null | string>(state => state.app.error)

    const email = useInput('', ['isEmail', 'isEmpty'])
    const password = useInput('', ['minLength', 'maxLength', 'isEmpty'])
    const repeatPassword = useInput('', ['isEmpty'])

    const passwordInputMode: InputFieldType = !password.isShow ? 'password' : 'text'
    const repeatPasswordInputMode: InputFieldType = !repeatPassword.isShow ? 'password' : 'text'
    const formIsValid = email.value && !email.error && !password.error && !repeatPassword.error
    const registerBtnClass = `${s.registerBtn} ${!formIsValid && s.btn_not_allowed}`

    useEffect(() => {
        if (password.value === repeatPassword.value) {
            repeatPassword.setError('')
        } else {
            repeatPassword.setError('Passwords are not exactly same')
        }
    }, [password.value, repeatPassword.value])

    const registerBtnClickHandler = () => {
        email.value && password.value && dispatch(register(email.value, password.value))
    }
    const cancelBtnHandler = () => {
        dispatch(signUpAC(true))
    }

    if (isLoggedIn) {
        return <Navigate to={'/profile'}/>
    }
    if (isRegistered) {
        dispatch(signUpAC(true))
        return <Navigate to={'/signin'}/>
    }

    return (
        <section className={s.main_box}>
            {isFetching
                ? <Preloader/>
                :
                <SignUpForm
                    responseError={responseError}
                    passwordInputMode={passwordInputMode}
                    repeatPasswordInputMode={repeatPasswordInputMode}
                    email={email}
                    password={password}
                    repeatPassword={repeatPassword}
                    cancelBtnHandler={cancelBtnHandler}
                    registerBtnClickHandler={registerBtnClickHandler}
                    registerBtnClass={registerBtnClass}
                    formIsValid={formIsValid}
                />
            }
        </section>
    )
}

export default SignUp
