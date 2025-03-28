import styled from "styled-components";

export const Title = styled.h3`
    margin: 64px 0 24px 0 ;
    text-align: center;
    span {
        color: #005CFF;
    }
`

export const ContainerInfo = styled.div`
     display: flex;
    align-items: center;
    gap: 20px;
    margin: 0 auto;
    background-color: #D5D5D5;
    width: 900px;
    padding: 40px 20px;
    border-radius: 5px;
    margin-bottom: 20px;
`

export const Input = styled.input`
    border: none;
    outline: none;
    padding: 10px;
    border-radius: 5px;
    width: 280px;

`

export const Label = styled.label`
   font-size: 12px;
   width: 400px;

   input {
    margin-right: 10px;
   }
`

export const Button = styled.button`
    background-color: #005CFF;
    color: #FFFFFF;
    padding: 10px;
    border-radius: 5px;
    border: none;
    cursor: pointer;
`