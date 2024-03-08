import styled from "styled-components"


export const CustCardWrapperStyled = styled.div`
    width: 400px;
    // height: 230px;
    border-radius: 8px;
    border: 2px solid #CCCCCC;
    margin: 10px;
    display: flex;
    align-items: center;
    justify-content: center;
    padding:20px;
    cursor:pointer;

    .card-top-sec{
        display: flex;
    }

    .card-content{
        // height: 150px;
        width: 350px;
        display: flex;
        flex-direction: column;
        justify-content: space-between;

        .card-middle-sec{
            display: flex;
            align-items: center;
            justify-content: space-between;

            .card-dates-sec{
                text-align: left;
                padding: 0 15px;

                .card-dates{
                    font-size: 20px;
                    font-weight: bold;
                }
                .card-time{
                    font-size: 18px;
                    font-weight: 500;
                    padding: 5px 0;
                }
                .card-timezone{
                    font-size: 14px;
                }
            }
        }

        .card-price-sec{
            text-align: left;
            padding: 15px;
            font-size: 14px;

            span{
                font-weight: 500;
            }
        }
    }

    &:focus{
        border: 2px solid #0073DD;
    }

    &:hover{
        border: 2px solid #4D0001;
    }
    
`