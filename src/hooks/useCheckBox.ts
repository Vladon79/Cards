import {useState} from "react";

export const useCheckBox = (initialValue: boolean) => {

    const [isDone, setIsDone] = useState(initialValue)

    const handleCheckedChange = (e: boolean) => {
        setIsDone(e)
    }
    return {isDone, handleCheckedChange}
}