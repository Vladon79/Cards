import SuperInputText from "../../../common/c1-SuperInputText/SuperInputText";
import SuperButton from "../../../common/c2-SuperButton/SuperButton";
import {ChangeEvent, useState} from "react";
import {useDispatch} from "react-redux";
import {changeProfileTC} from "../../../../bll/reducers/auth-reducer";

type ChangeProfilePropsType = {
    userName: string
    avatar: string
}

const ChangeProfile = ({userName, avatar}: ChangeProfilePropsType) => {
    const [name, setName] = useState<string>('')
    const dispatch = useDispatch()
    const nameOnChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
        setName(e.currentTarget.value)
    }

    const nameChangeOnClickHandler = () => {
        dispatch(changeProfileTC(name, 'https://images.unsplash.com/photo-1614027164847-1b28cfe1df60?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8M3x8fGVufDB8fHx8&w=1000&q=80'))
    }
    return (
        <>
            <SuperInputText name={'Name'} value={name} onChange={nameOnChangeHandler}/>
            <SuperButton onClick={nameChangeOnClickHandler}>change Name</SuperButton>

        </>
    )
}

export default ChangeProfile