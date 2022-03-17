import SuperButton from "../../common/c2-SuperButton/SuperButton";
import {PackResponseType,} from "../../../bll/reducers/packs-reducer";
import HeaderTable from "./HeaderTable/HeaderTable";
import SuperSelect from "../../common/SuperComponents/SuperSelect";
import SuperDoubleRange from "../../common/SuperComponents/SuperDoubleRange";
import AddNewPack from "./AddNewPack/AddNewPack";
import TablePack from "./TablePack/TablePack";
import Paginator from "../../common/Paginator/Paginator";
import s from './PacksListPage.module.scss'

type PacksListPagePropsType = {
    pageCount: number
    cardPacks: PackResponseType[]
    cardPacksTotalCount: number
    page: number
    minCardsCount: number
    maxCardsCount: number
    arrayNumbers: number[]
    getMyPacks: () => void
    getAllPacks: () => void
    changeNumberPage: (numberPage: number) => void
    setPageCount: (n: number) => void
    setValuesOnSlider: (value: number[]) => void
    pack: 'allPack' | 'myPack'
    myUserID: string
}


const PacksListPage = ({
                           pageCount,
                           cardPacks,
                           cardPacksTotalCount,
                           page,
                           minCardsCount,
                           maxCardsCount,
                           arrayNumbers,
                           getMyPacks,
                           getAllPacks,
                           changeNumberPage,
                           setPageCount,
                           setValuesOnSlider,
                           pack, myUserID
                       }: PacksListPagePropsType) => {

    return (
        <div className={s.packsListPageContainer}>
            <div className={s.leftBlock}>
                <h6>Show packs cards</h6>
                <section className={s.buttonSection}>
                    <SuperButton disabled={pack === 'myPack'} cancele={pack === 'myPack'} className={s.button}
                                 onClick={getMyPacks}>My</SuperButton>
                    <SuperButton disabled={pack === 'allPack'} cancele={pack === 'allPack'} className={s.button}
                                 onClick={getAllPacks}>All</SuperButton>
                </section>
                <h6>Number of cards</h6>
                <SuperDoubleRange onChangeRange={setValuesOnSlider}
                                  value={[minCardsCount, maxCardsCount]}
                                  min={minCardsCount}
                                  max={maxCardsCount}
                />
            </div>

            <div className={s.rightBlock}>

                <AddNewPack/>
                <section className={s.table}>
                    <HeaderTable/>
                    {cardPacks.map(p => <TablePack key={p._id} id={p._id} myUserID={myUserID} user_id={p.user_id}
                                                   name={p.name}
                                                   cardsCount={p.cardsCount} user_name={p.user_name}
                                                   updated={p.updated}/>)}

                </section>

                <SuperSelect options={arrayNumbers}
                             value={pageCount}
                             onChangeOption={setPageCount}/>

                <Paginator totalCount={cardPacksTotalCount} pageSize={pageCount} currentPage={page}
                           changeNumberPage={changeNumberPage} portionSize={10}/>

            </div>
        </div>
    )
}

export default PacksListPage