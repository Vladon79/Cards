import React from 'react';
import s from "../SignIn.module.scss";
import {AuthEmailField} from "../../../../common/AuthFields/AuthEmailField/AuthEmailField";
import {AuthPassField} from "../../../../common/AuthFields/AuthPassField/AuthPassField";
import {NavLink} from "react-router-dom";
import SuperButton from "../../../../common/c2-SuperButton/SuperButton";
import ErrorBar from "../../../../common/ErrorBar/ErrorBar";

const SignInForm = (props: any) => {
    const {
        responseError,
        passwordInputMode,
        email,
        password,
        signInBtnClickHandler,
        signUpLinkHandler,
        signInBtnClass,
        formIsValid,
    } = props

    console.log(formIsValid)
    return (
        <section className={s.sign_in_box}>
            <div className={s.sign_in_box_header}>
                <div className={s.logo_text}>It-incubator</div>
                <div className={s.sign_in_text}>Sign In</div>
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

            </div>

            <div className={s.forgot}>
                <NavLink className={s.forgot_link} children={'Forgot Password'} to={'/forgotPass'}/>
            </div>

            <div className={s.input_box_buttons}>
                <SuperButton
                    onClick={signInBtnClickHandler}
                    className={signInBtnClass}
                    disabled={!formIsValid}
                >
                    Login
                </SuperButton>
            </div>
            <div className={s.account_text}>Don’t have an account?</div>
            <div className={s.sign_up_text}>
                <span onClick={signUpLinkHandler} className={s.sign_up_link}>Sign Up</span>
            </div>
        </section>
    );
};

export default SignInForm;