import React from 'react';
import { GlobalStyle, Teste } from './styles';
import { Link } from 'react-router-dom';

const GlobalMenuDev = () => {
    return (
        <div>
            <GlobalStyle/>
            <Teste>
                <nav>
                    <div>
                        <Link style={{ 
                            color: "#fff",
                            fontSize: "30px",
                            textTransform: "uppercase",
                            
                        }} to="/"> Home </Link>
                    </div>
                    <div>
                        <Link style={{ 
                            color: "#fff", 
                            fontSize: "30px", 
                            textTransform: "uppercase",
                            
                        }} to="/DevMovies"> Filmes </Link>
                    </div>
                    <div>
                        <Link style={{ 
                            color: "#fff", 
                            fontSize: "30px", 
                            textTransform: "uppercase",
                            
                        }} to="/DevUsers"> Usuários </Link>
                    </div>
                </nav>
            </Teste>
        </div>
    )
}

export default GlobalMenuDev;