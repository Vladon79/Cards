import s from '../Pack/Pack.module.scss'



const Table = () => {
    return (
        <div className={s.pack}>
            <p className={s.pack_block}>Name</p>
            <p className={s.pack_block}>Cards</p>
            <p className={s.pack_block}>Last update</p>
            <p className={s.pack_block}>Create by</p>
            <p className={s.pack_block}>Actions</p>
        </div>
    )
}
export default Table