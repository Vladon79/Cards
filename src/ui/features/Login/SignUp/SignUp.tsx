import React, {useCallback, useEffect, useState} from 'react'
import s from './SignUp.module.scss'
import {register, signUpAC} from "../../../../bll/reducers/sign-up-reducer";
import {useDispatch, useSelector} from "react-redux";
import SuperButton from "../../../common/c2-SuperButton/SuperButton";
import {Navigate} from "react-router-dom";
import {AppRootStateType} from "../../../../bll/store";
import {AuthEmailField} from "../../../common/AuthFields/AuthEmailField/AuthEmailField";
import {AuthPassField} from "../../../common/AuthFields/AuthPassField/AuthPassField";
import Preloader from "../../../common/Preloader/Preloader";
import ErrorBar from "../../../common/ErrorBar/ErrorBar";
import {setAppErrorAC} from "../../../../bll/reducers/app-reducer";

export type InputFieldType = 'password' | 'text'

const passMinLength = 8
const passMaxLength = 32

export const SignUp = () => {


    const isLoggedIn = useSelector<AppRootStateType, boolean>(state => state.auth.isAuth)
    const isFetching = useSelector<AppRootStateType, boolean>(state => state.app.isFetching)
    const isRegistered = useSelector<AppRootStateType, boolean>(state => state.signUp.isRegistered)
    const responseError = useSelector<AppRootStateType, null | string>(state=> state.app.error)
    const dispatch = useDispatch()

    const [email, setEmail] = useState<string>('')
    const [password, setPassword] = useState<string>('')
    const [repeatPassword, setRepeatPassword] = useState<string>('')
    const [isShowPassword, setIsShowPassword] = useState<boolean>(false)
    const [isShowRepeatPassword, setIsShowRepeatPassword] = useState<boolean>(false)
    const [emailIsTouched, setEmailIsTouched] = useState<boolean>(false)
    const [passwordIsTouched, setPasswordIsTouched] = useState<boolean>(false)
    const [repeatPasswordIsTouched, setRepeatPasswordIsTouched] = useState<boolean>(false)
    const [emailError, setEmailError] = useState<string>('Field could not be empty')
    const [passwordError, setPasswordError] = useState<string>('Field could not be empty')
    const [repeatPasswordError, setRepeatPasswordError] = useState<string>('Field could not be empty')

    useEffect(() => {
        if (password === repeatPassword) {
            setRepeatPasswordError('')
        } else {
            setRepeatPasswordError('Passwords are not exactly same')
        }
    }, [password, repeatPassword])



    const registerBtnClickHandler = useCallback(() => {
        dispatch(register(email, password))
    }, [email, password, repeatPassword, dispatch])

    const onBlurEmailHandler = () => {
        setEmailIsTouched(true)
    }

    const onFocusHandler = () => {
        dispatch(setAppErrorAC(null))
    }


    const onBlurPasswordHandler = () => {
        setPasswordIsTouched(true)

    }

    const onBlurRepeatPasswordHandler = () => {
        setRepeatPasswordIsTouched(true)
    }

    const cancelBtnHandler = () => {
        dispatch(signUpAC(true))
    }

    const setEmailHandler = (value: string) => {
        setEmailIsTouched(false)
        setEmail(value)
        if (value) {
            const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
            re.test(String(value).toLowerCase()) ? setEmailError('') : setEmailError('Email is not correct')
        } else {
            setEmailError('Field could not be empty')
        }
    }

    const setPasswordHandler = (value: string) => {
        setPasswordIsTouched(false)
        setPassword(value)

        if (value) {

            (value.length < passMinLength || value.length > passMaxLength) ? setPasswordError('Password should be from 8 to 32 symbols') : setPasswordError('')

        } else {
            setPasswordError('Field could not be empty')
        }
    }

    const setRepeatPasswordHandler = (value: string) => {
        setRepeatPasswordIsTouched(false)
        setRepeatPassword(value)
    }

    const showPassword = useCallback(() => {
        setIsShowPassword(!isShowPassword)
    }, [isShowPassword])

    const showRepeatPassword = useCallback(() => {
        setIsShowRepeatPassword(!isShowRepeatPassword)
    }, [isShowRepeatPassword])


    const repeatPasswordInputMode: InputFieldType = !isShowRepeatPassword ? 'password' : 'text'
    const passwordInputMode: InputFieldType = !isShowPassword ? 'password' : 'text'
    const formIsValid = !emailError && !passwordError && !repeatPasswordError



    const registerBtnClass = `${s.registerBtn} ${!formIsValid && s.btn_not_allowed}`


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
                <section className={s.sign_up_box}>
                    <div className={s.sign_up_box_header}>
                        <div className={s.logo_text}>It-incubator</div>
                        <div className={s.sign_up_text}>Sign Up</div>
                    </div>

                    <div className={s.input_box_form}>
                        {responseError && <ErrorBar/>}

                        <AuthEmailField
                            email={email}
                            text={'Email'}
                            setEmail={setEmailHandler}
                            name={'email'}
                            onBlur={onBlurEmailHandler}
                            onFocus={onFocusHandler}
                        />
                        {(emailIsTouched && emailError) && <div className={s.input_error}>{emailError}</div>}

                        <AuthPassField
                            type={passwordInputMode}
                            password={password}
                            isShowPassword={isShowPassword}
                            setPassword={setPasswordHandler}
                            showPassword={showPassword}
                            text={'Password'}
                            name={'password'}
                            onBlur={onBlurPasswordHandler}
                        />
                        {(passwordIsTouched && passwordError) && <div className={s.input_error}>{passwordError}</div>}

                        <AuthPassField
                            type={repeatPasswordInputMode}
                            password={repeatPassword}
                            isShowPassword={isShowRepeatPassword}
                            setPassword={setRepeatPasswordHandler}
                            showPassword={showRepeatPassword}
                            text={'Confirm password'}
                            name={'repeatPassword'}
                            onBlur={onBlurRepeatPasswordHandler}
                        />
                        {(repeatPasswordIsTouched && repeatPasswordError) &&
                        <div className={s.input_error}>{repeatPasswordError}</div>}

                    </div>
                    <div className={s.input_box_buttons}>
                        <SuperButton
                            onClick={cancelBtnHandler}
                            className={s.cancelBtn}
                            cancel={true}
                        >
                            Cancel
                        </SuperButton>

                        <SuperButton
                            onClick={registerBtnClickHandler}
                            className={registerBtnClass}
                            disabled={!formIsValid}
                        >
                            Register
                        </SuperButton>
                    </div>
                </section>
            }
        </section>
    )
}

