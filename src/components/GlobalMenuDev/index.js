import React from 'react';
import { Teste } from './styles';
import { Link } from 'react-router-dom';

const GlobalMenuDev = () => {
    return (
        <div>
            <Teste>
                <nav>
                    <div>
                        <Link style={{ 
                            color: "#fff",
                            fontSize: "3vw",
                            textTransform: "uppercase",
                        }} to="/"> Home </Link>
                    </div>
                    <div>
                        <Link style={{ 
                            color: "#fff", 
                            fontSize: "3vw", 
                            textTransform: "uppercase",
                        }} to="/DevMovies"> Filmes </Link>
                    </div>
                    <div>
                        <Link style={{ 
                            color: "#fff", 
                            fontSize: "3vw", 
                            textTransform: "uppercase",
                        }} to="/DevUsers"> Usuários </Link>
                    </div>
                </nav>
            </Teste>
        </div>
    )
}

export default GlobalMenuDev;