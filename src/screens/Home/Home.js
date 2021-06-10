import React, { useCallback, useEffect, useState } from 'react';
import Movies from '../../components/Movie';
import api from '../../services/api';
import path from 'path';

// Styled Components
import * as s from './styles';



const Home = () => {

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
      <nav>
        <s.Navbar>
          <s.Option><s.Link><s.Logo src={path.join(__dirname, '../../assets/logo.png')} /></s.Link></s.Option>
          <s.Option><s.Link>Início</s.Link></s.Option>
          <s.Option><s.Link>Filmes</s.Link></s.Option>
          <s.Option><s.Link>Lançamentos</s.Link></s.Option>
          <s.SearchLi><s.Link>Minha Lista</s.Link></s.SearchLi>
          <s.Option><s.Search /></s.Option>
        </s.Navbar>
      </nav>

      <h1>Lista de filmes</h1>
      <ul>
        {movie.map(m => {
          return (
            <Movies key={m.id} movie={m} />
          );
        })}
      </ul>
    </>
  );
};

export default Home;
