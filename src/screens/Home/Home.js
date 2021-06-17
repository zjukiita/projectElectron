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
    const [terror, setTerror] = useState([]);
    const [tragedy, setTragedy] = useState([]);
    const [classic, setClassic] = useState([]);
    const [romance, setRomance] = useState([]);
    const [childish, setChildish] = useState([]);
    const [adventure, setAdventure] = useState([]);
    const [shortFilm, setShortFilm] = useState([]);

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
            if(response.data) setTragedy(response.data)
        } catch (error) {
            console.log('Falha no carregamento dos filmes de drama!')
        }
    }, []);

    const loadingClassic = useCallback(async () => {
        try {
            const response = await api.get('/filmes/categoria/Clássico');
            if(response.data) setClassic(response.data)
        } catch (error) {
            console.log('Falha no carregamento dos filmes clássicos!')
        }
    }, []);

    const loadingRomance = useCallback(async () => {
        try {
            const response = await api.get('/filmes/categoria/Romance');
            if(response.data) setRomance(response.data)
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

            <div className={'MultiCarousel'} data-items="1,3,5,6" data-slide="1" id="MultiCarousel" data-interval="1000">
                <h2>Comédia</h2>
                <div className={'MultiCarousel-inner'}>
                    {comedy.map(c => {
                        return (
                            <div className={'item'} key={c.id}>
                                <div className={'pad15'}>
                                    <img
                                        src={c.imagem}
                                    />
                                    <p>{c.categoria}</p>
                                </div>
                            </div>
                        );
                    })}
                </div>
                <s.ButtonCarousel className={'leftLst'}><i className={'fas fa-angle-left'}></i></s.ButtonCarousel>
                <s.ButtonCarousel className={'rightLst'}><i className={'fas fa-angle-right'}></i></s.ButtonCarousel>
            </div>

            <div className={'MultiCarousel'} data-items="1,3,5,6" data-slide="1" id="MultiCarousel" data-interval="1000">
                <h2>Aventura</h2>
                <div className={'MultiCarousel-inner'}>
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
                </div>
                <s.ButtonCarousel className={'leftLst'}><i className={'fas fa-angle-left'}></i></s.ButtonCarousel>
                <s.ButtonCarousel className={'rightLst'}><i className={'fas fa-angle-right'}></i></s.ButtonCarousel>
            </div>

            <div className={'MultiCarousel'} data-items="1,3,5,6" data-slide="1" id="MultiCarousel" data-interval="1000">
                <h2>Terror</h2>
                <div className={'MultiCarousel-inner'}>
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
                </div>
                <s.ButtonCarousel className={'leftLst'}><i className={'fas fa-angle-left'}></i></s.ButtonCarousel>
                <s.ButtonCarousel className={'rightLst'}><i className={'fas fa-angle-right'}></i></s.ButtonCarousel>
            </div>

            <div className={'MultiCarousel'} data-items="1,3,5,6" data-slide="1" id="MultiCarousel" data-interval="1000">
                <h2>Infantil</h2>
                <div className={'MultiCarousel-inner'}>
                    {childish.map(ch => {
                        return (
                            <div className={'item'} key={ch.id}>
                                <div className={'pad15'}>
                                    <img
                                        src={ch.imagem}
                                    />
                                    <p>{ch.categoria}</p>
                                </div>
                            </div>
                        );
                    })}
                </div>
                <s.ButtonCarousel className={'leftLst'}><i className={'fas fa-angle-left'}></i></s.ButtonCarousel>
                <s.ButtonCarousel className={'rightLst'}><i className={'fas fa-angle-right'}></i></s.ButtonCarousel>
            </div>


            <div className={'MultiCarousel'} data-items="1,3,5,6" data-slide="1" id="MultiCarousel" data-interval="1000">
                <h2>Curta-Metragem</h2>
                <div className={'MultiCarousel-inner'}>
                    {shortFilm.map(sf => {
                        return (
                            <div className={'item'} key={sf.id}>
                                <div className={'pad15'}>
                                    <img
                                        src={sf.imagem}
                                    />
                                    <p>{sf.categoria}</p>
                                </div>
                            </div>
                        );
                    })}
                </div>
                <s.ButtonCarousel className={'leftLst'}><i className={'fas fa-angle-left'}></i></s.ButtonCarousel>
                <s.ButtonCarousel className={'rightLst'}><i className={'fas fa-angle-right'}></i></s.ButtonCarousel>
            </div>

            <div className={'MultiCarousel'} data-items="1,3,5,6" data-slide="1" id="MultiCarousel" data-interval="1000">
                <h2>Drama</h2>
                <div className={'MultiCarousel-inner'}>
                    {tragedy.map(d => {
                        return (
                            <div className={'item'} key={d.id}>
                                <div className={'pad15'}>
                                    <img
                                        src={d.imagem}
                                    />
                                    <p>{d.categoria}</p>
                                </div>
                            </div>
                        );
                    })}
                </div>
                <s.ButtonCarousel className={'leftLst'}><i className={'fas fa-angle-left'}></i></s.ButtonCarousel>
                <s.ButtonCarousel className={'rightLst'}><i className={'fas fa-angle-right'}></i></s.ButtonCarousel>
            </div>

            <div className={'MultiCarousel'} data-items="1,3,5,6" data-slide="1" id="MultiCarousel" data-interval="1000">
                <h2>Romance</h2>
                <div className={'MultiCarousel-inner'}>
                    {romance.map(r => {
                        return (
                            <div className={'item'} key={r.id}>
                                <div className={'pad15'}>
                                    <img
                                        src={r.imagem}
                                    />
                                    <p>{r.categoria}</p>
                                </div>
                            </div>
                        );
                    })}
                </div>
                <s.ButtonCarousel className={'leftLst'}><i className={'fas fa-angle-left'}></i></s.ButtonCarousel>
                <s.ButtonCarousel className={'rightLst'}><i className={'fas fa-angle-right'}></i></s.ButtonCarousel>
            </div>

            <div className={'MultiCarousel'} data-items="1,3,5,6" data-slide="1" id="MultiCarousel" data-interval="1000">
                <h2>Clássicos</h2>
                <div className={'MultiCarousel-inner'}>
                    {classic.map(cl => {
                        return (
                            <div className={'item'} key={cl.id}>
                                <div className={'pad15'}>
                                    <img
                                        src={cl.imagem}
                                    />
                                    <p>{cl.categoria}</p>
                                </div>
                            </div>
                        );
                    })}
                </div>
                <s.ButtonCarousel className={'leftLst'}><i className={'fas fa-angle-left'}></i></s.ButtonCarousel>
                <s.ButtonCarousel className={'rightLst'}><i className={'fas fa-angle-right'}></i></s.ButtonCarousel>
            </div>
        </>
    );
};

export default Home;
