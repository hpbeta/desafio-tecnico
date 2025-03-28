import styled from "styled-components";



export const ContainerMain = styled.div`
    display: flex;
    align-items: center;
    gap: 20px;
    background-color: #E7E7EA;
    margin-top: 18px;
    text-transform: uppercase;

   
`

export const SaleHeader = styled.div`
    text-align: center;
    h1{
        font-size: 100px;
    }
    span {
        font-weight: lighter;
    }

    img {
        width: 685px;
    }
    p {
        text-transform: uppercase;
        color: #005CFF;
        letter-spacing: 5px;
        font-weight: 600;
        font-size: 25px;
        margin-bottom: 12px;
    }
`

export const Sale = styled.span`
    font-size: 60px;
    font-weight: 600 !important;
    color: #005CFF;
    text-transform: uppercase;
`