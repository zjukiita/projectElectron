import React, { useCallback, useEffect, useState } from 'react';
import api from '../../services/api';
import path from 'path';
import { Link } from 'react-router-dom';
import Carousel from 'react-multi-carousel';

// Styled Components
import * as s from './styles';

// Bootstrap 
import * as Bs from 'react-bootstrap'

const Home = () => {

    const [comedy, setComedy] = useState([]);
    const [terror, setTerror] = useState([]);
    const [tragedy, setTragedy] = useState([]);
    const [classic, setClassic] = useState([]);
    const [romance, setRomance] = useState([]);
    const [childish, setChildish] = useState([]);
    const [adventure, setAdventure] = useState([]);
    const [shortFilm, setShortFilm] = useState([]);

    const responsive = {
        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 5,
            paritialVisibilityGutter: 60
        },
    };

    // Funções de renderização das categorias de filme

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
            console.log('Falha no carregamento dos filmes de terror!')
        }
    }, []);

    const loadingChildish = useCallback(async () => {
        try {
            const response = await api.get('/filmes/categoria/Infantil');
            if (response.data) setChildish(response.data);
        } catch (error) {
            console.log('Falha no carregamento dos filmes infantis!')
        }
    }, []);

    const loadingShortFilm = useCallback(async () => {
        try {
            const response = await api.get('/filmes/categoria/Curta-Metragem')
            if (response.data) setShortFilm(response.data)
        } catch (error) {
            console.log('Falha no carregamento dos filmes de curta-metragem!')
        }
    }, []);

    const loadingTragedy = useCallback(async () => {
        try {
            const response = await api.get('/filmes/categoria/Drama');
            if (response.data) setTragedy(response.data)
        } catch (error) {
            console.log('Falha no carregamento dos filmes de drama!')
        }
    }, []);

    const loadingClassic = useCallback(async () => {
        try {
            const response = await api.get('/filmes/categoria/Clássico');
            if (response.data) setClassic(response.data)
        } catch (error) {
            console.log('Falha no carregamento dos filmes clássicos!')
        }
    }, []);

    const loadingRomance = useCallback(async () => {
        try {
            const response = await api.get('/filmes/categoria/Romance');
            if (response.data) setRomance(response.data)
        } catch (error) {
            console.log('Falha no carregamento dos filmes de romance!')
        }
    }, []);

    useEffect(() => {
        loadingComedy();
        loadingTerror();
        loadingTragedy();
        loadingClassic();
        loadingRomance();
        loadingChildish();
        loadingAdventure();
        loadingShortFilm();
    }, [loadingComedy, loadingAdventure, loadingTerror, loadingChildish, loadingShortFilm, loadingTragedy, loadingClassic, loadingRomance]);

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

            <Carousel
                ssr
                partialVisibile
                deviceType={"desktop"}
                itemClass="image-item"
                responsive={responsive}
            >
                {comedy.map(c => {
                    return (
                        <img
                            key={c.id} src={c.imagem}
                        />
                    );
                })}
            </Carousel>

            <Carousel
                ssr
                partialVisibile
                deviceType={"desktop"}
                itemClass="image-item"
                responsive={responsive}
            >
                {adventure.map(ad => {
                    return (
                        <div className={'item'} key={ad.id}>
                            <div className={'pad15'}>
                                <img
                                    src={ad.imagem}
                                />
                                <p>{ad.categoria}</p>
                            </div>
                        </div>
                    );
                })}
            </Carousel>


            <Carousel
                ssr
                partialVisibile
                deviceType={"desktop"}
                itemClass="image-item"
                responsive={responsive}
            >
                {terror.map(t => {
                    return (
                        <div className={'item'} key={t.id}>
                            <div className={'pad15'}>
                                <img
                                    src={t.imagem}
                                />
                                <p>{t.categoria}</p>
                            </div>
                        </div>
                    );
                })}
            </Carousel>

            <Carousel
                ssr
                partialVisibile
                deviceType={"desktop"}
                itemClass="image-item"
                responsive={responsive}
            >
                {romance.map(r => {
                    return (
                        <div key={r.id}>
                            <img
                                src={r.imagem}
                            />
                            <p>{r.categoria}</p>
                        </div>
                    );
                })}
            </Carousel>

            <Carousel
                ssr
                partialVisibile
                deviceType={"desktop"}
                itemClass="image-item"
                responsive={responsive}
            >
                {classic.map(cl => {
                    return (
                        <div key={cl.id}>
                            <img
                                src={cl.imagem}
                            />
                            <p>{cl.categoria}</p>
                        </div>
                    );
                })}
            </Carousel>

            <Carousel
                ssr
                partialVisibile
                deviceType={"desktop"}
                itemClass="image-item"
                responsive={responsive}
            >
                {childish.map(ch => {
                    return (
                        <div key={ch.id}>
                            <img
                                src={ch.imagem}
                            />
                            <p>{ch.categoria}</p>
                        </div>
                    );
                })}
            </Carousel>

            <Carousel
                ssr
                partialVisibile
                deviceType={"desktop"}
                itemClass="image-item"
                responsive={responsive}
            >
                {tragedy.map(tr => {
                    return (
                        <div className={'item'} key={tr.id}>
                            <img
                                src={tr.imagem}
                            />
                            <p>{tr.categoria}</p>
                        </div>
                    );
                })}
            </Carousel>

            <Carousel
                ssr
                partialVisibile
                deviceType={"desktop"}
                itemClass="image-item"
                responsive={responsive}
            >
                {shortFilm.map(sf => {
                    return (
                        <div key={sf.id}>
                            <img
                                src={sf.imagem}
                            />
                            <p>{sf.categoria}</p>
                        </div>
                    );
                })}
            </Carousel>
        </>
    );
};

export default Home;
