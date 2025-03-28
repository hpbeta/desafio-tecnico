import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    justify-content: center;
   margin-top: 50px;
   margin-left: 30px;
`

export const ContainerItem = styled.div`
    border: 1px solid #808080;
    width: 238px;
    padding: 10px;
    border-radius: 10px;
    position: relative;

    span {
        background-color: #00264e;
        position: absolute;
        color: #FFFFFF;
        border-radius: 5px;
        padding: 5px;
        top: 8px;
        left: 13px;
    }
`

export const Title = styled.h3`
    font-size: 15px;
    margin: 10px 0;
`

export const ContainerPrice = styled.div`
    display: flex;
    align-items: center;
    gap: 10px;
`

export const Price = styled.p`
    text-decoration: line-through;
    font-size: 12px;
`
export const Offer = styled.p`
    background-color: #5EC0BE;
    text-decoration: underline;
    color: #FFFFFF;
    border-radius: 5px;
    padding: 4px;
`

export const Installments = styled.p`
    font-size: 12px;
    margin-bottom: 16px;
`

export const Button = styled.button`
    background-color: #005CFF;
    color: #FFFFFF;
    border-radius: 8px;
    border: none;
    padding: 10px 0;
    width: 220px ;

`
// export const ProductCard = styled.div`
//   width: 200px;
//   border: 1px solid #ccc;
//   padding: 10px;
//   margin: 10px;
//   display: flex;
//   flex-direction: column;
//   align-items: center;
// `;

// export const ProductImage = styled.img`
//   width: 150px;
//   height: 150px;
//   object-fit: cover;
//   margin-bottom: 10px;
// `;

// export const ProductName = styled.h3`
//   font-size: 16px;
//   margin-bottom: 5px;
// `;

// export const ProductPrice = styled.p`
//   font-size: 14px;
//   color: #888;
//   margin-bottom: 5px;
// `;

// export const ProductDiscount = styled.p`
//   font-size: 14px;
//   color: red;
//   margin-bottom: 5px;
// `;

// export const ProductInstallments = styled.p`
//   font-size: 12px;
//   color: #888;
//   margin-bottom: 10px;
// `;

// export const BuyButton = styled.button`
//   background-color: #007bff;
//   color: white;
//   border: none;
//   padding: 10px 20px;
//   cursor: pointer;
// `;