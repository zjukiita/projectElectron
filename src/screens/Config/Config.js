import React, { useCallback, useEffect, useState } from 'react';

const Config = () => {

    const [ storage, setStorage ] = useState({});

    const getStorage = useCallback(async () => {
        try {
            const storage = await localStorage.getItem('/login')
            setStorage(JSON.parse(storage))
        } catch (error) {
            console.log(error);
        }
    }, []);

    useEffect(() => {
        getStorage();
    }, [getStorage])

    return (
        <>
            <h1>Nome: {storage.email}</h1>
        </>
    )
}

export default Config;