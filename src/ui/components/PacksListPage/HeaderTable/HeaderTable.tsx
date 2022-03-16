import s from '../TablePack/TablePack.module.scss'



const HeaderTable = () => {
    return (
        <div className={s.pack}>
            <p className={s.pack_block_name}>Name</p>
            <p className={s.pack_block_cards}>Cards</p>
            <p className={s.pack_block_update}>Last update</p>
            <p className={s.pack_block_createdBy}>Create by</p>
            <p className={s.pack_block_action}>Actions</p>
        </div>
    )
}
export default HeaderTable