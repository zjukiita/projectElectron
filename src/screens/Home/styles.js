import styled, { css } from 'styled-components';

export const Logo = styled.img`
    width: 60px;
`
export const UserImg = styled.img`
    width: 60px;
    height: 60px;
    border-radius: 50%;
    /* background-color: #fff; */
    border: 2px #000 solid;
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
export const BgHover = styled.div`
    width: 200px;
    height: 280px;
    opacity: 0;
    transition: 0.8s;
`
export const BgImage = styled.div`
    width: 200px;
    height: 280px;
    text-align: center;

    &:hover ${BgHover} {
        opacity: 1;
        background-color: rgba(21, 21, 21, 0.950);
    }
`
export const Title = styled.h3`
    color: #fff;
    font-size: 20px;
    font-weight: 300;
`



