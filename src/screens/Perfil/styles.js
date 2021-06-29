import styled, { css } from 'styled-components';

export const Content = styled.div`
    display: flex;
    flex-direction: column;
    height: 70vh;
    align-items: center;
    justify-content: center;
`
export const ImagesProfile = styled.div`
    display: flex;
    margin-right: 30px;
    align-items: center;
    flex-direction: column;
    justify-content: center;
`
export const ImgProfile = styled.img`
    width: 200px;
    height: 210px;
    border-radius: 5px;
    margin-top: 100px; 

    &:hover  {
        border: #7600a9 solid 3px;
        cursor: pointer;
    }
`
export const Button = styled.button`
    border: 0;
    color: #fff;
    width: 200px;
    font-size: 1rem;
    border-radius: 4px;
    background: #7600a9;
    margin-top: 10px;  
`
export const Title = styled.h3`
    color: #7600a9;
    margin-top: 10px;
    text-align: center;
`
export const TitleBack = styled.h4`
    opacity: 0;
    transition: 1s;
    margin-top: 6px;
    margin-left: 8px;
`
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

    &:hover ${TitleBack} {
        opacity: 1;
    }
`
