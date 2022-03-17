import s from '../Card/Card.module.scss'

const TablePackItem = () => {

    return (
        <div className={s.pack}>
            <p className={s.pack_block_name}>Question</p>
            <p className={s.pack_block_answer}>Answer</p>
            <p className={s.pack_block_update}>Last update</p>
            <p className={s.pack_block_createdBy}>Create by</p>
            <p className={s.pack_block_action}>Grade</p>

        </div>
    )
}
export default TablePackItem