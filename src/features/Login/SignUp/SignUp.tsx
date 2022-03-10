import React, {MouseEvent, useCallback, useState} from 'react'
import s from './SignUp.module.scss'
import {register} from "../../../bll/reducers/sign-up-reducer";
import {useDispatch, useSelector} from "react-redux";
import SuperButton from "../../../ui/common/c2-SuperButton/SuperButton";
import SuperInputText from "../../../ui/common/c1-SuperInputText/SuperInputText";
import {Navigate, useNavigate} from "react-router-dom";
import eye from '../../../assets/icons/eyeicon.png'
import {AppRootStateType} from "../../../bll/store";
import {AuthEmailField} from "../../../ui/common/AuthFields/AuthEmailField/AuthEmailField";
import {AuthPassField} from "../../../ui/common/AuthFields/AuthPassField/AuthPassField";

type InputFieldType = 'password' | 'text'

export const SignUp = () => {

    const navigate = useNavigate()

    const isLoggedIn = useSelector<AppRootStateType, boolean>(state => state.auth.isAuth)
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


    const showPassword = useCallback(() => {
        setIsShowPassword(!isShowPassword)
    }, [isShowPassword])
    const showRepeatPassword = useCallback(() => {
        setIsShowRepeatPassword(!isShowRepeatPassword)
    }, [isShowRepeatPassword])
    const passwordInputMode: InputFieldType = !isShowPassword ? 'password' : 'text'
    const repeatPasswordInputMode: InputFieldType = !isShowRepeatPassword ? 'password' : 'text'


    if (isLoggedIn) {
        return <Navigate to={'/profile'}/>
    }

    return (
        <section className={s.main_box}>
            <section className={s.sign_up_box}>
                <div className={s.sign_up_box_header}>
                    <div className={s.logo_text}>It-incubator</div>
                    <div className={s.sign_up_text}>Sign Up</div>
                </div>
                <form>
                    <div className={s.input_box_form}>

                        <AuthEmailField
                            email={email}
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
                            className={s.btn_cancel}
                            onClick={() => navigate('/')}
                        >
                            Cancel
                        </SuperButton>

                        <SuperButton
                            className={s.btn_register}
                            onClick={(e) => registerBtnClickHandler(e)}
                        >
                            Register
                        </SuperButton>
                    </div>
                </form>
            </section>
        </section>
    )
}

