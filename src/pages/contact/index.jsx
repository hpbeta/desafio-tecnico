import imageAvanti from "../../assets/avanti.png"
import { Container } from "./styles"

export function Contact() {
    return (
        <Container>
            <img src={imageAvanti} alt="Imagem com uma logo da Avanti" />
            <p>Entre em contato conosco e verifique a disponibilidade para sua região!</p>
        </Container>
    )
}