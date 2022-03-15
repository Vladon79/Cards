import SuperButton from "../../common/c2-SuperButton/SuperButton";
import {
    changeNumberPageAC,
    getCardsTC,
    PackResponseType,
    setMaxMinNumberCardsAC,
    setPageCountAC,
} from "../../../bll/reducers/packs-reducer";
import {useDispatch} from "react-redux";
import {useAppSelector} from "../../../bll/store";
import Table from "./Table/Table";
import SuperSelect from "./TablePack/SuperComponents/SuperSelect";
import SuperDoubleRange from "./TablePack/SuperComponents/SuperDoubleRange";
import AddNewPack from "./AddNewPack/AddNewPack";
import TablePack from "./TablePack/TablePack";
import Paginator1 from "../../common/Paginator/Paginator";


const PacksListPage = () => {
    const numbers = [4, 5, 6, 7, 8, 9, 10]
    const pageCount = useAppSelector<number>(state => state.packs.pageCount)
    const cardPacks = useAppSelector<PackResponseType[]>(state => state.packs.cardPacks)
    const cardPacksTotalCount = useAppSelector<number>(state => state.packs.cardPacksTotalCount)
    const page = useAppSelector<number>(state => state.packs.page)
    const minCardsCount = useAppSelector<number>(state => state.packs.minCardsCount)
    const maxCardsCount = useAppSelector<number>(state => state.packs.maxCardsCount)
    const userID = useAppSelector<string>(state => state.auth.user._id)

    const setValuesOnSlider = (value: number[]) => {
        dispatch(setMaxMinNumberCardsAC(value[0], value[1]))

    }
    const dispatch = useDispatch()

    const getCards = () => {
        dispatch(getCardsTC(pageCount, minCardsCount, maxCardsCount, page))
    }

    const changeNumberPage = (numberPage: number) => {
        dispatch(changeNumberPageAC(numberPage))
        dispatch(getCardsTC(pageCount, minCardsCount, maxCardsCount, numberPage))
    }
    const setPageCount = (e: number) => {
        dispatch(setPageCountAC(e))
    }

    const getMyPacks = () => {
        dispatch(getCardsTC(pageCount, minCardsCount, maxCardsCount, page, userID))
    }
    const getALlPacks = () => {
        dispatch(getCardsTC(pageCount, minCardsCount, maxCardsCount, page))
    }


    return (
        <div>
            <SuperButton onClick={getMyPacks}>My</SuperButton>
            <SuperButton onClick={getALlPacks}>All</SuperButton>
            <Table/>
            {cardPacks.map(p => <TablePack key={p._id} id={p._id} user_id={p.user_id} name={p.name}
                                           cardsCount={p.cardsCount} user_name={p.user_name}
                                           updated={p.updated}/>)}
            <SuperButton onClick={getCards}>getCards</SuperButton>
            <SuperSelect options={numbers}
                         value={pageCount}
                         onChangeOption={setPageCount}/>
            <SuperDoubleRange onChangeRange={setValuesOnSlider}
                              value={[minCardsCount, maxCardsCount]}
                              min={minCardsCount}
                              max={maxCardsCount}
            />
            <Paginator1 totalCount={cardPacksTotalCount} pageSize={pageCount} currentPage={page}
                        onPageChange={changeNumberPage} portionSize={20}/>

            <div>
                <AddNewPack/>
            </div>
        </div>
    )
}

export default PacksListPage