import styled from "styled-components"


const handleBGColor = ($btntype) => {
    switch ($btntype) {
        case "link":
            return "white"
        default:
            return "#ED0000"
    }
}

const handleBGColorHover = ($btntype) => {
    switch ($btntype) {
        case "link":
            return "white"
        default:
            return "#A61518"
    }
}

const handleBGColorFocus = ($btntype) => {
    switch ($btntype) {
        case "link":
            return "white"
        default:
            return "#4D0001"
    }
}

const handleColor = ($btntype) => {
    switch ($btntype) {
        case "link":
            return "#0073DD"
        default:
            return "white"
    }
}

const handleText = ($btntype) => {
    switch ($btntype) {
        case "link":
            return "underline"
        default:
            return "none"
    }
}


const handleBorderhover = ($btntype) => {
    switch ($btntype) {
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
        color : ${({ $btntype }) => handleColor($btntype)};
        background-color : ${({ $btntype }) => handleBGColor($btntype)};
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
        background-color : ${({ $btntype }) => handleBGColorHover($btntype)};
        cursor: pointer;
        text-decoration: ${({ $btntype }) => handleText($btntype)};
    }

    button:focus{
        background-color : ${({ $btntype }) => handleBGColorFocus($btntype)};
        cursor: pointer;
        border: ${({ $btntype }) => handleBorderhover($btntype)};

        svg{
            fill: #0073DD;
        }
    }

    button:disabled,button[disabled]{
        opacity:0.5;
        cursor: default;
    }
`

