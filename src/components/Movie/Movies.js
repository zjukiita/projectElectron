import React from 'react';

const Movies = ({ movie }) => {
    return (
        <>
            <div>
                <h1>{movie.nome}</h1>
                <img
                    src={movie.imagem}
                    alt={movie.nome}
                />
                <h2>{movie.categoria}</h2>
            </div>
        </>
    );
};

export default Movies;
