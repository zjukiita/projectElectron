import React, { useEffect, useState, useCallback } from 'react';
import { Link, useHistory } from 'react-router-dom';

import { ImgProfile } from './styles';

const Perfil = () => {
    const history = useHistory();

    const [storage, setStorage] = useState({});

    const getStorage = useCallback(async () => {
        try {
            const storage = await localStorage.getItem('img')
            setStorage(JSON.parse(storage))
            console.log(storage)
        } catch (error) {
            console.log(error)
        }
    }, []);

    const ProfileImages = [
        {
            id: 1,
            link: "https://i.imgur.com/2ezz7tz.png"
        },
        {
            id: 2,
            link: "https://sguru.org/wp-content/uploads/2017/06/steam-avatar-profile-picture-1003.jpg"
        },
        {
            id: 3,
            link: "https://sguru.org/wp-content/uploads/2017/06/steam-avatar-profile-picture-1773.jpg"
        },
        {
            id: 4,
            link: "https://i.pinimg.com/originals/6f/06/52/6f0652369f39ec5aab17fc1e29377c6a.png"
        }
    ];

    useEffect(() => {
        getStorage();
    }, [getStorage])

    return (
        <>
            <h2>Escolha seu perfil</h2>
            {ProfileImages.map(p => {
                return (
                    <div key={p.id}>
                        <ImgProfile src={p.link} />
                        <button onClick={
                            () => {
                                localStorage.setItem('img', JSON.stringify(p.link))
                                history.push("/home")
                                console.log(`Imagem ${p.id} salvada!`)
                            }
                        }>Select This Image</button>
                    </div>
                );
            })}
            <Link to="/home">Voltar a home</Link>
        </>
    )
};

export default Perfil;