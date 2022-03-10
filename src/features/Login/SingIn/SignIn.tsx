import SuperButton from "../../../ui/common/c2-SuperButton/SuperButton";
import {useDispatch} from "react-redux";
import {useAppSelector} from "../../../bll/store";
import {singInTC} from "../../../bll/reducers/singInReducer";
import {Navigate, NavLink} from "react-router-dom";
import {selectorisFetching, selectorSingIn} from "./selectors";
import {useInput} from "../../../hooks/useInput";
import {useCheckBox} from "../../../hooks/useCheckBox";
import s from './SignIn.module.scss'
import Preloader from "../../../ui/common/Preloader/Preloader";
import {AuthEmailField} from "../../../ui/common/AuthFields/AuthEmailField/AuthEmailField";
import {AuthPassField} from "../../../ui/common/AuthFields/AuthPassField/AuthPassField";
import React, {useCallback, useState} from "react";
import {InputFieldType} from "../SignUp/SignUp";


const SignIn = () => {

    const isSingIn = useAppSelector<boolean>(selectorSingIn)
    const isFetching = useAppSelector<boolean>(selectorisFetching)
    const dispatch = useDispatch()

    const email = useInput('', {isEmpty: true, minLength: 3, isEmail: true})
    const password = useInput('', {isEmpty: true, minLength: 3, maxLength: 25, isPassword: true})
    const rememberMe = useCheckBox(false)

    const singInData = {email: email.value, password: password.value, rememberMe: rememberMe.isDone}

    const singIn = () => dispatch(singInTC(singInData))


    /*changed by dima start*/
    const [isShowPassword, setIsShowPassword] = useState<boolean>(false)
    const passwordInputMode: InputFieldType = !isShowPassword ? 'password' : 'text'
    const showPassword = useCallback(() => {
        setIsShowPassword(!isShowPassword)
    }, [isShowPassword])
    /*changed by dima end*/


    if (isSingIn) return <Navigate to='/profile'/>


    return (
        <section className={s.main_box}>
            {isFetching
                ? <Preloader/>
                :
                <section className={s.sign_in_box}>
                    <div className={s.sign_in_box_header}>
                        <div className={s.logo_text}>It-incubator</div>
                        <div className={s.sign_in_text}>Sign In</div>
                    </div>
                    <form>


                        <div className={s.input_box_form}>

                            <AuthEmailField
                                email={email.value}
                                setEmail={(e) => email.onChange(e)}
                                onBlur={email.onBlur}
                            />
                            {(email.isDirty && email.isEmpty) && <div style={{color: 'red'}}>Field is required</div>}
                            {(email.isDirty && email.minLengthError) && <div style={{color: 'red'}}>Email is short</div>}
                            {(email.isDirty && email.emailError) && <div style={{color: 'red'}}>Email is not valid</div>}



                            <AuthPassField
                                type={passwordInputMode}
                                password={password.value}
                                isShowPassword={isShowPassword}
                                setPassword={(e) => password.onChange(e)}
                                showPassword={showPassword}
                                text={'Password'}
                                onBlur={password.onBlur}
                            />
                            {(password.isDirty && password.isEmpty) &&
                            <div style={{color: 'red'}}>Field is required</div>}
                            {(password.isDirty && password.minLengthError) &&
                            <div style={{color: 'red'}}>Password is short</div>}
                            {(password.isDirty && password.maxLengthError) &&
                            <div style={{color: 'red'}}>Password is long</div>}

                        </div>

                        <div className={s.forgot}>
                            <NavLink className={s.forgot_link} children={'Forgot Password'} to={'/signin'}/>
                        </div>

                        <div className={s.input_box_buttons}>
                            <SuperButton
                                className={s.btn_login}
                                disabled={!email.isValid || !password.isValid}
                                type='submit'
                                onClick={singIn}
                            >
                                Sing In
                            </SuperButton>
                        </div>
                        <div className={s.account_text}>Don’t have an account?</div>
                        <div className={s.sign_up_text}>
                            <NavLink className={s.sign_up_link} children={'Sign Up'} to={'/signup'}/>
                        </div>
                    </form>
                </section>
            }
        </section>
    )
}

export default SignIn
