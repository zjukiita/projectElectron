import React, { useCallback, useEffect, useState } from 'react';
import GlobalMenuDev from '../../../components/GlobalMenuDev';
import MoviesDev from '../../../components/MoviesDev';
import Modal from '../../../components/ModalDev';
import api from '../../../services/api';
import { Button } from './styles';

const DevMovies = () => {

    const [movie, setMovie] = useState([]);
    const [filter, setFilter] = useState([]);
    const [search, setSearch] = useState('');

    const [modalVisible, setModalVisible] = useState(false);
    const [selectedMovie, setSelectedMovie] = useState();

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
        const result = filter.filter(m => m.id !== id);
        setMovie(movie.filter(m => m.id !== id));
        setFilter(result);
        await api.delete(`/filmes/${id}`);
    };

    return (
        <>
            <GlobalMenuDev />
            <div style={{
                width: "85%",
                height: "100%",
                marginLeft: "15%",
            }} >
                <form>
                    <input
                        style={{
                            width: "100%",
                            height: "3vw"
                        }}
                        type="text"
                        id="search"
                        name="search"
                        placeholder="Pesquisar Filme"
                        onChange={e => setSearch(e.target.value)}
                    />
                </form>

                {filter.map(m => {
                    return (
                        <div key={m.id} style={{
                            display: "flex",
                            justifyContent: "space-between"
                        }}>
                            <div style={{
                                cursor: "pointer",
                                marginTop: "15px",
                                marginBottom: "15px"
                            }} onClick={() => { setSelectedMovie(m); setModalVisible(true); }} >
                                <MoviesDev movie={m} />
                            </div>
                            <div style={{
                                display: 'flex',
                                justifyItems: 'center',
                                alignItems: "center",
                            }}>
                                <Button>Deletar</Button>
                            </div>
                            {/* onClick={() => remove(m.id)} */}
                        </div>
                    );
                })}
            </div>
            {modalVisible ? <Modal onClose={() => setModalVisible(false)} selectedMovie={selectedMovie} /> : null}
        </>
    );
}
export default DevMovies;