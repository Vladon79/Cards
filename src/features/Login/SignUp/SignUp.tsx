import React, {useCallback, useState} from 'react'
import s from './SignUp.module.scss'
import {register} from "../../../bll/reducers/sign-up-reducer";
import {useDispatch} from "react-redux";
import SuperButton from "../../../ui/common/c2-SuperButton/SuperButton";
import SuperInputText from "../../../ui/common/c1-SuperInputText/SuperInputText";
import eye from '../../../assets/icons/eyeicon.png'

type InputFieldType = 'password' | 'text'

export const SignUp = () => {

    const dispatch = useDispatch()

    const [email, setEmail] = useState<string>('')
    const [password, setPassword] = useState<string>('')
    const [repeatPassword, setRepeatPassword] = useState<string>('')
    const [isShowPassword, setIsShowPassword] = useState<boolean>(false)
    const [isShowRepeatPassword, setIsShowRepeatPassword] = useState<boolean>(false)
    const [error, setError] = useState<boolean>(false)


    const cancelBtnClickHandler = useCallback(() => {
        console.log('Cancel btn pushed')
    }, [dispatch])

    const registerBtnClickHandler = useCallback(() => {

        setError(password !== repeatPassword)

        !error ? dispatch(register(email, password)) : null


    }, [dispatch])


    const showPassword = useCallback(() => {
        setIsShowPassword(!isShowPassword)
    }, [isShowPassword])

    const showRepeatPassword = useCallback(() => {
        setIsShowRepeatPassword(!isShowRepeatPassword)
    }, [isShowRepeatPassword])

    const passwordInputMode: InputFieldType = !isShowPassword ? 'password' : 'text'
    const repeatPasswordInputMode: InputFieldType = !isShowRepeatPassword ? 'password' : 'text'

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
                                required
                                className={s.input_box_input_text}
                                onChangeText={setEmail}
                                value={email}
                            />
                        </div>

                        <div className={s.input_box}>
                            <div className={s.input_name}>Password</div>
                            <SuperInputText
                                type={passwordInputMode}
                                required
                                minLength={5}
                                maxLength={32}
                                className={s.input_box_input_text}
                                onChangeText={setPassword}
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
                                required
                                minLength={5}
                                maxLength={32}
                                className={s.input_box_input_text}
                                onChangeText={setRepeatPassword}
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
                        <SuperButton className={s.btn_cancel} value={'Cancel'} onClick={cancelBtnClickHandler}/>
                        <SuperButton className={s.btn_register} value={'Register'} onClick={registerBtnClickHandler}/>
                    </div>
                </form>
            </section>
        </section>
    )
}

