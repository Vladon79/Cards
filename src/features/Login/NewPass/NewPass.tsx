import React, {MouseEvent, useCallback, useState} from 'react';
import s from './NewPass.module.scss'
import {AuthEmailField} from "../../../ui/common/AuthFields/AuthEmailField/AuthEmailField";
import {AuthPassField} from "../../../ui/common/AuthFields/AuthPassField/AuthPassField";
import {InputFieldType} from "../SignUp/SignUp";
import SuperButton from "../../../ui/common/c2-SuperButton/SuperButton";


export const NewPass = () => {

    const [password, setPassword] = useState<string>('')
    const [isShowPassword, setIsShowPassword] = useState<boolean>(false)

    const showPassword = useCallback(() => {
        setIsShowPassword(!isShowPassword)
    }, [isShowPassword])

    const passwordInputMode: InputFieldType = !isShowPassword ? 'password' : 'text'


    const handleCreatePassBtn = (e: MouseEvent) => {
        e.preventDefault()
    };

    return (
        <section className={s.main_box}>
            <section className={s.create_pass_box}>

                <div>
                    <div className={s.logo_text}>It-incubator</div>
                    <div className={s.create_pass_text}>Create new password</div>
                </div>


                <div className={s.input_box_form}>

                    <AuthPassField
                        type={passwordInputMode}
                        password={password}
                        isShowPassword={isShowPassword}
                        setPassword={setPassword}
                        showPassword={showPassword}
                        text={''}
                        placeholder={'Password'}
                    />
                </div>

                <div className={s.create_instructions}>
                    <span className={s.create_instructions_text}>Create new password and we will send you further instructions to email</span>
                </div>

                <div className={s.input_box_buttons}>
                    <SuperButton
                        onClick={(e)=>handleCreatePassBtn(e)}
                        className={s.createPassBtn}
                    >
                        Create new password
                    </SuperButton>
                </div>
            </section>
        </section>
    );
};

