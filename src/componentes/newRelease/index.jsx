import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { products } from "./arrayProduct";
import { Container, ContainerItem, ContainerPrice, Price, Offer, Installments, Button, Title } from "./styles";

export function NewRelease() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 1,
    centerMode: true,
    centerPadding: "0px",
  };

  return (
    <div>
      <Slider {...settings}>
        {products.map((product, index) => (
          <Container key={index}>
            <ContainerItem>
              <img src={product.image} alt={product.name} />
              <span>Novo</span>
              <Title>{product.name}</Title>
              <ContainerPrice>
                <div>
                  <Price>{product.price}</Price>
                  <p>{product.discount}</p>
                </div>
                <div>
                    <Offer>{product.offer}</Offer>
                </div>
              </ContainerPrice>
              <Installments>{product.installments}</Installments>
              <Button>Comprar</Button>
            </ContainerItem>
          </Container>
        ))}
      </Slider>
    </div>
  );
}
