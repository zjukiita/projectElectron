import React from 'react';

const Movies = ({ movie }) => {
    return (
        <>
            <body>
                <div>
                    <img
                        src={movie.imagem}
                        alt={movie.nome}    
                    />
                    <h2>{movie.categoria}</h2>
                </div>
            </body>
        </>
    );
};

export default Movies;
