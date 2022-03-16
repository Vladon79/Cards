import SuperInputText from "../../../common/c1-SuperInputText/SuperInputText";
import SuperButton from "../../../common/c2-SuperButton/SuperButton";
import {useInput} from "../../../../hooks/useInput";
import SuperCheckbox from "../../../common/c3-SuperCheckbox/SuperCheckbox";
import {useState} from "react";
import {addNewPackTC} from "../../../../bll/reducers/packs-reducer";
import {useDispatch} from "react-redux";
import s from './AddNewPack.module.scss'

const AddNewPack = () => {
    const [privateBoolean, setPrivateBoolean] = useState<boolean>(false)
    const dispatch = useDispatch()
    const name = useInput('', {isEmpty: true, minLength: 2})

    const addNewPack = () => {
        dispatch(addNewPackTC(name.value, privateBoolean))
    }

    return (

        <div className={s.addNewPackContainer}>
            <h2>Packs list</h2>
            <section className={s.input_button}>
                <SuperInputText className={s.input} name={'Name'} value={name.value}
                                onChange={e => name.onChange(e.currentTarget.value)}/>
                <SuperButton onClick={addNewPack}>Add new pack</SuperButton>
            </section>

            <div>
                <SuperCheckbox children={'Private'} checked={privateBoolean}
                               onChange={(e) => setPrivateBoolean(e.currentTarget.checked)}/>
            </div>

        </div>
    )

}
export default AddNewPack