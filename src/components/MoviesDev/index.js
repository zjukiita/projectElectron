import React from 'react';

const MoviesDev = ({ movie }) => {
    return (
        <div style={{ display: "flex", flexDirection: "row", flexWrap: "wrap" }}>
            <h4>Id: {movie.id}</h4>
            <h4>Filme: {movie.nome}</h4>
        </div>
    );
};

export default MoviesDev;
