import React from 'react'
import s from './SignUp.module.scss'
import {ping, register} from "../../../bll/reducers/sign-up-reducer";
import {useDispatch} from "react-redux";
import SuperButton from "../../../ui/common/c2-SuperButton/SuperButton";




export const SignUp = () => {

    const dispatch = useDispatch()


    const btnClickHandler = () => {
        dispatch(register("test0703@test.ru", "qwerty123"))
    }

    const testBtnClickHandler = () => {
        const time = new Date().getTime()
        dispatch(ping(time))
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

                        <SuperButton className={s.btn_cancel} value={'Cancel'}/>
                        <button className={s.btn_register} onClick={btnClickHandler}>Register</button>
                        <button className={s.btn_cancel} onClick={testBtnClickHandler}>Test</button>



                    </div>
                </form>
            </section>
        </section>
    )
}

