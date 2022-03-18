import s from './TablePackItem.module.scss'
import {useAppSelector} from "../../../../bll/store";
import {PackItemResponseType} from "../../../../bll/reducers/packItem-reducer";

const TablePackItem = () => {
    const packItem = useAppSelector<PackItemResponseType>(state => state.packItem)
    const myUserID = useAppSelector<string>(state => state.auth.user._id)
    return (
        <div className={s.pack}>
            <p className={s.pack_block_question}>Question</p>
            <p className={s.pack_block_answer}>Answer</p>
            <p className={s.pack_block_update}>Last update</p>
            <p className={s.pack_block_createdBy}>Create by</p>
            <p className={s.pack_block_grade}>Grade</p>
            {packItem.packUserId === myUserID && <p className= {s.pack_block_action}>Action</p>}
        </div>
    )
}
export default TablePackItem