import styled, { css } from 'styled-components';

export const Navbar = styled.ul`
    list-style-type: none;
    display: flex;
    align-items: center;
    margin: 0;
    padding: 0;
    overflow: hidden;
    background-color: #333;
`

export const Option = styled.li`
    float: left;
    margin-left: 30px;
`

export const SearchLi = styled.li`
    float: right;
`

export const Link = styled.a`
    display: block;
    color: #fff;
    text-align: center;
    padding: 14px 16px;
    text-decoration: none;

    &:hover {
        color: #000;
        text-decoration: none;
        cursor: pointer;
    }
`
export const Logo = styled.img`
    width: 60px;
`

export const Search = styled.input`
    border-radius: 8px;
`

export const Slide = styled.img`
    height: 100%;
`