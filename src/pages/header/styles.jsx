import styled from "styled-components";
import { FaSearch, FaUser } from "react-icons/fa";


export const TopBar = styled.div`
  background-color: #005cff;
  padding: 5px 0;
  margin-bottom: 17px;
  p {
    color: #ffffff;
    text-align: center;
    font-weight: bold;
    font-size: 14px;
  }
  span {
    background-color: #542d97;
    border-radius: 5px;
    padding: 2px;
  }
`;

export const ContainerNavBar = styled.nav`
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const NavBar = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 1000px;
`;

export const SearchBar = styled.div`
  position: relative;
  display: flex;
  align-items: center;
`;

export const SearchInput = styled.input`
  border: none;
  border-radius: 10px;
  border: 1px solid #808080;
  width: 500px;
  padding: 10px;
  outline: none;
  margin-top: 20px;
`;


export const ContainerInput = styled.div`

height: 75px;
    p {
        font: bold;
    }
`


export const SearchIcon = styled(FaSearch)`
  position: absolute;
  right: 10px;
  top: 50%;
  transform: translateY(-50%);
  color: #666;
  cursor: pointer;
  font-size: 23px;
`;

export const UserContainer = styled.div`
 display: flex;
 align-items: center;
 position: relative;
 p{
    margin-right: 20px;
    font-size: 14px; 
 }
 
`

export const IconUser = styled(FaUser)`
    margin-right: 5px;
    color: #4d83dc;
    font-size: 20px;
`



export const Count = styled.span`
   position: absolute;
  top: -5px;
  right: -5px;
  background-color: #1100ff;
  color: white;
  font-size: 8px;
  font-weight: bold;
  padding: 3px 6px;
  border-radius: 50%; 
`



export const ContainerDepartament = styled.nav`
    display: flex;
    align-items: center;
    justify-content: center;
    margin-top: 22px;
    gap: 20px;
p{
    display: flex;
    align-items: center;
    gap: 5px;
}
`