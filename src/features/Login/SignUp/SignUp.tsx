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

    const [email, setEmail] = useState<string>('test@test.test')
    const [password, setPassword] = useState<string>('testtesttest')
    const [repeatPassword, setRepeatPassword] = useState<string>('testtesttest')
    const [isShowPassword, setIsShowPassword] = useState<boolean>(false)
    const [isShowRepeatPassword, setIsShowRepeatPassword] = useState<boolean>(false)
    const [error, setError] = useState<boolean>(false)


    console.log(email)
    console.log(password)
    console.log(repeatPassword)

    const cancelBtnClickHandler = useCallback(() => {
        console.log('Cancel btn pushed')
    }, [dispatch])


    const registerBtnClickHandler = () => {

        /*  setError(password !== repeatPassword)*/


        /*dispatch(register(email, password))*/
        dispatch(register('test@test.test', 'testtesttest'))


    }


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
                                /*onChangeText={setEmail}*/
                                onChange={(e) => setEmail(e.currentTarget.value)}
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
                                /* onChangeText={setPassword}*/
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
                                required
                                minLength={5}
                                maxLength={32}
                                className={s.input_box_input_text}
                                /*  onChangeText={setRepeatPassword}*/
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
                        <SuperButton className={s.btn_cancel} onClick={cancelBtnClickHandler}>Cancel</SuperButton>
                        <SuperButton className={s.btn_register} onClick={registerBtnClickHandler}>Register</SuperButton>
                    </div>
                </form>
            </section>
        </section>
    )
}

