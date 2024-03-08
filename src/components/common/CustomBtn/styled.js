import styled from "styled-components"


const handleBGColor = (btnType) => {
    switch (btnType) {
        case "link":
            return "white"
        default:
            return "#ED0000"
    }
}

const handleBGColorHover = (btnType) => {
    switch (btnType) {
        case "link":
            return "white"
        default:
            return "#A61518"
    }
}

const handleBGColorFocus = (btnType) => {
    switch (btnType) {
        case "link":
            return "white"
        default:
            return "#4D0001"
    }
}

const handleColor = (btnType) => {
    switch (btnType) {
        case "link":
            return "#0073DD"
        default:
            return "white"
    }
}

const handleText = (btnType) => {
    switch (btnType) {
        case "link":
            return "underline"
        default:
            return "none"
    }
}


const handleBorderhover = (btnType) => {
    switch (btnType) {
        case "link":
            return "1px solid #0073DD"
        default:
            return "none"
    }
}

export const ButtonWrapperStyled = styled.div`
    display: flex;
    justify-content: center;

    button{
        color : ${({ btnType }) => handleColor(btnType)};
        background-color : ${({ btnType }) => handleBGColor(btnType)};
        border: none;
        border-radius: 7px;
        height: 48px;
        ${({ height }) => height ? `height:${height} ;` : ""}
        ${({ width }) => width ? `width:${width} ;` : ""}
        margin: 10px;
        font-size: 16px;
        font-weight: bold;
        display: flex;
        align-items: center;
        justify-content: center;
    }

    .left-icon{
        margin-right:10px;
    }
    

    button:hover{
        background-color : ${({ btnType }) => handleBGColorHover(btnType)};
        cursor: pointer;
        text-decoration: ${({ btnType }) => handleText(btnType)};
    }

    button:focus{
        background-color : ${({ btnType }) => handleBGColorFocus(btnType)};
        cursor: pointer;
        border: ${({ btnType }) => handleBorderhover(btnType)};

        svg{
            fill: #0073DD;
        }
    }

    button:disabled,button[disabled]{
        opacity:0.5;
        cursor: default;
    }
`

