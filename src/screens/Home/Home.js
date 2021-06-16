import React, { useCallback, useEffect, useState } from 'react';
import Movies from '../../components/Movie';
import api from '../../services/api';
import path from 'path';
import { Link } from 'react-router-dom'

// Styled Components
import * as s from './styles';

// Bootstrap 
import * as Bs from 'react-bootstrap'

const Home = () => {

    const [comedy, setComedy] = useState([]);
    const [adventure, setAdventure] = useState([]);
    const [terror , setTerror] = useState([]);

    const loadingComedy = useCallback(async () => {
        try {
            const response = await api.get('/filmes/categoria/Comédia');
            if (response.data) setComedy(response.data);
        } catch (error) {
            console.log('Falha no carregamento dos filmes de comédia!')
        }
    }, []);

    const loadingAdventure = useCallback(async () => {
        try {
            const response = await api.get('/filmes/categoria/Aventura');
            if (response.data) setAdventure(response.data);
        } catch (error) {
            console.log('Falha no carregamento dos filmes de aventura!')
        }
    }, []);

    const loadingTerror = useCallback(async () => {
        try {
            const response = await api.get('/filmes/categoria/Terror');
            if (response.data) setTerror(response.data);
        } catch (error) {
            console.log('Falha no carregamento dos filmes de')
        }
    })

    useEffect(() => {
        loadingComedy();
        loadingAdventure();
        loadingTerror();
    }, [loadingComedy, loadingAdventure, loadingTerror]);

    return (
        <>
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
                    <s.UserImg href="action2" />
                    <Bs.NavDropdown id="navbarScrollingDropdown">
                        <Bs.NavDropdown.Item href="#action3">Meu Perfil</Bs.NavDropdown.Item>
                        <Bs.NavDropdown.Item href="#action4">Favoritos</Bs.NavDropdown.Item>
                        <Bs.NavDropdown.Item href="#action5">Trocar Perfil</Bs.NavDropdown.Item>
                        <Bs.NavDropdown.Item href="#action5">Configurações</Bs.NavDropdown.Item>
                        <Bs.NavDropdown.Divider />
                        <Bs.NavDropdown.Item><Link to="/Login">Sair</Link></Bs.NavDropdown.Item>
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
            {/*             <div>
                {comedy.map(ac => {
                    return (
                        <Movies key={ac.id} movie={ac} />
                    );
                })}
            </div> */}

            <div className={'MultiCarousel'} data-items="1,3,5,6" data-slide="1" id="MultiCarousel" data-interval="1000">
                <div className={'MultiCarousel-inner'}>
                    {comedy.map(c => {
                        return (
                            <div className={'item'}>
                                <div className={'pad15'}>
                                    <p className={'lead'}>{c.nome}</p>
                                    <img
                                        src={c.imagem}
                                    />
                                    <p>{c.categoria}</p>
                                </div>
                            </div>
                        );
                    })}
                </div>
                <s.ButtonCarousel className={'leftLst'}><i class="fas fa-angle-left"></i></s.ButtonCarousel>
                <s.ButtonCarousel className={'rightLst'}><i class="fas fa-angle-right"></i></s.ButtonCarousel>
            </div>

            <div className={'MultiCarousel'} data-items="1,3,5,6" data-slide="1" id="MultiCarousel" data-interval="1000">
                <div className={'MultiCarousel-inner'}>
                    {adventure.map(ad => {
                        return (
                            <div className={'item'}>
                                <div className={'pad15'}>
                                    <p className={'lead'}>{ad.nome}</p>
                                    <img
                                        src={ad.imagem}
                                    />
                                    <p>{ad.categoria}</p>
                                </div>
                            </div>
                        );
                    })}
                </div>
                <s.ButtonCarousel className={'leftLst'}><i class="fas fa-angle-left"></i></s.ButtonCarousel>
                <s.ButtonCarousel className={'rightLst'}><i class="fas fa-angle-right"></i></s.ButtonCarousel>
            </div>

            <div className={'MultiCarousel'} data-items="1,3,5,6" data-slide="1" id="MultiCarousel" data-interval="1000">
                <div className={'MultiCarousel-inner'}>
                    {terror.map(t => {
                        return (
                            <div className={'item'}>
                                <div className={'pad15'}>
                                    <p className={'lead'}>{t.nome}</p>
                                    <img
                                        src={t.imagem}
                                    />
                                    <p>{t.categoria}</p>
                                </div>
                            </div>
                        );
                    })}
                </div>
                <s.ButtonCarousel className={'leftLst'}><i class="fas fa-angle-left"></i></s.ButtonCarousel>
                <s.ButtonCarousel className={'rightLst'}><i class="fas fa-angle-right"></i></s.ButtonCarousel>
            </div>
        </>
    );
};

export default Home;
