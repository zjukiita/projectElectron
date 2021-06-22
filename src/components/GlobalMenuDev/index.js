import React from 'react';
import { MenuBar, Color } from './styles';
import { Link } from 'react-router-dom';

const GlobalMenuDev = () => {
    return (
        <MenuBar>
            <nav>
                <Color>
                    <Link style={{
                        fontSize: "3vw",
                        textDecoration: "none",
                        textShadow: "3px 3px 5px black",
                        margin: "0",
                        padding: "0",
                        paddingTop: "10px",
                        paddingBottom: "10px",
                    }} to="/"> Home </Link>
                </Color>
                <Color>
                    <Link style={{
                        fontSize: "3vw",
                        textDecoration: "none",
                        textShadow: "3px 3px 5px black",
                        margin: "0",
                        padding: "0",
                        paddingTop: "10px",
                        paddingBottom: "10px",
                    }} to="/DevMovies"> Filmes </Link>
                </Color>
                <Color>
                    <Link style={{
                        fontSize: "3vw",
                        textDecoration: "none",
                        textShadow: "3px 3px 5px black",
                        margin: "0",
                        padding: "0",
                        paddingTop: "10px",
                        paddingBottom: "10px",
                    }} to="/DevUsers"> Usuários </Link>
                </Color>
            </nav>
        </MenuBar>
    )
}

export default GlobalMenuDev;