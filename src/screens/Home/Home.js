import React, { useCallback, useEffect, useState } from 'react';
import { useHistory, Link } from 'react-router-dom';
import api from '../../services/api';
import path from 'path';

// Importação dos componentes
import MainCarousel from '../../components/HomeComponents/MainCarousel';
import Carousel from 'react-multi-carousel';

// Importações de estilos da Navbar
import { Dropdown, UserImg, Logo, BgImage, Title, BgHover } from './styles';
import { Navbar, Nav, Form, FormControl, NavDropdown } from 'react-bootstrap';

const Home = () => {
    const [search, setSearch] = useState();

    const history = useHistory();

    const responsive = {
        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 5,
            paritialVisibilityGutter: 60
        },
    };

    const loadingSearch = useCallback(async () => {
        setComedy(comedy.filter(c => c.nome == search));
    }, [search])

    const [action, setAction] = useState([]);
    const [comedy, setComedy] = useState([]);
    const [terror, setTerror] = useState([]);
    const [tragedy, setTragedy] = useState([]);
    const [classic, setClassic] = useState([]);
    const [romance, setRomance] = useState([]);
    const [childish, setChildish] = useState([]);
    const [adventure, setAdventure] = useState([]);
    const [shortFilm, setShortFilm] = useState([]);

    const loadingAction = useCallback(async () => {
        try {
            const response = await api.get('/filmes/categoria/Ação');
            if (response.data) setAction(response.data);
        } catch (error) {
            console.log('Falha no carregamento dos filmes de ação!');
        }
    }, []);

    const loadingComedy = useCallback(async () => {
        try {
            const response = await api.get('/filmes/categoria/Comédia');
            if (response.data) setComedy(response.data);
        } catch (error) {
            console.log('Falha no carregamento dos filmes de comédia!');
        }
    }, []);

    const loadingAdventure = useCallback(async () => {
        try {
            const response = await api.get('/filmes/categoria/Aventura');
            if (response.data) setAdventure(response.data);
        } catch (error) {
            console.log('Falha no carregamento dos filmes de aventura!');
        }
    }, []);

    const loadingTerror = useCallback(async () => {
        try {
            const response = await api.get('/filmes/categoria/Terror');
            if (response.data) setTerror(response.data);
        } catch (error) {
            console.log('Falha no carregamento dos filmes de terror!');
        }
    }, []);

    const loadingChildish = useCallback(async () => {
        try {
            const response = await api.get('/filmes/categoria/Infantil');
            if (response.data) setChildish(response.data);
        } catch (error) {
            console.log('Falha no carregamento dos filmes infantis!');
        }
    }, []);

    const loadingShortFilm = useCallback(async () => {
        try {
            const response = await api.get('/filmes/categoria/Curta-Metragem');
            if (response.data) setShortFilm(response.data)
        } catch (error) {
            console.log('Falha no carregamento dos filmes de curta-metragem!');
        }
    }, []);

    const loadingTragedy = useCallback(async () => {
        try {
            const response = await api.get('/filmes/categoria/Drama');
            if (response.data) setTragedy(response.data)
        } catch (error) {
            console.log('Falha no carregamento dos filmes de drama!');
        }
    }, []);

    const loadingClassic = useCallback(async () => {
        try {
            const response = await api.get('/filmes/categoria/Clássico');
            if (response.data) setClassic(response.data)
        } catch (error) {
            console.log('Falha no carregamento dos filmes clássicos!');
        }
    }, []);

    const loadingRomance = useCallback(async () => {
        try {
            const response = await api.get('/filmes/categoria/Romance');
            if (response.data) setRomance(response.data)
        } catch (error) {
            console.log('Falha no carregamento dos filmes de romance!');
        }
    }, []);

    useEffect(() => {
        loadingSearch();
    }, [loadingSearch]);

    useEffect(() => {
        loadingAction(), loadingComedy(); loadingTerror(); loadingTragedy(); loadingClassic(); loadingRomance(); loadingChildish(); loadingAdventure(); loadingShortFilm();
    }, [loadingAction, loadingComedy, loadingAdventure, loadingTerror, loadingChildish, loadingShortFilm, loadingTragedy, loadingClassic, loadingRomance]);

    return (
        <>
            <Navbar fixed="top" variant="dark">
                <Navbar.Brand href="#home"><Logo src={path.join(__dirname, '../../assets/logo.png')} /></Navbar.Brand>
                <Nav className="mr-auto">
                    <Nav.Link href="#home">Início</Nav.Link>
                    <Nav.Link href="#features">Filmes</Nav.Link>
                    <Nav.Link href="#pricing">Lançamentos</Nav.Link>
                    <Nav.Link href="#pricing">Minha Lista</Nav.Link>
                </Nav>
                <Form inline>
                    <FormControl
                        type="text"
                        placeholder="Search"
                        className="mr-sm-2"
                        value={search}
                        onChange={(e) => { setSearch(e.target.value) }}
                    />
                    <UserImg href="action2" />
                    <NavDropdown id="navbarScrollingDropdown">
                        <Dropdown>Meu Perfil</Dropdown>
                        <Dropdown>Favoritos</Dropdown>
                        <Dropdown>Trocar Perfil</Dropdown>
                        <Dropdown onClick={() => history.push('/config')}>Configurações</Dropdown>
                        <NavDropdown.Divider />
                        <Dropdown onClick={() => history.push('/')}>Sair</Dropdown>
                    </NavDropdown>
                </Form>
            </Navbar>

            <MainCarousel />

            <Carousel
                ssr
                partialVisibile
                deviceType={"desktop"}
                itemClass="image-item"
                responsive={responsive}
            >
                {action.map(sf => {
                    return (
                        <BgImage key={a.id} style={{ backgroundImage: `url(${a.imagem})` }}>
                            <BgHover>
                                <Title>{a.nome}</Title>
                            </BgHover>
                        </BgImage>
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
                {comedy.map(c => {
                    return (
                        <BgImage key={c.id} style={{ backgroundImage: `url(${c.imagem})` }}>
                            <BgHover>
                                <Title>{c.nome}</Title>
                            </BgHover>
                        </BgImage>
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
                        <BgImage key={ad.id} style={{ backgroundImage: `url(${ad.imagem})` }}>
                            <BgHover>
                                <Title>{ad.nome}</Title>
                            </BgHover>
                        </BgImage>
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
                        <BgImage key={t.id} style={{ backgroundImage: `url(${t.imagem})` }}>
                            <BgHover>
                                <Title>{t.nome}</Title>
                            </BgHover>
                        </BgImage>
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
                        <BgImage key={r.id} style={{ backgroundImage: `url(${r.imagem})` }}>
                            <BgHover>
                                <Title>{r.nome}</Title>
                            </BgHover>
                        </BgImage>
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
                        <BgImage key={cl.id} style={{ backgroundImage: `url(${cl.imagem})` }}>
                            <BgHover>
                                <Title>{cl.nome}</Title>
                            </BgHover>
                        </BgImage>
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
                        <BgImage key={ch.id} style={{ backgroundImage: `url(${ch.imagem})` }}>
                            <BgHover>
                                <Title>{ch.nome}</Title>
                            </BgHover>
                        </BgImage>
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
                        <BgImage key={tr.id} style={{ backgroundImage: `url(${tr.imagem})` }}>
                            <BgHover>
                                <Title>{tr.nome}</Title>
                            </BgHover>
                        </BgImage>
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
                        <BgImage key={sf.id} style={{ backgroundImage: `url(${sf.imagem})` }}>
                            <BgHover>
                                <Title>{sf.nome}</Title>
                            </BgHover>
                        </BgImage>
                    );
                })}
            </Carousel>
        </>
    );
};

export default Home;
