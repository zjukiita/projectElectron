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
                </div>
            </body>
        </>
    );
};

export default Movies;
