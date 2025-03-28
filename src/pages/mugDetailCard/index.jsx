import { mugDetailCard } from "../mugDetailCard/mugDetailArray";
import mug2 from "../../assets/mug_2.png";
import { Container, MugDescription } from "./style";

export function MugDetailCard() {
  return (
    <Container>
      <div>
        <h1>Lorem ipsum</h1>
        {mugDetailCard.map((mug) => (
          <MugDescription key={mug.id}>
            <img src={mug.image} alt="" />
            <p>{mug.description}</p>
          </MugDescription>
        ))}
      </div>
      <div>
        <img src={mug2} alt="Foto de uma caneca" />
      </div>
    </Container>
  );
}
