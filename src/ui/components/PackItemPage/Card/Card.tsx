import s from './Card.module.scss'


type PackType = {
    question: string
    answer: string
    updated: string,
    create: string
    grade: number,


}

const Card = ({ question, answer, updated, create, grade}: PackType) => {

    return (
        <div className={s.pack}>
            <p className={s.pack_block_name}>{question}</p>
            <p className={s.pack_block_answer}>{answer}</p>
            <p className={s.pack_block_update}>{updated}</p>
            <p className={s.pack_block_createdBy}>{create}</p>
            <p className={s.pack_block_createdBy}>{grade}</p>
        </div>
    )
}
export default Card