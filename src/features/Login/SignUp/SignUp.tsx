import React, {MouseEvent, useCallback, useState} from 'react'
import s from './SignUp.module.scss'
import {register, signUpAC} from "../../../bll/reducers/sign-up-reducer";
import {useDispatch, useSelector} from "react-redux";
import SuperButton from "../../../ui/common/c2-SuperButton/SuperButton";
import {Navigate} from "react-router-dom";
import {AppRootStateType} from "../../../bll/store";
import {AuthEmailField} from "../../../ui/common/AuthFields/AuthEmailField/AuthEmailField";
import {AuthPassField} from "../../../ui/common/AuthFields/AuthPassField/AuthPassField";
import Preloader from "../../../ui/common/Preloader/Preloader";

export type InputFieldType = 'password' | 'text'

export const SignUp = () => {


    const isLoggedIn = useSelector<AppRootStateType, boolean>(state => state.auth.isAuth)
    const isFetching = useSelector<AppRootStateType, boolean>(state => state.app.isFetching)
    const isRegistered = useSelector<AppRootStateType, boolean>(state => state.signUp.isRegistered)
    const dispatch = useDispatch()

    const [email, setEmail] = useState<string>('')
    const [password, setPassword] = useState<string>('')
    const [repeatPassword, setRepeatPassword] = useState<string>('')
    const [isShowPassword, setIsShowPassword] = useState<boolean>(false)
    const [isShowRepeatPassword, setIsShowRepeatPassword] = useState<boolean>(false)
    const [error, setError] = useState<boolean>(false)



    const registerBtnClickHandler = useCallback((e: MouseEvent) => {
        e.preventDefault()
        dispatch(register(email, password))
    }, [email, password, repeatPassword, dispatch])

    const handleCancelbtn = () => {
        dispatch(signUpAC(true))
    }

    const showPassword = useCallback(() => {
        setIsShowPassword(!isShowPassword)
    }, [isShowPassword])
    const showRepeatPassword = useCallback(() => {
        setIsShowRepeatPassword(!isShowRepeatPassword)
    }, [isShowRepeatPassword])

    const repeatPasswordInputMode: InputFieldType = !isShowRepeatPassword ? 'password' : 'text'
    const passwordInputMode: InputFieldType = !isShowPassword ? 'password' : 'text'


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

                            <AuthEmailField
                                email={email}
                                text={'Email'}
                                setEmail={setEmail}
                            />

                            <AuthPassField
                                type={passwordInputMode}
                                password={password}
                                isShowPassword={isShowPassword}
                                setPassword={setPassword}
                                showPassword={showPassword}
                                text={'Password'}
                            />

                            <AuthPassField
                                type={repeatPasswordInputMode}
                                password={repeatPassword}
                                isShowPassword={isShowRepeatPassword}
                                setPassword={setRepeatPassword}
                                showPassword={showRepeatPassword}
                                text={'Confirm password'}
                            />

                        </div>
                        <div className={s.input_box_buttons}>
                            <SuperButton
                                onClick={handleCancelbtn}
                                className={s.cancelBtn}
                                cancele={true}
                            >
                                Cancel
                            </SuperButton>

                            <SuperButton
                                onClick={(e) => registerBtnClickHandler(e)}
                                className={s.registerBtn}
                            >
                                Register
                            </SuperButton>
                        </div>
                </section>
            }
        </section>
    )
}

