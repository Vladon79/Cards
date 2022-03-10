import React, {MouseEvent, useCallback, useState} from 'react'
import s from './SignUp.module.scss'
import {register} from "../../../bll/reducers/sign-up-reducer";
import {useDispatch, useSelector} from "react-redux";
import SuperButton from "../../../ui/common/c2-SuperButton/SuperButton";
import SuperInputText from "../../../ui/common/c1-SuperInputText/SuperInputText";
import eye from '../../../assets/icons/eyeicon.png'
import {Navigate} from "react-router-dom";
import {AppRootStateType} from "../../../bll/store";

type InputFieldType = 'password' | 'text'

export const SignUp = () => {

    const isLoggedIn = useSelector<AppRootStateType, boolean>(state => state.auth.isAuth)
    const dispatch = useDispatch()

    const [email, setEmail] = useState<string>('')
    const [password, setPassword] = useState<string>('')
    const [repeatPassword, setRepeatPassword] = useState<string>('')
    const [isShowPassword, setIsShowPassword] = useState<boolean>(false)
    const [isShowRepeatPassword, setIsShowRepeatPassword] = useState<boolean>(false)
    const [error, setError] = useState<boolean>(false)


    const cancelBtnClickHandler = useCallback((e: MouseEvent) => {
        e.preventDefault()
        return <Navigate to='/'/>
    }, [Navigate])


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
                        <div className={s.input_box}>
                            <div className={s.input_name}>Email</div>
                            <SuperInputText
                                type={'email'}
                                name={'email'}
                                required
                                className={s.input_box_input_text}
                                onChange={(e) => setEmail(e.currentTarget.value)}
                                value={email}
                            />
                        </div>
                        <div className={s.input_box}>
                            <div className={s.input_name}>Password</div>
                            <SuperInputText
                                type={passwordInputMode}
                                name={'password'}
                                required
                                minLength={5}
                                maxLength={32}
                                className={s.input_box_input_text}
                                onChange={(e) => setPassword(e.currentTarget.value)}
                                value={password}
                            />
                            <img src={eye}
                                 alt={'show password'}
                                 className={`${s.eye}  ${isShowPassword && s.eye_opacity}`}
                                 onClick={showPassword}
                            />
                        </div>
                        <div className={s.input_box}>
                            <div className={s.input_name}>Confirm password</div>
                            <SuperInputText
                                type={repeatPasswordInputMode}
                                name={'repeatPassword'}
                                required
                                minLength={5}
                                maxLength={32}
                                className={s.input_box_input_text}
                                onChange={(e) => setRepeatPassword(e.currentTarget.value)}
                                value={repeatPassword}
                            />
                            <img
                                src={eye}
                                alt={'show password'}
                                className={`${s.eye}  ${isShowRepeatPassword && s.eye_opacity}`}
                                onClick={showRepeatPassword}
                            />
                        </div>
                    </div>
                    <div className={s.input_box_buttons}>
                        <SuperButton
                            className={s.btn_cancel}
                            onClick={(e) => cancelBtnClickHandler(e)}
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

