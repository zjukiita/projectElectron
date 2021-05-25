import React, { useCallback, useEffect, useState } from 'react';
import Movies from '../../components/Movie'
import api from '../../services/api'

const ListMovies = () => {

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
            <h1>Lista de filmes</h1>
            <div>
                {movie.map(m => {
                    return (
                        <div>
                            <Movies key={m.id} movie={m} />
                        </div>
                    );
                })}
            </div>
        </>
    );
};

export default ListMovies;

