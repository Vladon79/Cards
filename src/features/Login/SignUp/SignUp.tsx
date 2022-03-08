import React from 'react'
import s from './SignUp.module.scss'
import {ping, register} from "../../../bll/reducers/sign-up-reducer";
import {useDispatch} from "react-redux";
import SuperButton from "../../../ui/common/c2-SuperButton/SuperButton";
import SuperInputText from "../../../ui/common/c1-SuperInputText/SuperInputText";




export const SignUp = () => {

    const dispatch = useDispatch()


    const cancelBtnClickHandler = () => {
        console.log('Cancel btn pushed')
    }

    const registerBtnClickHandler = () => {
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
                            <SuperInputText type={'email'} className={s.input_box_input_text}/>
                        </div>

                        <div className={s.input_box}>
                            <div className={s.input_name}>Password</div>
                            <SuperInputText type={'password'} className={s.input_box_input_text}/>
                        </div>

                        <div className={s.input_box}>
                            <div className={s.input_name}>Confirm password</div>
                            <SuperInputText type={'password'} className={s.input_box_input_text}/>
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

