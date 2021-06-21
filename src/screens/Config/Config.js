import React, { useCallback, useEffect, useState } from 'react';
import { Link } from 'react-router-dom'

const Config = () => {

    const [storage, setStorage] = useState({});

    const getStorage = useCallback( async () => {
        try {
            const storage = await localStorage.getItem('login')
            setStorage(JSON.parse(storage))
            console.log(storage)
        } catch (error) {
            console.log(error)
        }
    }, []);

    useEffect(() => {
        getStorage();
    }, [getStorage])

    return (
        <>
            <h1>Nome:{storage.email}</h1>
            <Link to="/login">Voltar ao login</Link>
        </>
    )
}

export default Config;