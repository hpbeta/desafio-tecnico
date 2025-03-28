import { Button, ContainerInfo, Input, Label, Title } from "./styles";

export function SendEmail() {
  return (
    <>
      <Title>
        Cadastre-se na nossa <span>newsletter</span>
      </Title>

      <ContainerInfo>
        <Input type="text" placeholder="Digite seu nome" />
        <Input type="text" placeholder="Digite seu e-mail" />
        <Label>
          <input type="checkbox" />
          Estou de acordo com a Política de Privacidade
        </Label>
        <Button>Cadastrar</Button>
      </ContainerInfo>
    </>
  );
}
