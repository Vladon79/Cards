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


const PacksListPageContainer = () => {

    const arrayNumbers = [4, 5, 6, 7, 8, 9, 10]
    const pageCount = useAppSelector<number>(state => state.packs.pageCount)
    const cardPacks = useAppSelector<PackResponseType[]>(state => state.packs.cardPacks)
    const cardPacksTotalCount = useAppSelector<number>(state => state.packs.cardPacksTotalCount)
    const page = useAppSelector<number>(state => state.packs.page)
    const minCardsCount = useAppSelector<number>(state => state.packs.minCardsCount)
    const maxCardsCount = useAppSelector<number>(state => state.packs.maxCardsCount)
    const userID = useAppSelector<string>(state => state.auth.user._id)

    const [pack, setPack] = useState<'allPack'|'myPack'>('allPack')

    const minDebounce = useDebounce(minCardsCount, 2000 )
    const maxDebounce = useDebounce(maxCardsCount, 2000 )



    useEffect(() => {
        dispatch(getCardsTC(pageCount, minCardsCount, maxCardsCount, page))
    }, [pageCount, minDebounce, maxDebounce])

    const setValuesOnSlider = (value: number[]) => {
        dispatch(setMaxMinNumberCardsAC(value[0], value[1]))

    }
    const dispatch = useDispatch()

    const changeNumberPage = (numberPage: number) => {
        dispatch(changeNumberPageAC(numberPage))
        dispatch(getCardsTC(pageCount, minCardsCount, maxCardsCount, numberPage))
    }
    const setPageCount = (n: number) => {
        dispatch(setPageCountAC(n))
    }

    const getMyPacks = () => {
        dispatch(getCardsTC(pageCount, minCardsCount, maxCardsCount, page, userID))
        setPack('myPack')
    }
    const getALlPacks = () => {
        dispatch(getCardsTC(pageCount, minCardsCount, maxCardsCount, page))
        setPack('allPack')
    }


    return <PacksListPage page={page} getMyPacks={getMyPacks} cardPacks={cardPacks} getAllPacks={getALlPacks}
                          setPageCount={setPageCount} pageCount={pageCount} cardPacksTotalCount={cardPacksTotalCount}
                          maxCardsCount={maxCardsCount} minCardsCount={minCardsCount} arrayNumbers={arrayNumbers}
                          changeNumberPage={changeNumberPage} setValuesOnSlider={setValuesOnSlider} pack={pack}/>
}

export default PacksListPageContainer