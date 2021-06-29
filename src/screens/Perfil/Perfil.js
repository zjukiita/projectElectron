import { Tooltip } from 'bootstrap';
import React, { useEffect, useState, useCallback } from 'react';
import { OverlayTrigger } from 'react-bootstrap';
import { Link, useHistory } from 'react-router-dom';

import { ImgProfile, Button, Title, ImagesProfile, Content, Back, TitleBack } from './styles';

const Perfil = () => {
    const history = useHistory();

    const [storage, setStorage] = useState({});

    const getStorage = useCallback(async () => {
        try {
            const storage = await localStorage.getItem('img')
            setStorage(JSON.parse(storage))
        } catch (error) {
            console.log(error)
        }
    }, []);

    const backHome = () => {
        history.push('/')
    }

    const ProfileImages = [
        {
            id: 1,
            nome: "Perfil 01",
            link: "https://i.imgur.com/2ezz7tz.png"
        },
        {
            id: 2,
            nome: "Perfil 02",
            link: "https://sguru.org/wp-content/uploads/2017/06/steam-avatar-profile-picture-1003.jpg"
        },
        {
            id: 3,
            nome: "Perfil 03",
            link: "https://sguru.org/wp-content/uploads/2017/06/steam-avatar-profile-picture-1773.jpg"
        },
        {
            id: 4,
            nome: "Perfil 04",
            link: "https://i.pinimg.com/originals/6f/06/52/6f0652369f39ec5aab17fc1e29377c6a.png"
        },
    ];

    useEffect(() => {
        getStorage();
    }, [getStorage])

    return (
        <>
            <Back onClick={backHome}><i className="fas fa-arrow-left"></i><TitleBack>Logout</TitleBack></Back>
            <Content>
                <Title>Escolha seu perfil</Title>
                <div style={{
                    display: 'flex',
                    flexDirection: 'row',
                    justifyContent: 'center',
                    alignItems: 'center',
                }}>
                    {ProfileImages.map(p => {
                        return (
                            <ImagesProfile key={p.id}>
                                <ImgProfile onClick={
                                    () => {
                                        localStorage.setItem('img', JSON.stringify(p.link))
                                        history.push("/home")
                                    }
                                } src={p.link} />
                                <Title>{p.nome}</Title>
                            </ImagesProfile>
                        );
                    })}
                </div>
            </Content>
        </>
    )
};

export default Perfil;