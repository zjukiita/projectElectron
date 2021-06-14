import React from 'react';
import GlobalMenuDev from '../../../components/GlobalMenuDev';
import { Render } from './styles';


const DevMovies = () => {


    
    return (
        <div style={{ display: "flex", flexDirection: "row", flexWrap: "wrap" }} >
            <GlobalMenuDev />
            <div>
                <h1>Filmes</h1>
            </div>
        </div>
    )
}

export default DevMovies;