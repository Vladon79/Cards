import {useCallback, useState} from "react";

export const useCheckBox = (initialValue: boolean) => {

    const [isDone, setIsDone] = useState(initialValue)

    const handleCheckedChange = useCallback((e: boolean) => {
        setIsDone(e)
    }, []);
    return {isDone, handleCheckedChange}
}