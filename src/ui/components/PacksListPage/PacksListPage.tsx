import SuperButton from "../../common/c2-SuperButton/SuperButton";
import Pack from "./Pack/Pack";
import {changeNumberPageAC, getCardsTC, PackResponseType, PacksResponseType} from "../../../bll/reducers/packs-reducer";
import {useDispatch} from "react-redux";
import {useAppSelector} from "../../../bll/store";
import Table from "./Table/Table";
import SuperSelect from "./Pack/SuperSelect";
import {useEffect, useState} from "react";
import SuperDoubleRange from "./Pack/SuperDoubleRange";
import Paginator from "./Paginator/Paginator";


const PacksListPage = () => {
    // const maxCardsCount = useAppSelector<number>(state => state.packs.maxCardsCount)
    const numbers = [4, 5, 6, 7, 8, 9, 10]
    const [number, setNumber] = useState(4)
    const packs = useAppSelector<PackResponseType[]>(state => state.packs.cardPacks)
    const packInfo = useAppSelector<PacksResponseType>(state => state.packs)

    useEffect(()=>{
        getCardsTC(packInfo.page, packInfo.maxCardsCount, packInfo.minCardsCount, packInfo.pageCount)
    }, [packInfo.page, packInfo.maxCardsCount, packInfo.minCardsCount, packInfo.pageCount])

    const [min, setMin] = useState<number>(1)
    const [max, setMax] = useState<number>(100)
    const setValuesOnSlider = (value: number[]) => {
        setMin(value[0])
        setMax(value[1])

    }
    const dispatch = useDispatch()

    const getCards = () => {
        dispatch(getCardsTC(number, min, max, packInfo.page))
    }

    const changeNumberPage = (numberPage: number) => {
        dispatch(changeNumberPageAC(numberPage))
    }

    return (
        <div>
            <Table/>
            {packs.map(p => <Pack key={p._id} name={p.name} cardsCount={p.cardsCount} user_name={p.user_name}
                                  updated={p.updated}/>)}
            <SuperButton onClick={getCards}>getCards</SuperButton>
            <SuperSelect options={numbers}
                         value={number}
                         onChangeOption={(e) => setNumber(e)}/>
            <SuperDoubleRange onChangeRange={setValuesOnSlider}
                              value={[min, max]}
                              min={0}
                              max={100}
            />
            <Paginator totalUsersCount={packInfo.cardPacksTotalCount} pageSize={packInfo.pageCount}
                       currentPage={packInfo.page} onPageChange={changeNumberPage}/>
        </div>
    )
}

export default PacksListPage