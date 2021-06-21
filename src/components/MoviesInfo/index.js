import React from 'react';
import { P } from './styles';

const MoviesInfo = ({ movie }) => {
    return (
        
            <div>
                <P>Id: {movie.id}</P>
                <P>Filme: {movie.nome}</P>
                <P>Imagem: {movie.imagem}</P>
                <P>Sinopse: {movie.sinopse}</P>
                <P>Duração: {movie.duracao}</P>
                <P>Link: {movie.link}</P>
                <P>Trailer: {movie.trailer}</P>
                <P>Avaliação: {movie.avaliacao}</P>
                <P>Ano de Lançamento: {movie.anoDeLancamento}</P>
                <P>Categoria: {movie.categoria}</P>
                <P>Clasificação: {movie.classificacao}</P>
            </div>
        
    );
};

export default MoviesInfo;
