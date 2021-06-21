import React from 'react';
import { P } from './styles';

const MoviesDev = ({ movie }) => {
    return (
        <div style={{ display: "flex", flexDirection: "row", flexWrap: "wrap" }}>
            <P>{movie.nome}</P>
        </div>
    );
};

export default MoviesDev;
