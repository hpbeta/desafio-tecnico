import clothing from "../../assets/clothing.png"
import { ContainerMain, Sale, SaleHeader } from "./styles"

export function Hero() {
    return (
        <ContainerMain>
            <img src={clothing} alt="Imagem de algumas roupas dobradas em cima de um banco" />
            <SaleHeader>
                <h1>
                    Super<span>sale</span>
                </h1>
                <p>Itens selecionados com até</p>
                <Sale>50% off</Sale>
            </SaleHeader>

        </ContainerMain>
    )
}