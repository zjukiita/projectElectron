import styled, { css } from 'styled-components';

export const BgHover = styled.div`
width: 196px;
height: 276px;
opacity: 0;
transition: 0.8s;
`
export const BgImage = styled.div`
width: 200px;
text-align: center;
border: 2px solid #7600a9;
border-radius: 8px;

&:hover ${BgHover} {
    opacity: 0.9;
    border-radius: 5px;
    background-color: rgba(21, 21, 21);
}
`
export const Title = styled.h3`
color: #9f6ff2;
font-size: 20px;
font-weight: 300;
`
export const Button = styled.button`
    border: none;
    color: #7600a9;
    font-size: 18px;
    transition: 0.8s;
    background-color: transparent;

    &:hover {
        font-size: 22px;
    }
`
