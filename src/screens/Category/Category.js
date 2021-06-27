import React, { useCallback, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import api from '../../services/api';
import path from 'path';

// Styled Components
import { Dropdown, UserImg, Logo} from './styles';
import { Navbar, Nav, Form, FormControl, NavDropdown } from 'react-bootstrap';

const Category = () => {

    const [movie, setMovie] = useState([]);

    const loadingMovies = useCallback(async () => {
        try {
            const storage = localStorage.getItem('category');
            const response = await api.get(`/filmes/categoria/${storage}`)
            console.log(response)
            if (response.data) setMovie(response.data);
        } catch (error) {
            console.log('Falha no carregamento dos filmes!')
        }
    }, []);

    useEffect(() => {
        loadingMovies();
    }, [loadingMovies]);

    return (
        <>
            <Link to="/home">Voltar para home</Link>
            {movie.map(m => {
                return (
                    <div key={m.id}>
                        <img src={m.imagem} />
                        <div>
                            <h1>{m.nome}</h1>
                        </div>
                    </div>
                );
            })}
        </>
    )
}

export default Category;