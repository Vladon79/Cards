import React from 'react';
import s from "../SignUp.module.scss";
import ErrorBar from "../../../../common/ErrorBar/ErrorBar";
import {AuthEmailField} from "../../../../common/AuthFields/AuthEmailField/AuthEmailField";
import {AuthPassField} from "../../../../common/AuthFields/AuthPassField/AuthPassField";
import SuperButton from "../../../../common/c2-SuperButton/SuperButton";

const SignUpForm = (props: any) => {

    const {
        responseError,
        passwordInputMode,
        repeatPasswordInputMode,
        email,
        password,
        repeatPassword,
        cancelBtnHandler,
        registerBtnClickHandler,
        registerBtnClass,
        formIsValid
    } = props


    return (
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
    );
};

export default SignUpForm;