import React from 'react';
import { P } from './styles';

const MoviesDev = ({ movie }) => {
    return (
        <P>{movie.nome}</P>
    );
};

export default MoviesDev;
