import React from "react";
import { ButtonWrapperStyled } from "./styled";



export const Button = (props) => {
    const {
        className = "", btnType = "", onClick = () => { }, title = "", leftIcon = null, disabled = false, height, width
    } = props;

    return <ButtonWrapperStyled
        className={className}
        $btntype={btnType}
        width={width}
        height={height}
    >
        <button disabled={disabled} onClick={() => { onClick() }}>
            {
                leftIcon ? <span className="left-icon">
                    {leftIcon}
                </span> : null
            }
            {title}
        </button>

    </ButtonWrapperStyled>
}