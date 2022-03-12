import React from "react";
import s from './Paginator.module.scss';

type PaginatorPropsType = {
    totalUsersCount: number
    pageSize: number
    currentPage: number
    onPageChange: (p: number) => void
}

const Paginator = React.memo(({totalUsersCount, pageSize, currentPage, onPageChange}: PaginatorPropsType) => {
    let pagesCount = Math.ceil(totalUsersCount / pageSize)
    const pages = []
    for (let i = 1; i <= 20; i++) {
        pages.push(i)
    }
    if(pagesCount > 20){
        pagesCount = 20
    }

    return (
        <div className={s.pageNumber}>
            {pages.map(p => <span key={p}
                                  className={currentPage === p ? s.selectedPage : s.notselectpage}
                                  onClick={() => onPageChange(p)}>{p}</span>
            )}
        </div>
    )
})

export default Paginator