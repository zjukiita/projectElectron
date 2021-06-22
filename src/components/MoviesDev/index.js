import React from 'react';
import { P } from './styles';

const MoviesDev = ({ movie }) => {
    return (
        <div>
            <P>{movie.nome}</P>
        </div>
    );
};

export default MoviesDev;
