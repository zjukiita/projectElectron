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
    justify-content: center;
    width: 10vw;
    height: 4vw;
    background-color: transparent;
    margin: 0;
    color: #fff;
    cursor: pointer;
    border-radius: 10%;
    font-size: 2vw;
    margin-left: 25px;
    margin-top: 20px;
    margin-bottom: 20px;

    &:hover {
        color: #7600a9;
        border: 2px #7600a9 solid;
        background-color: transparent;
    }
`

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

export const Box = styled.input`
    width: 80vw;
    color: white;
    font-size: 2vw;
    height: 50px;
    border: none;
    outline: none;
    margin-top: 10px;
    margin-bottom: 10px;
    background-color: #363636;
`;

export const Label = styled.label`
    color: #fff;
    font-size: 3vw;
`;

export const Buttoon = styled.button`
    display: flex;
    justify-content: center;
    width: 10vw;
    height: 4vw;
    background-color: transparent;
    margin: 0;
    color: #fff;
    cursor: pointer;
    border-radius: 10%;
    font-size: 2vw;
    margin-top: 20px;
    margin-bottom: 20px;

    &:hover {
        color: #7600a9;
        border: 2px #7600a9 solid;
        background-color: transparent;
    }
`