import SuperButton from "../../../common/c2-SuperButton/SuperButton";
import {useDispatch, useSelector} from "react-redux";
import {AppRootStateType, useAppSelector} from "../../../../bll/store";
import {singInTC} from "../../../../bll/reducers/singInReducer";
import {Navigate, NavLink, useNavigate} from "react-router-dom";
import {selectorisFetching} from "./selectors";
import {useInput} from "../../../../hooks/useInput";
import {useCheckBox} from "../../../../hooks/useCheckBox";
import s from './SignIn.module.scss'
import Preloader from "../../../common/Preloader/Preloader";
import {AuthEmailField} from "../../../common/AuthFields/AuthEmailField/AuthEmailField";
import {AuthPassField} from "../../../common/AuthFields/AuthPassField/AuthPassField";
import React, {useCallback, useState} from "react";
import {InputFieldType} from "../SignUp/SignUp";
import {signUpAC} from "../../../../bll/reducers/sign-up-reducer";
import {selectorIsAuth} from "../../../../bll/selectors/selectors";
import SuperCheckbox from "../../../common/c3-SuperCheckbox/SuperCheckbox";


const SignIn = () => {

    const [isShowPassword, setIsShowPassword] = useState<boolean>(false)

    const isFetching = useAppSelector<boolean>(selectorisFetching)
    const isAuth = useAppSelector<boolean>(selectorIsAuth)
    const dispatch = useDispatch()
    const navigate = useNavigate()

    const email = useInput('', {isEmpty: true, minLength: 3, isEmail: true})
    const password = useInput('', {isEmpty: true, minLength: 3, maxLength: 25, isPassword: true})
    const rememberMe = useCheckBox(false)

    const singInData = {email: email.value, password: password.value, rememberMe: rememberMe.isDone}
    console.log(singInData)
    const singIn = () => {
        dispatch(singInTC(singInData))
    }

    const passwordInputMode: InputFieldType = !isShowPassword ? 'password' : 'text'
    const showPassword = useCallback(() => {
        setIsShowPassword(!isShowPassword)
    }, [isShowPassword])

    const handleSignUpLink = () => {
        dispatch(signUpAC(false))
        navigate("/signup")
    };

    if (isAuth) return <Navigate to='/profile'/>

    return (
        <section className={s.main_box}>
            {isFetching && <Preloader/>}
            <section className={s.sign_in_box}>
                <div className={s.sign_in_box_header}>
                    <div className={s.logo_text}>It-incubator</div>
                    <div className={s.sign_in_text}>Sign In</div>
                </div>
                <div className={s.input_box_form}>

                    <AuthEmailField
                        email={email.value}
                        text={'Email'}
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
                    <SuperCheckbox
                        name='rememberMe'
                        onChangeChecked={rememberMe.handleCheckedChange}
                    >
                        Remember Me
                    </SuperCheckbox>
                    <NavLink className={s.forgot_link} children={'Forgot Password'} to={'/forgotPass'}/>
                </div>

                <div className={s.input_box_buttons}>
                    <SuperButton
                        disabled={!email.isValid || !password.isValid}
                        type='submit'
                        onClick={singIn}
                        className={s.signInBtn}
                    >
                        Login
                    </SuperButton>
                </div>

                <div className={s.account_text}>Don’t have an account?</div>
                <div className={s.sign_up_text}>
                    <span onClick={handleSignUpLink} className={s.sign_up_link}>Sign Up</span>
                </div>
            </section>
        </section>
    )
}

export default SignIn
