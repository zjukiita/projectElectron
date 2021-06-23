import React, { useCallback, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import api from '../../services/api';

const Category = () => {

    const [movie, setMovie] = useState([]);
    const [storage, setStorage] = useState({});

    const getStorage = useCallback(async () => {
        try {
            const storage = await localStorage.getItem('category')
            setStorage(JSON.parse(storage))
            console.log(storage)
        } catch (error) {
            console.log(error)
        }
    }, []);

    const loadingMovies = useCallback(async () => {
        try {
            const response = await api.get(`/filmes/categoria/${storage}`)
            console.log(response)
            if (response.data) setMovie(response.data);
        } catch (error) {
            console.log('Falha no carregamento dos filmes!')
        }
    }, [])

    useEffect(() => {
        getStorage();
    }, [getStorage])

    useEffect(() => {
        loadingMovies();
    }, [loadingMovies]);

    return (
        <>
            {movie.map(m => {
                return (
                    <>
                    <Link to="/home">Voltar para home</Link>
                        <div>
                            <img src={m.imagem} />
                            <div>
                                <h1>{m.nome}</h1>
                            </div>
                        </div>
                    </>
                );
            })}

        </>
    )
}

export default Category;