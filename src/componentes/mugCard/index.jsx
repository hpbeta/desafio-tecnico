import mug1 from "../../assets/mug_1.png";
import { Container, ContainerDescription, ContainerMug } from "./styles";

export function MugCard() {
 return (
    <Container>
    <ContainerMug>
      <img src={mug1} alt="Foto de uma caneca" />
    </ContainerMug>
    <ContainerDescription>
      <h1>Lorem Ipsum</h1>
      <p>
        Duis consectetur metus nec lacus auctor dignissim. Mauris vitae finibus
        dui. Mauris laoreet lacus ut eleifend viverra. Cras efficitur volutpat
        dui, in lobortis metus lacinia sit amet. Sed lacinia pharetra magna, vel
        pulvinar ligula hendrerit a. Maecenas fringilla porttitor tortor eget
        lacinia. Donec sollicitudin euismod orci, auctor fringilla magna
        consequat interdum. Fusce sagittis elit a libero commodo egestas
        efficitur id augue.
      </p>
      <p>
        Duis consectetur metus nec lacus auctor dignissim. Mauris vitae finibus
        dui. Mauris laoreet lacus ut eleifend viverra. Cras efficitur volutpat
        dui, in lobortis metus lacinia sit amet. Sed lacinia pharetra magna, vel
        pulvinar ligula hendrerit a. Maecenas fringilla porttitor tortor eget
        lacinia. Donec sollicitudin euismod orci, auctor fringilla magna
        consequat interdum. Fusce sagittis elit a libero commodo egestas
        efficitur id augue.
      </p>
    </ContainerDescription>
  </Container>
 )
}
