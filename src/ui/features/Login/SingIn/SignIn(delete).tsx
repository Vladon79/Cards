import React from 'react';

const SignInDelete = () => {
    return (
        <div>
            
        </div>
    );
};

export default SignInDelete;



/*
import SuperInputText from "../../../ui/common/c1-SuperInputText/SuperInputText";
import style from "../../../styles/container.module.scss"
import SuperButton from "../../../ui/common/c2-SuperButton/SuperButton";
import SuperCheckbox from "../../../ui/common/c3-SuperCheckbox/SuperCheckbox";
import {useDispatch} from "react-redux";
import {useAppSelector} from "../../../bll/store";
import {singInTC} from "../../../bll/reducers/singInReducer";
import {Navigate} from "react-router-dom";
import {selectorSingIn} from "./selectors";
import {useInput} from "../../../hooks/useInput";
import {useCheckBox} from "../../../hooks/useCheckBox";



const SignIn = () => {

    const isSingIn = useAppSelector<boolean>(selectorSingIn)

    const dispatch = useDispatch()

    const email = useInput('',{isEmpty: true, minLength: 3, isEmail: true})
    const password = useInput('',{isEmpty: true, minLength: 3, maxLength: 25, isPassword: true})
    const rememberMe = useCheckBox(false)

    const singInData = {email: email.value, password: password.value, rememberMe: rememberMe.isDone}

    const singIn = () => dispatch(singInTC(singInData))

    if (isSingIn) return <Navigate to='/profile'/>

    return (
        <div>
            <div className={style.container}>
                <div>
                    <h2>Sign in</h2>
                    <form>
                        {(email.isDirty && email.isEmpty) && <div style={{color: 'red'}}>Field is required</div>}
                        {(email.isDirty && email.minLengthError) && <div style={{color: 'red'}}>Email is short</div>}
                        {(email.isDirty && email.emailError) && <div style={{color: 'red'}}>Email is not valid</div>}
                        <SuperInputText
                            value={email.value}
                            name='email'
                            type='text'
                            placeholder='Enter e-mail'
                            onChange={(e)=>email.onChange(e)}
                            onBlur={(e)=>email.onBlur(e)}
                        />
                        {(password.isDirty && password.isEmpty) && <div style={{color: 'red'}}>Field is required</div>}
                        {(password.isDirty && password.minLengthError) && <div style={{color: 'red'}}>Password is short</div>}
                        {(password.isDirty && password.maxLengthError) && <div style={{color: 'red'}}>Password is long</div>}
                        <SuperInputText
                            value={password.value}
                            name='password'
                            type='password'
                            placeholder='Enter password'
                            onChange={(e)=>password.onChange(e)}
                            onBlur={(e)=>password.onBlur(e)}
                        />
                    </form>
                    <div>
                        <SuperCheckbox
                            name='rememberMe'
                            checked={rememberMe.isDone}
                            onChangeChecked={(e)=>rememberMe.handleCheckedChange(e)}
                        >Remember me</SuperCheckbox>
                    </div>
                    <SuperButton disabled={!email.isValid || !password.isValid}
                                 type='submit' onClick={singIn}>Sing In</SuperButton>
                </div>
            </div>
        </div>
    )
}

export default SignIn
*/
