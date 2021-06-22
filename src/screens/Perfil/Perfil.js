import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

import { ImgProfile } from './styles';

const Perfil = () => {

    const [storage, setStorage] = useState({});

    const ImageStorage = async () => {
        try {
            const storage = await localStorage.getItem('img');
            setStorage(storage);
        } catch (error) {
            console.log(error);
        }
    };

    const ProfileImages = [
        {
            id: "1",
            link: "https://i.imgur.com/2ezz7tz.png"
        },
        {
            id: "2",
            link: "https://sguru.org/wp-content/uploads/2017/06/steam-avatar-profile-picture-1003.jpg"
        },
        {
            id: "3",
            link: "https://sguru.org/wp-content/uploads/2017/06/steam-avatar-profile-picture-1773.jpg"
        },
        {
            id: "4",
            link: "https://i.pinimg.com/originals/6f/06/52/6f0652369f39ec5aab17fc1e29377c6a.png"
        }
    ];

    useEffect(() => {
        ImageStorage();
    }, [ImageStorage])

    return (
        <>
            <h2>Escolha seu perfil</h2>
            {ProfileImages.map(p => {
                return (
                    <div key={p.id}>
                        <ImgProfile src={p.link} />
                        <button onClick={() => 
                            localStorage.setItem('img', p.id)}>Select This Image</button>
                    </div>
                );
            })}
            <Link to="/home">Voltar a home</Link>
        </>
    )
};

export default Perfil;