import React, { useCallback, useEffect, useState } from 'react';
import api from '../../../services/api';
import MoviesDev from '../../../components/MoviesDev'
import GlobalMenuDev from '../../../components/GlobalMenuDev';

const DevMovies = () => {

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

    const remove = async (id) => {
        let response;
        reponse = await api.delete(`/filmes/${id}`)
    }

    return (
        <div style={{ display: "flex", flexDirection: "row", flexWrap: "wrap" }} >
            <GlobalMenuDev />
            <div>
                {movie.map(m => {
                    return (
                        <div>
                            <MoviesDev key={m.id} movie={m} />
                            {/* <button onClick={() => remove(m.id) } >Delete um filme</button> */}
                        </div>
                    );
                })}
            </div>
        </div>
    )
}

export default DevMovies;