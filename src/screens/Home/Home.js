import React, { useCallback, useEffect, useState } from 'react';
import Movies from '../../components/Movie';
import api from '../../services/api';
import path from 'path';

// Styled Components
import * as s from './styles';

// Bootstrap 
import * as Bs from 'react-bootstrap'

const Home = () => {

    const [movie, setMovie] = useState([]);

    const loadingMovies = useCallback(async () => {
        try {
            const response = await api.get('/filmes');
            if (response.data) setMovie(response.data);
        } catch (error) {
            console.log('Ocorreu uma falha na comunicação com a API')
        }
    }, []);

    useEffect(() => {
        loadingMovies();
    }, [loadingMovies]);

    return (
        <>
            {/*             <nav>
                <s.Navbar>
                    <s.Option><s.Link><s.Logo src={path.join(__dirname, '../../assets/logo.png')} /></s.Link></s.Option>
                    <s.Option><s.Link>Início</s.Link></s.Option>
                    <s.Option><s.Link>Filmes</s.Link></s.Option>
                    <s.Option><s.Link>Lançamentos</s.Link></s.Option>
                    <s.SearchLi><s.Link>Minha Lista</s.Link></s.SearchLi>
                    <s.Option><s.Search /></s.Option>
                </s.Navbar>
            </nav> */}

            <Bs.Navbar fixed="top" variant="dark">
                <Bs.Navbar.Brand href="#home"><s.Logo src={path.join(__dirname, '../../assets/logo.png')} /></Bs.Navbar.Brand>
                <Bs.Nav className="mr-auto">
                    <Bs.Nav.Link href="#home">Início</Bs.Nav.Link>
                    <Bs.Nav.Link href="#features">Filmes</Bs.Nav.Link>
                    <Bs.Nav.Link href="#pricing">Lançamentos</Bs.Nav.Link>
                    <Bs.Nav.Link href="#pricing">Minha Lista</Bs.Nav.Link>
                </Bs.Nav>
                <Bs.Form inline>
                    <Bs.FormControl type="text" placeholder="Search" className="mr-sm-2" />
                    <s.UserImg href="action2"/>
                    <Bs.NavDropdown id="navbarScrollingDropdown">
                        <Bs.NavDropdown.Item href="#action3">Meu Perfil</Bs.NavDropdown.Item>
                        <Bs.NavDropdown.Item href="#action4">Favoritos</Bs.NavDropdown.Item>
                        <Bs.NavDropdown.Item href="#action5">Trocar Perfil</Bs.NavDropdown.Item>
                        <Bs.NavDropdown.Item href="#action5">Configurações</Bs.NavDropdown.Item>
                        <Bs.NavDropdown.Divider />
                        <Bs.NavDropdown.Item href="#action6">Sair</Bs.NavDropdown.Item>
                    </Bs.NavDropdown>
                </Bs.Form>
            </Bs.Navbar>

            <Bs.Carousel>
                <Bs.Carousel.Item interval={2000}>
                    <img
                        className="d-block w-100"
                        src={path.join(__dirname, '../../assets/slide1.jpg')}
                        alt="First slide"
                    />
                    <Bs.Carousel.Caption>
                        <h3>De Volta Para o Futuro</h3>
                        <p>Ficção Científica, Aventura, Clássico</p>
                    </Bs.Carousel.Caption>
                </Bs.Carousel.Item>
                <Bs.Carousel.Item interval={2000}>
                    <img
                        className="d-block w-100"
                        src={path.join(__dirname, '../../assets/slide2.jpg')}
                        alt="Second slide"
                    />
                    <Bs.Carousel.Caption>
                        <h3>Esqueceram de mim</h3>
                        <p>Comédia</p>
                    </Bs.Carousel.Caption>
                </Bs.Carousel.Item>
                <Bs.Carousel.Item interval={2000}>
                    <img
                        className="d-block w-100"
                        src={path.join(__dirname, '../../assets/slide3.jpg')}
                        alt="Third slide"
                    />
                    <Bs.Carousel.Caption>
                        <h3>King Kong</h3>
                        <p>Aventura, Fantasia, Terror</p>
                    </Bs.Carousel.Caption>
                </Bs.Carousel.Item>
            </Bs.Carousel>

            <h1>Lista de filmes</h1>
            <ul>
                {movie.map(m => {
                    return (
                        <Movies key={m.id} movie={m} />
                    );
                })}
            </ul>
        </>
    );
};

export default Home;
