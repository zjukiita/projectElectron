import styled from 'styled-components';

export const Modaal = styled.div`
    width: 100%;
    height: 100%;
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    z-index: 99999;
    background-color: rgba(0 , 0 , 0 , 0.6);
    display: flex;
    justify-content: center;
    align-items: center;
`;

export const Container = styled.div`
    background-color: #424242;
    border-radius: 10px;
    color: #000;
    width: 90%;
    height: 90%;
    overflow: auto;
`;

export const Button = styled.button`
    display: flex;
    background-color: transparent;
    color: #fff;
    cursor: pointer;
    border: 10px;
    border-color: #fff;
    font-size: 2vw;
    margin-left: 25px;
    margin-bottom: 20px;
`;

export const Close = styled.button`
    background-color: transparent;
    outline: none;
    border: none;
    width: 32px;
    height: 32px;
    right: calc(-100% + 40px);
    cursor: pointer;
    top: 16px;
    display: flex;
    position: relative;
    align-items: center;
    &:before,
    &:after {
        content: '';
        position: fixed;
        width: 2.5px;
        height: 24px;
        background-color: #FF0000;
    }
    &:before {
        transform: rotate(45deg);
    }
    &:after {
        transform: rotate(-45deg);
    }
`;