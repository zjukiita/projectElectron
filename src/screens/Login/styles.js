import styled, { css } from 'styled-components';

export const Main = styled.main`
    width: 40vw;
    padding: 2%;
    border-radius: 8px;
    line-height: 2.8rem;
    background: #363636;
    box-shadow: 5px 5px 15px rgba(0, 0, 0, 0.2);
`
export const Content = styled.div`
    margin: 0;
    display: flex;
    height: 100vh;
    align-items: center;
    justify-content: center;
`
export const Title = styled.h2`
    color: #7600a9;
    text-align: center;
`
export const fieldInput = styled.input`
    width: 100%;
    color: white;
    height: 45px;
    border: none;
    outline: none;
    background-color: #363636;
`
export const Form = styled.form`
    display: flex;
    flex-direction: column;
`
export const Button = styled.button`
    border: 0;
    color: #fff;
    transition: 0.6s;
    font-size: 1rem;
    cursor: pointer;
    margin-top: 20px;
    font-weight: 500;
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
