import React from 'react';
import { Link } from 'react-router-dom'

const GlobalMenu = () => {
    return (
        <nav>
            <Link to="/">Home</Link>
            <Link to="/Register">Cadastro</Link>
            <Link to="/Login">Login</Link>
        </nav>
    );
}

export default GlobalMenu;