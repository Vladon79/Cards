import React from 'react';
import s from './AuthEmailField.module.scss'
import SuperInputText from "../../c1-SuperInputText/SuperInputText";

type AuthEmailPropsType = {
    email: string
    setEmail: (e: string) => void
    text:string
    placeholder?: string
    onBlur?: () => void

}

export const AuthEmailField: React.FC<AuthEmailPropsType> = (props) => {

    const {email, setEmail, placeholder, onBlur, text} = props

    return (
        <div className={s.input_box}>
            <div className={s.input_name}>{text}</div>
            <SuperInputText
                type={'email'}
                name={'email'}
                placeholder={placeholder}
                className={s.input_box_input_text}
                onChange={(e) => setEmail(e.currentTarget.value)}
                value={email}
                onBlur={onBlur}
            />
        </div>
    );
};

