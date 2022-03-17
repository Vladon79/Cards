import {
    changeNumberPageAC,
    getCardsTC,
    PackResponseType,
    setMaxMinNumberCardsAC,
    setPageCountAC,
} from "../../../bll/reducers/packs-reducer";
import {useDispatch} from "react-redux";
import {useAppSelector} from "../../../bll/store";
import PacksListPage from "./PacksListPage";
import {useEffect, useState} from "react";
import {useDebounce} from "../../../hooks/useDebounce";
import {addNewPackTC} from "../../../bll/reducers/myPacks-reducer";
import {useInput} from "../../../hooks/useInput";


const PacksListPageContainer = () => {

    const dispatch = useDispatch()

    const arrayNumbers = [4, 5, 6, 7, 8, 9, 10]
    const pageCount = useAppSelector<number>(state => state.packs.pageCount)
    const cardPacks = useAppSelector<PackResponseType[]>(state => state.packs.cardPacks)
    const myCardPacks = useAppSelector<PackResponseType []>(state => state.myPacks.cardPacks)
    const cardPacksTotalCount = useAppSelector<number>(state => state.packs.cardPacksTotalCount)
    const page = useAppSelector<number>(state => state.packs.page)
    const minCardsCount = useAppSelector<number>(state => state.packs.minCardsCount)
    const maxCardsCount = useAppSelector<number>(state => state.packs.maxCardsCount)

    const myUserID = useAppSelector<string>(state => state.auth.user._id)


    const [pack, setPack] = useState<'myPack' | 'allPack'>('myPack')

    const search = useInput('', [])

    const searchDebounce = useDebounce(search.value, 1500)
    const minDebounce = useDebounce(minCardsCount, 1000)
    const maxDebounce = useDebounce(maxCardsCount, 1000)

    useEffect(() => {
        dispatch(getCardsTC(pack, String(searchDebounce), pageCount, minCardsCount, maxCardsCount, page, myUserID))
    }, [pageCount, minDebounce, maxDebounce, pack, page, myCardPacks, searchDebounce])

    const setValuesOnSlider = (value: number[]) => {
        dispatch(setMaxMinNumberCardsAC(value[0], value[1]))
    }


    const changeNumberPage = (numberPage: number) => {
        dispatch(changeNumberPageAC(numberPage))
        // dispatch(getCardsTC(pageCount, minCardsCount, maxCardsCount, numberPage))
    }
    const setPageCount = (n: number) => {
        dispatch(setPageCountAC(n))
    }

    const getMyPacks = () => {
        setPack('myPack')
    }
    const getALlPacks = () => {
        setPack('allPack')
    }

    const addNewPack = () => {
        dispatch(addNewPackTC('new Pack', false))
    }


    return <PacksListPage myUserID={myUserID} page={page} getMyPacks={getMyPacks} cardPacks={cardPacks}
                          getAllPacks={getALlPacks}
                          setPageCount={setPageCount} pageCount={pageCount} cardPacksTotalCount={cardPacksTotalCount}
                          maxCardsCount={maxCardsCount} minCardsCount={minCardsCount} arrayNumbers={arrayNumbers}
                          changeNumberPage={changeNumberPage} setValuesOnSlider={setValuesOnSlider} pack={pack}
                          addNewPack={addNewPack}
                          searchValue={search.value} searchOnChange={search.valueChange}/>
}

export default PacksListPageContainer