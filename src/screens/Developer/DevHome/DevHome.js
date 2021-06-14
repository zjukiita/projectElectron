import React from 'react';
import GlobalMenuDev from '../../../components/GlobalMenuDev';
import { Render } from './styles';


const DevHome = () => {


    
    return (
        <div style={{ display: "flex", flexDirection: "row", flexWrap: "wrap" }} >
            <GlobalMenuDev />
            <div>
                <h1>Home</h1>
            </div>
        </div>
    )
}

export default DevHome;