import React, {ButtonHTMLAttributes, DetailedHTMLProps} from 'react'
import s from './SuperButton.module.css'

// тип пропсов обычной кнопки, children в котором храниться название кнопки там уже описан
type DefaultButtonPropsType = DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>,
    HTMLButtonElement>

type SuperButtonPropsType = DefaultButtonPropsType & {
    xType?: string
}

const SuperButton: React.FC<SuperButtonPropsType> = (
    {
        xType,
        className,
        disabled,
        ...restProps // все остальные пропсы попадут в объект restProps, там же будет children
    }
) => {

    /*let finalClassName
    if (disabled) finalClassName = s.button + s.disabled
    else if (xType === 'red') finalClassName = s.button + s.red
    else if (xType === 'secondary') finalClassName = s.button + s.secondary
    else finalClassName = s.button + s.default*/
/////////////////
    /*const finalClassName =s.button
        + (disabled ? '' + s.disabled
                : xType === 'red'
                    ? ''+ s.red : xType === 'secondary' ? ''+ s.secondary: '')

       + (className ? ' ' + className : '') // задачка на смешивание классов*/

//////////////////
    const finalClassName = `${s.button}
        ${disabled 
        ? s.disabled : xType === 'red'
            ? s.red : xType === 'secondary'
                ? s.secondary : s.default}   
                ${className ? ' ' + className : ''}`

    // `${s.СТИЛЬ КНОПКИ}  ${xType==='КРАСНЫЙ' ? ДАВАЙ КРАСНЫЙ СТИЛЬ
    // : xType === 'secondary' ? ДАВАЙ СЕКОНДАРИ СТИЛЬ: ДАВАЙ ПО ДЕФОЛТУ }
    // ${disabled ? ДАВАЙ ДИЗАБЛЕТ СТИЛЬ :  ПУСТУЮ
    return (
        <button
            disabled={disabled}
            className={finalClassName}
            {...restProps} // отдаём кнопке остальные пропсы если они есть (children там внутри)
        />
    )
}

export default SuperButton
