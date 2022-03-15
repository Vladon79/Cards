import SuperButton from "../../../../common/c2-SuperButton/SuperButton";
import {packsApi} from "../../../../../dal/api/packs-api";
import {deletePackTC, updatePackTC} from "../../../../../bll/reducers/myPacks-reducer";
import {useDispatch} from "react-redux";

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
            <SuperButton onClick={deletePack}>delete</SuperButton>
            <SuperButton onClick={updatePack}>edit</SuperButton>
        </div>
    )
}

export default RefactorMyPack