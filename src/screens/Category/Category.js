import React, { useCallback, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import api from '../../services/api';
import path from 'path';

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
                            <Col key={m.id}>
                                <Img src={m.imagem} />
                            </Col>
                        );
                    })}
                </Row>
            </Container>
        </>
    )
}

export default Category;