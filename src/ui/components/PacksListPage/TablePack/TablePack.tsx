import s from './TablePack.module.scss'
import SuperButton from "../../../common/c2-SuperButton/SuperButton";
import RefactorMyPack from "./RefactorMyPack/RefactorMyPack";
import {useState} from "react";
import SuperInputText from "../../../common/c1-SuperInputText/SuperInputText";
import {useInput} from "../../../../hooks/useInput";

type PackType = {
    id: string
    user_id: string
    name: string
    cardsCount: number
    updated: any
    user_name: string
    myUserID: string
}

const TablePack = ({id, user_id, name, cardsCount, user_name, updated, myUserID}: PackType) => {
    const [update, setUpdate] = useState<boolean>(false)
    const newName = useInput(name, ['minLength'])

    return (
        <div className={s.pack}>
            {update && user_id === myUserID
                ? <SuperInputText name={'Ava'} value={newName.value}
                                  onChange={e => newName.valueChange(e.currentTarget.value)} autoFocus
                                  onBlur={() => setUpdate(false)}/>
                : <p onDoubleClick={() => setUpdate(true)} className={s.pack_block_name}>{newName.value}</p>}
            <p className={s.pack_block_cards}>{cardsCount}</p>
            <p className={s.pack_block_update}>{updated}</p>
            <p className={s.pack_block_createdBy}>{user_name}</p>
            {user_id === myUserID
                && <RefactorMyPack id={id} newName={newName.value} setUpdate={setUpdate}/>}
            <SuperButton className={s.button}>learn</SuperButton>
        </div>
    )
}
export default TablePack