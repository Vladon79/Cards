import React, {useState} from "react";
import s from './Paginator.module.scss';
import SuperButton from "../c2-SuperButton/SuperButton";


type PaginatorPropsType = {
    totalCount: number
    pageSize: number
    currentPage: number
    onPageChange: (p: number) => void
    portionSize: number
}

const Paginator1 = React.memo(({
                                   totalCount,
                                   pageSize,
                                   currentPage,
                                   onPageChange,
                                   portionSize
                               }: PaginatorPropsType) => {


    const pagesCount = Math.ceil(totalCount / pageSize)
    const pages = []
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i)
    }

    const portionCount = Math.ceil(pagesCount / portionSize)
    const [portionNumber, setPortionNumber] = useState<number>(1)
    const leftPortionPageNumber = (portionNumber - 1) * portionSize + 1
    const rightPortionPageNumber = portionNumber * portionSize

    return (
        <div className={s.pageNumber}>
            {portionNumber > 1 &&
                <SuperButton onClick={() => setPortionNumber(portionNumber - 1)}>prev</SuperButton>
            }
            {pages
                .filter(p => p >= leftPortionPageNumber && p <= rightPortionPageNumber)
                .map(p => <span key={p}
                                className={currentPage === p ? s.selectedPage : s.notselectpage}
                                onClick={() => onPageChange(p)}>{p}</span>
                )}
            {portionCount - portionNumber > 1 &&
                <SuperButton onClick={() => setPortionNumber(portionNumber + 1)}>next</SuperButton>
            }
        </div>
    )
})

export default Paginator1