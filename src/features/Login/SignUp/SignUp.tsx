import React from 'react'
import s from './SignUp.module.scss'

export const SignUp = () => {


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
                            <input type={'email'}/>
                        </div>

                        <div className={s.input_box}>
                            <div className={s.input_name}>Password</div>
                            <input type={'password'}/>
                        </div>

                        <div className={s.input_box}>
                            <div className={s.input_name}>Confirm password</div>
                            <input type={'password'}/>
                        </div>
                    </div>

                    <div className={s.input_box_buttons}>

                        <button className={s.btn_cancel}>Cancel</button>
                        <button className={s.btn_register}>Register</button>

                    </div>
                </form>
            </section>
        </section>
    )
}

