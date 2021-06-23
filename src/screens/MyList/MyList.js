import React, { useCallback } from 'react';

const MyList = () => {
    const getStorage = useCallback(async () => {
        try {
            const storage = await localStorage.getItem('favoritos')
            setStorage(JSON.parse(storage));
            console.log(`Retorno do LocalStorage -- favoritos: ${storage}`)
        } catch (error) {
            console.log('Falha no carregamento dos favoritos!')
        }
    })

    return (
        <>
            <h1>Minha Lista</h1>

        </>
    );
};

export default MyList;