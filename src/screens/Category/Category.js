import React, { useCallback, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import api from '../../services/api';
import path from 'path';
import MovieCard from '../../components/HomeComponents/MovieCard'

// Styled Components
import { MovieDiv, Col, Img } from './styles';
import { Container, Row } from 'react-bootstrap';

const Category = () => {

    const [movie, setMovie] = useState([]);

    const loadingMovies = useCallback(async () => {
        try {
            const storage = localStorage.getItem('category');
            const response = await api.get(`/filmes/categoria/${storage}`)
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
            <h2></h2>
            <Container>
                <Row>
                    {movie.map(m => {
                        return (
                            <div key={m.id}>
                                <MovieCard movie={m} />
                            </div>
                        );
                    })}
                </Row>
            </Container>
        </>
    )
}

export default Category;