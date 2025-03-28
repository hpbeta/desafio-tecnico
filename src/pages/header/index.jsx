import { FaShoppingCart, FaBars } from "react-icons/fa";
import logo from "../../assets/logo.png";
import {
  ContainerDepartament,
  ContainerInput,
  ContainerNavBar,
  Count,
  IconUser,
  NavBar,
  SearchBar,
  SearchIcon,
  SearchInput,
  TopBar,
  UserContainer,
} from "./styles";
import { useState } from "react";

export function Header() {
  const [inputValue, setInputValue] = useState("");
  const [searchText, setSearchText] = useState("");

  return (
    <header>
      <TopBar>
        <p>
          Ganhe <span>R$10,00</span> de desconto no seu primeiro pedido. Utilize
          o cupom DESCONTO10
        </p>
      </TopBar>
      <ContainerNavBar>
        <NavBar>
          <img src={logo} alt="Logotipo" />
          <SearchBar>
            <ContainerInput>
              <SearchInput
                type="text"
                placeholder="Digite aqui o que você procura"
                onChange={(e) => setInputValue(e.target.value)}
                value={inputValue}
              />
              {searchText && <p>Você digitou por: {searchText}</p>}
            </ContainerInput>
            <button
              onClick={() => {
                setSearchText(inputValue);
                setInputValue("");
              }}
            >
              <SearchIcon />
            </button>
          </SearchBar>

          <UserContainer>
            <IconUser />
            <p> Olá, Nome Cliente!</p>
            <FaShoppingCart size={"20px"} />
            <Count>2</Count>
          </UserContainer>
        </NavBar>
      </ContainerNavBar>
      <ContainerDepartament>
        <p>
          <FaBars /> Todas as categorias
        </p>
        {Array(7)
          .fill("Departamento")
          .map((item, index) => (
            <a key={index}>{item}</a>
          ))}
      </ContainerDepartament>
    </header>
  );
}
