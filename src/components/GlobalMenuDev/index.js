import React from 'react';
import { MenuBar, Color } from './styles';
import { Link } from 'react-router-dom';

const GlobalMenuDev = () => {
    return (
        <div>
            <MenuBar>
                <nav>
                    <Color>
                        <Link style={{ 
                            fontSize: "3vw",
                            textDecoration: "none",
                            textShadow: "3px 3px 5px black"
                        }} to="/"> Home </Link>
                    </Color>
                    <Color>
                        <Link style={{ 
                            fontSize: "3vw",
                            textDecoration: "none",
                            textShadow: "3px 3px 5px black"
                        }} to="/DevMovies"> Filmes </Link>
                    </Color>
                    <Color>
                        <Link style={{  
                            fontSize: "3vw",
                            textDecoration: "none",
                            textShadow: "3px 3px 5px black"
                        }} to="/DevUsers"> Usuários </Link>
                    </Color>
                </nav>
            </MenuBar>
        </div>
    )
}

export default GlobalMenuDev;