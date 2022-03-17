import Slider from '@mui/material/Slider/Slider'
import React from 'react'
import s from './SuperDoubleRange.module.scss'

type SuperDoubleRangePropsType = {
    onChangeRange?: (value: number[]) => void
    value: [number, number]
    min: number
    max: number
    // min, max, step, disable, ...
}

const SuperDoubleRange: React.FC<SuperDoubleRangePropsType> = (
    {
        onChangeRange, value, ...restProps
        // min, max, step, disable, ...
    }
) => {


    const onChangeCallback = (event: Event, value: number | number[], activeThumb: number) => {
        if (typeof value === 'number') {
        } else {
            onChangeRange && onChangeRange(value)
        }
    }

    return (
        <>
            <div className={s.slider}>
                <Slider
                    value={value}
                    onChange={onChangeCallback}
                    valueLabelDisplay="auto"
                    color='primary'
                    size='medium'
                    min={0}
                    max={100}
                />
            </div>

        </>
    )
}

export default SuperDoubleRange