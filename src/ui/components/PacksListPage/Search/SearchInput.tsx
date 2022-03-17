import s from "./SearchInput.module.scss";

type SearchInputPropsType = {
    searchOnChange: (e: string) => void
    searchValue: string
}

const SearchInput = ({searchOnChange, searchValue}: SearchInputPropsType) => {

    return <input placeholder={'🔍Search...'} className={s.input} name={'Name'} value={searchValue}
                  onChange={e => searchOnChange(e.currentTarget.value)}/>
}

export default SearchInput