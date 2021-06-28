import styled, { css } from 'styled-components';

export const ImgProfile = styled.img`
    width: 180px;
    border-radius: 50%;
`
export const TitleError = styled.h5`
    margin: 0;
`
export const FontTag = styled.label`
   color: #7600a9;
   font-size: 1.5vw;
   margin-left: 10px;
`
export const FontUser = styled.label`
   color: #fff;
   font-size: 1.5vw;
   margin-left: 7px;
`
export const Box = styled.input`
    width: 16%;
    color: white;
    height: 45px;
    border: none;
    outline: none;
    margin-left: 10px;
    margin-top: 5px;;
    background-color: #363636;
`
export const BackHome = styled.label`
   color: #fff;
   font-size: 1.5vw;
   margin-left: 10px;
`
export const ButtonRight = styled.button`
    border: 0;
    color: #fff;
    height: 45px;
    font-size: 1rem;
    cursor: pointer;
    margin-top: 20px;
    margin-left: 20px;
    font-weight: 500;
    transition: 0.6s;
    border-radius: 4px;
    margin-top: 0.5rem;
    text-align: center;
    background: #7600a9;
    padding: 0.5px 25px;

    &:hover {
        color: #7600a9;
        border: 2px #7600a9 solid;
        background-color: #363636;
    }
`