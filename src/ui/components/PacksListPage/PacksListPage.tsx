import SuperButton from "../../common/c2-SuperButton/SuperButton";
import Pack from "./Pack/Pack";
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
import SuperSelect from "./Pack/SuperComponents/SuperSelect";
import SuperDoubleRange from "./Pack/SuperComponents/SuperDoubleRange";
import Paginator from "./Paginator/Paginator";
import {getPackItemTC} from "../../../bll/reducers/packItem-reducer";
import {useNavigate} from "react-router-dom";


const PacksListPage = () => {
    const numbers = [4, 5, 6, 7, 8, 9, 10]
    const pageCount = useAppSelector<number>(state => state.packs.pageCount)
    const cardPacks = useAppSelector<PackResponseType[]>(state => state.packs.cardPacks)
    const cardPacksTotalCount = useAppSelector<number>(state => state.packs.cardPacksTotalCount)
    const page = useAppSelector<number>(state => state.packs.page)
    const minCardsCount = useAppSelector<number>(state => state.packs.minCardsCount)
    const maxCardsCount = useAppSelector<number>(state => state.packs.maxCardsCount)

    const navigate = useNavigate()

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

    const handleOnClick = (_id:string) => {
        dispatch(getPackItemTC(_id))
        navigate('/packItem')
    };

    return (
        <div>
            <Table/>
            {cardPacks.map(p => <Pack key={p._id} name={p.name} cardsCount={p.cardsCount} user_name={p.user_name}
                                      updated={p.updated} onClick={()=>handleOnClick(p._id)}/>)}
            <SuperButton onClick={getCards}>getCards</SuperButton>
            <SuperSelect options={numbers}
                         value={pageCount}
                         onChangeOption={setPageCount}/>
            <SuperDoubleRange onChangeRange={setValuesOnSlider}
                              value={[minCardsCount, maxCardsCount]}
                              min={minCardsCount}
                              max={maxCardsCount}
            />
            <Paginator totalUsersCount={cardPacksTotalCount} pageSize={pageCount}
                       currentPage={page} onPageChange={changeNumberPage}/>
        </div>
    )
}

export default PacksListPage