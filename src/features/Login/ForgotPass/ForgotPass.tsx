import React, {useState} from "react";
import s from './ForgotPass.module.scss'
import SuperButton from "../../../ui/common/c2-SuperButton/SuperButton";
import {AuthEmailField} from "../../../ui/common/AuthFields/AuthEmailField/AuthEmailField";


export const ForgotPass = () => {

    const [email, setEmail] = useState<string>('')


    const handleForgotBtn = () => {

    };

    const handleForgotLink = () => {

    };

    return (
        <section className={s.main_box}>
            <section className={s.forgot_box}>

                <div>
                    <div className={s.logo_text}>It-incubator</div>
                    <div className={s.forgot_text}>Forgot your password?</div>
                </div>
                <div className={s.input_box_form}>
                    <AuthEmailField
                        email={email}
                        text={''}
                        setEmail={setEmail}
                        placeholder={'Email'}
                    />
                    <div className={s.email_instructions}>
                        <span className={s.email_instructions_text}>Enter your email address and we will send you further instructions </span>
                    </div>


                </div>
                <div className={s.input_box_buttons}>
                    <SuperButton className={s.btn_send_instructions} onClick={handleForgotBtn}>Send Instructions</SuperButton>
                </div>

                <div className={s.email_remember}>
                    <span className={s.email_instructions_text}>Did you remember your password?</span>
                </div>
                <div className={s.try_login_text}>
                    <span onClick={handleForgotLink} className={s.try_login_link}>Try logging in</span>
                </div>
            </section>
        </section>
    )
}

