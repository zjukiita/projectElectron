import React from 'react';

const MoviesInfo = ({ movie }) => {
    return (
        <div>
            <p>Id: {movie.id}</p>
            <p>Filme: {movie.nome}</p>
            <p>Filme: {movie.imagem}</p>
            <p>Filme: {movie.sinopse}</p>
            <p>Filme: {movie.duracao}</p>
            <p>Filme: {movie.link}</p>
            <p>Filme: {movie.avaliacao}</p>
            <p>Filme: {movie.anoDeLancamento}</p>
            <p>Filme: {movie.categoria}</p>
            <p>Filme: {movie.classificacao}</p>
        </div>
    );
};

export default MoviesInfo;
