import React from 'react';
import GlobalMenuDev from '../../../components/GlobalMenuDev';

const DevUsers = () => {

    return (
        <div style={{ display: "flex", flexDirection: "row", flexWrap: "wrap" }} >
            <GlobalMenuDev />
            <div>
                <h1>Usuários</h1>
            </div>
        </div>
    )
}

export default DevUsers;