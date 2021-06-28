import React from 'react';

// Styled Component
import { BgHover, BgImage, Title, Button } from './styles';

const MovieCard = (props) => {
    return (
        <>
            <BgImage style={{ backgroundImage: `url(${props.movie.imagem})` }}>
                <BgHover>
                    <Title>{props.movie.nome}</Title>
                </BgHover>
            </BgImage>
        </>
    )
}

export default MovieCard;