import React from 'react';
import { P } from './styles';

const MoviesDev = ({ movie }) => {
    return (
        <div style={{
            display: "flex",
            alignItems: "center"
        }}>
            <img
                style={{
                    width: "12vw",
                    height: "12vw",
                    borderRadius: "50%"
                }}
                src={movie.imagem}
                alt={movie.nome}
            />
            <P>{movie.nome}</P>
        </div>
    );
};

export default MoviesDev;
