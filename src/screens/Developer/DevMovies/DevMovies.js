import React, { useCallback, useEffect, useState } from 'react';
import api from '../../../services/api';
import MoviesDev from '../../../components/MoviesDev/index';
import MoviesInfo from '../../../components/MoviesInfo/index';
import GlobalMenuDev from '../../../components/GlobalMenuDev';

const DevMovies = () => {

    const [movie, setMovie] = useState([]);
    const [filter, setFilter] = useState([]);
    const [search, setSearch] = useState('');

    const loadingMovies = useCallback(async () => {
        try {
            const response = await api.get('/filmes');
            if (response.data) {
                setMovie(response.data);
                setFilter(response.data);
            }
        } catch (error) {
            console.log('Ocorreu uma falha na comunicação com a API')
        }
    }, []);

    useEffect(() => {
        loadingMovies();
    }, [loadingMovies]);

    const handleSearch = useCallback(() => {
        if (search === '') {
            setFilter(movie);
        } else {
            const result = movie.filter(m => m.nome.toUpperCase().includes(search.toUpperCase()));
            setFilter(result);
        }
    }, [search]);

    useEffect(() => {
        handleSearch();
    }, [handleSearch]);

    const remove = async (id) => {
        let response;
        response = await api.delete(`/filmes/${id}`)
    }

    return (
        <div style={{ display: "flex", flexDirection: "row", flexWrap: "wrap" }} >
            <GlobalMenuDev />
            <div>
                <form>
                    <input
                        type="text"
                        id="search"
                        name="search"
                        onChange={e => setSearch(e.target.value)}
                    />
                </form>

                {filter.map(m => {
                    return (
                        <div key={m.id}>
                            <MoviesDev movie={m} />
                            {/* <button onClick={() => remove(m.id) } >Deletar</button> */}
                            <button>Deletar</button>
                            <button>Editar</button>
                        </div>
                    );
                })}
            </div>
        </div>
    )
}

export default DevMovies;