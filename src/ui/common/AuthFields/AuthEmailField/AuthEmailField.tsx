import React from 'react';
import s from './AuthEmailField.module.scss'
import SuperInputText from "../../c1-SuperInputText/SuperInputText";

type AuthEmailPropsType = {
    email: string
    setEmail: (e: string) => void
}

export const AuthEmailField: React.FC<AuthEmailPropsType> = (props) => {

    const {email, setEmail} = props

    return (
        <div className={s.input_box}>
            <div className={s.input_name}>Email</div>
            <SuperInputText
                type={'email'}
                name={'email'}
                className={s.input_box_input_text}
                onChange={(e) => setEmail(e.currentTarget.value)}
                value={email}
            />
        </div>
    );
};

