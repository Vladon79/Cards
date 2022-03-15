import s from './TablePack.module.scss'
import SuperButton from "../../../common/c2-SuperButton/SuperButton";
import {packsApi} from "../../../../dal/api/packs-api";
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
}

const TablePack = ({id, user_id, name, cardsCount, user_name, updated}: PackType) => {
    const [update, setUpdate] = useState<boolean>(false)
    const newName = useInput(name, {minLength: 2})

    return (
        <div className={s.pack}>
            {update && user_id === '622b914d6f9c0c17a38dfe09'
                ? <SuperInputText name={'Ava'} value={newName.value}
                                  onChange={e => newName.onChange(e.currentTarget.value)} autoFocus
                                  onBlur={() => setUpdate(false)}/>
                : <p onDoubleClick={() => setUpdate(true)} className={s.pack_block_name}>{name}</p>}
            <p className={s.pack_block_cards}>{cardsCount}</p>
            <p className={s.pack_block_update}>{updated}</p>
            <p className={s.pack_block_createdBy}>{user_name}</p>
            {user_id === "622b914d6f9c0c17a38dfe09"
                && <RefactorMyPack id={id} newName={newName.value} setUpdate={setUpdate}/>}
            <SuperButton>learn</SuperButton>
        </div>
    )
}
export default TablePack