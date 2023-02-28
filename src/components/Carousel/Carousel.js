import React, { useState } from "react";
import housingData from "../../assets/api/housing.json";
import { useParams } from "react-router-dom";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-top: 3%;
`;

const ImageContainer = styled.div`
  position: relative;
  width: 88%;
`;

const Image = styled.img`
  width: 100%;
  height: 60vh;
  object-fit: cover;
  margin-bottom: 20px;
`;

const Arrow = styled.button`
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  background-color: transparent;
  border: none;
  color: white;
  font-size: 3rem;
  cursor: pointer;
  transition: opacity 0.2s;
  padding: 0 10px;

  &:hover {
    opacity: 0.7;
  }

  ${({ position }) => position}: 0;
`;

const PrevArrow = styled(Arrow)`
  left: 0;
`;

const NextArrow = styled(Arrow)`
  right: 0;
`;

const NumberContainer = styled.div`
  position: absolute;
  bottom: 25px;
  width: 100%;
  text-align: center;
  color: white;
  font-size: 1.5rem;
  font-weight: bold;
  padding: 5px 10px;
  border-radius: 5px;
`;

const Fraction = styled.span`
  margin-left: 5px;
`;

const Carousel = () => {
  const { id } = useParams();

  // Chercher l'objet avec l'id correspondant
  const location = housingData.find((item) => item.id === id);
  const images = location.pictures;

  // Utiliser useState pour stocker l'index de l'image actuellement affichée
  const [currentIndex, setCurrentIndex] = useState(0);

  // Fonction pour afficher l'image suivante
  const nextImage = () => {
    setCurrentIndex((currentIndex + 1) % images.length);
  };

  // Fonction pour afficher l'image précédente
  const prevImage = () => {
    setCurrentIndex((currentIndex - 1 + images.length) % images.length);
  };

  // Calculer le numéro de l'image actuelle sous forme de fraction
  const currentNumber = `${currentIndex + 1}/${images.length}`;

  return (
    <Container>
      <ImageContainer>
        <Image src={images[currentIndex]} alt={location.name} />
        <NumberContainer>
          {currentNumber}
          <Fraction>&nbsp;</Fraction>
        </NumberContainer>
        <PrevArrow position="left" onClick={prevImage}>
          &lt;
        </PrevArrow>
        <NextArrow position="right" onClick={nextImage}>
          &gt;
        </NextArrow>
      </ImageContainer>
    </Container>
  );
};

export default Carousel;
