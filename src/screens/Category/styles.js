import styled, { css } from 'styled-components';

export const Logo = styled.img`
width: 60px;
`
export const Img = styled.img`
    border-radius: 8px;
    border: 2px solid #7600a9;
`
export const Dropdown = styled.div`
padding-top: 2px;
padding-bottom: 2px;
text-align: center;

&:hover {
    background-color: #66666661;
    cursor: pointer;
}
`
export const MovieDiv = styled.div`
    display: flex;
`
export const Col = styled.div`
    flex-basis: 0;
    max-width: 100%;
    padding-top: 7.5px;
    padding-left: 7.5px;
    padding-right: 7.5px;
    margin-bottom: 7.5px;
`