import React from 'react';
import path from 'path';

// Importações de estilos do Carrossel principal

import { Carousel } from 'react-bootstrap';

const MainCarousel = () => {
    return (
        <Carousel>
                <Carousel.Item interval={2000}>
                    <img
                        className="d-block w-100"
                        src={path.join(__dirname, '../../../assets/slide1.jpg')}
                        alt="First slide"
                    />
                    <Carousel.Caption>
                        <h3>De Volta Para o Futuro</h3>
                        <p>Ficção Científica, Aventura, Clássico</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item interval={2000}>
                    <img
                        className="d-block w-100"
                        src={path.join(__dirname, '../../../assets/slide2.jpg')}
                        alt="Second slide"
                    />
                    <Carousel.Caption>
                        <h3>Esqueceram de mim</h3>
                        <p>Comédia</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item interval={2000}>
                    <img
                        className="d-block w-100"
                        src={path.join(__dirname, '../../../assets/slide3.jpg')}
                        alt="Third slide"
                    />
                    <Carousel.Caption>
                        <h3>King Kong</h3>
                        <p>Aventura, Fantasia, Terror</p>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel> 
    )
};

export default MainCarousel;