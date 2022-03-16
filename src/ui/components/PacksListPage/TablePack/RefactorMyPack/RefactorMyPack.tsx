import SuperButton from "../../../../common/c2-SuperButton/SuperButton";
import {deletePackTC, updatePackTC} from "../../../../../bll/reducers/myPacks-reducer";
import {useDispatch} from "react-redux";
import s from '../TablePack.module.scss'

type RefactorMyPackPropsType = {
    id: string
    newName: string
    setUpdate: (bool: boolean) => void

}

const RefactorMyPack = (props: RefactorMyPackPropsType) => {

    const dispatch = useDispatch()

    const deletePack = () => {
        dispatch(deletePackTC(props.id))
    }
    const updatePack = () => {
        dispatch(updatePackTC(props.id, props.newName))
        props.setUpdate(false)
    }
    return (
        <div>
            <SuperButton className={` ${s.button} ${s.delete}`} onClick={deletePack}>Delete</SuperButton>
            <SuperButton className={s.button} onClick={updatePack}>Edit</SuperButton>
        </div>
    )
}

export default RefactorMyPack