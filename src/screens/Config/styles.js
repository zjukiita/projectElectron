import styled, { css } from 'styled-components';

export const Back = styled.button`
    border: none;
    display: flex;
    align-items: center;
    height: 12vh;
    margin-left: 50px;
    transition: 1s;
    color: #7600a9;
    font-size: 24px;
    background-color: transparent;

    &:hover {
        font-size: 32px;
    }
`
export const ImgDiv = styled.div`
    text-align: center;
`
export const ImgProfile = styled.img`
    width: 180px;
    border-radius: 50%;
`
export const Title = styled.h2`
    color: #7600a9
`
export const TitleInfo = styled.label`
   color: #7600a9;
   font-size: 1.5vw;
   text-align: center;
`
export const Info = styled.h4`
    color: #fff;
    font-size: 1.5vw;
    text-align: center;
`
export const Box = styled.input`
    width: 100%;
    color: white;
    height: 50px;
    border: none;
    outline: none;
    margin-top: 15px;;
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
        background-color: transparent;
    }
`