import React, { useState } from 'react';
import path from 'path';
import { useHistory } from 'react-router-dom';

// Importações de estilos da Navbar

import { Dropdown, UserImg, Logo } from './styles'
import { Navbar, Nav, Form, FormControl, NavDropdown } from 'react-bootstrap';

const NavbarComponent = () => {
    const [search, setSearch] = useState();

    const history = useHistory();
    
    return (
        <Navbar fixed="top" variant="dark">
            <Navbar.Brand href="#home"><Logo src={path.join(__dirname, '../../../assets/logo.png')} /></Navbar.Brand>
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
                />
                <UserImg href="action2" />
                <NavDropdown id="navbarScrollingDropdown">
                    <Dropdown>Meu Perfil</Dropdown>
                    <Dropdown>Favoritos</Dropdown>
                    <Dropdown>Trocar Perfil</Dropdown>
                    <Dropdown onClick={() => history.push('/config')}>Configurações</Dropdown>
                    <NavDropdown.Divider />
                    <Dropdown onClick={() => history.push('/login')}>Sair</Dropdown>
                </NavDropdown>
            </Form>
        </Navbar>
    )
};

export default NavbarComponent;