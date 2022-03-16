import React, {useEffect, useState} from 'react'
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

export type InputFieldType = 'password' | 'text'

type UseInputInitialType = {
    initValue?: string
    isShow?: boolean
    isTouched?: boolean
    error?: string
}

const useFormValid = (value: string | '', isTouched: boolean, validations: string[]) => {

    const [error, setError] = useState<string>('')

    const minLength = 6
    const maxLength = 32

    useEffect(() => {

        for (const validation of validations) {
            switch (validation) {
                case 'minLength':
                    value.length < minLength
                    && isTouched
                    && setError(`Password should be from ${minLength} to ${maxLength} symbols`)
                    break
                case 'maxLength':
                    value.length > maxLength
                    && isTouched
                    && setError(`Password should be from ${minLength} to ${maxLength} symbols`)
                    break
                case 'isEmail': {
                    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
                    value
                    && isTouched
                    && !re.test(String(value).toLowerCase())
                    && setError('Email is not correct')
                    break
                }
                case 'isEmpty': {
                    !value
                    && isTouched
                    && setError('Field could not be empty')
                    break
                }
                default:
                    break
            }
        }
        if (!isTouched) setError('')
    }, [value, isTouched])

    return {error, setError}
}

const useInput = (initValue: string, validations: string[]) => {
    const [value, setValue] = useState<string | ''>(initValue)
    const [isShow, setIsShow] = useState<boolean>(false)
    const [isTouched, setIsTouched] = useState<boolean>(false)
    const valid = useFormValid(value, isTouched, validations)

    const valueChange = (value: string) => {
        setValue(value)
    }
    const isShowChange = () => {
        setIsShow(!isShow)
    }
    const isTouchedOn = () => {
        setIsTouched(true)
    }
    const isTouchedOff = () => {
        setIsTouched(false)
    }

    return {value, isShow, isTouched, valueChange, isShowChange, isTouchedOn, isTouchedOff, ...valid}
}

export const SignUp = () => {

    const dispatch = useDispatch()
    const isLoggedIn = useSelector<AppRootStateType, boolean>(state => state.auth.isAuth)
    const isFetching = useSelector<AppRootStateType, boolean>(state => state.app.isFetching)
    const isRegistered = useSelector<AppRootStateType, boolean>(state => state.signUp.isRegistered)
    const responseError = useSelector<AppRootStateType, null | string>(state => state.app.error)

    const email = useInput('', ['isEmail', 'isEmpty'])
    const password = useInput('', ['minLength', 'maxLength', 'isEmpty'])
    const repeatPassword = useInput('', ['isEmpty'])

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
    const passwordInputMode: InputFieldType = !password.isShow ? 'password' : 'text'
    const repeatPasswordInputMode: InputFieldType = !repeatPassword.isShow ? 'password' : 'text'
    const formIsValid = !email.error && !password.error && !repeatPassword.error
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
                            email={email.value}
                            text={'Email'}
                            setEmail={email.valueChange}
                            name={'email'}
                            onBlur={email.isTouchedOn}
                            onFocus={email.isTouchedOff}
                        />
                        {email.error && <div className={s.input_error}>{email.error}</div>}

                        <AuthPassField
                            type={passwordInputMode}
                            password={password.value}
                            isShowPassword={password.isShow}
                            setPassword={password.valueChange}
                            showPassword={password.isShowChange}
                            text={'Password'}
                            name={'password'}
                            onBlur={password.isTouchedOn}
                            onFocus={password.isTouchedOff}
                        />
                        {password.error && <div className={s.input_error}>{password.error}</div>}

                        <AuthPassField
                            type={repeatPasswordInputMode}
                            password={repeatPassword.value}
                            isShowPassword={repeatPassword.isShow}
                            setPassword={repeatPassword.valueChange}
                            showPassword={repeatPassword.isShowChange}
                            text={'Confirm password'}
                            name={'repeatPassword'}
                            onBlur={repeatPassword.isTouchedOn}
                            onFocus={repeatPassword.isTouchedOff}
                        />
                        {repeatPassword.error && <div className={s.input_error}>{repeatPassword.error}</div>}

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

