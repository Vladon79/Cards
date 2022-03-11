import React, {ButtonHTMLAttributes, DetailedHTMLProps} from 'react'
import s from './SuperButton.module.scss'


// тип пропсов обычной кнопки, children в котором храниться название кнопки там уже описан
type DefaultButtonPropsType = DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>

type SuperButtonPropsType = DefaultButtonPropsType & {
    cancele?: boolean
}

const SuperButton: React.FC<SuperButtonPropsType> = (
    {
        cancele, className,
        ...restProps// все остальные пропсы попадут в объект restProps, там же будет children
    }
) => {

    const finalClassName = `${s.default} ${cancele && s.cancele} ${className}`

    return (

        <button
            onClick={restProps.onClick}
            className={finalClassName}
            {...restProps} // отдаём кнопке остальные пропсы если они есть (children там внутри)
        >
        </button>

    )
}

export default SuperButton
