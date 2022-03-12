import s from './Pack.module.scss'

type PackType = {
    name: string
    cardsCount: number
    updated: any
    user_name: string
}

const Pack = ({name, cardsCount, user_name, updated}: PackType) => {
    return (
        <div className={s.pack}>
            <p className={s.pack_block}>{name}</p>
            <p className={s.pack_block}>{cardsCount}</p>
            <p className={s.pack_block}>{updated}</p>
            <p className={s.pack_block}>{user_name}</p>
            <p className={s.pack_block}>{updated}</p>
        </div>
    )
}
export default Pack