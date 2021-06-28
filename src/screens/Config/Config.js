import React, { useCallback, useEffect, useState } from 'react';
import api from '../../services/api'
import { Link } from 'react-router-dom';
import { Formik } from 'formik';
import * as Yup from 'yup';

// Estilos
import { ImgProfile, FontTag, FontUser, BackHome, Box } from './styles';
import { ToastContainer, toast } from 'react-toastify';


const Config = () => {

    const [storage, setStorage] = useState({});
    const [imgStorage, setImgStorage] = useState();

    const handleUpdate = useCallback(async (data) => {
        try {
            const schema = Yup.object().shape({
                email: Yup.string().required('Insira seu email').email('Insira um endereço de Email válido!'),
                usuario: Yup.string().required('Insira um nome de usuário'),
                senha: Yup.string().min(6, 'Sua senha deve conter no minímo 6 caracteres').required()
            });

            await schema.validate(data);
            const response = await api.put(`/users/${storage.id}`, data);
            if (response.data) {
                history.go(0)
                const jsonData = JSON.stringify(response.data);
                localStorage.setItem('login', jsonData);
            } else {
                toast.warn('Algo deu errado na atualização de dados!', {
                    position: "top-right",
                    autoClose: 5000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                });
            };
        } catch (error) {
            if (error instanceof Yup.ValidationError) {
                toast.warn(error.message, {
                    position: "top-right",
                    autoClose: 5000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                });
            } else {
                toast.error(`Algo inesperado aconteceu, Tente novamente!`, {
                    position: "top-right",
                    autoClose: 5000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                });
            }
        }
    });

    const getStorage = useCallback(async () => {
        try {
            const storage = await localStorage.getItem('login');
            setStorage(JSON.parse(storage));
            const imgStorage = await localStorage.getItem('img');
            setImgStorage(JSON.parse(imgStorage));
        } catch (error) {
            toast.error(`Houve um erro durante o carregamento do LocalStorage! ${error.message}`, {
                position: "top-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
            });
        }
    }, []);

    useEffect(() => {
        getStorage();
    }, [getStorage])

    return (
        <>
            <ToastContainer />
            <ImgProfile src={imgStorage || ''} />
            <h3><FontTag>Nome:</FontTag><FontUser>{storage.nomeCompleto || ''}</FontUser></h3>
            <h3><FontTag>Email:</FontTag><FontUser> {storage.email || ''}</FontUser></h3>
            <h3><FontTag>Nome de usuário:</FontTag><FontUser>{storage.usuario || ''}</FontUser></h3>
            <Link to="/home"><BackHome>Voltar para a home</BackHome></Link>

            <Formik
                enableReinitialize
                onSubmit={handleUpdate}
                initialValues={{
                    email: storage.email,
                    nomeCompleto: storage.nomeCompleto,
                    usuario: storage.usuario,
                    senha: '',
                }}
            >
                {({ handleSubmit, values, setFieldValue, handleChange, handleBlur }) => (
                    <>
                        <h2><FontTag>Atualização de informações</FontTag></h2>
                        <Box>
                            <input
                                type="text"
                                placeholder="Insira seu email"
                                onChange={handleChange('email')}
                                onBlur={handleBlur('email')}
                                value={values.email}
                            />
                        </Box>

                        <Box>
                            <input
                                type="text"
                                placeholder="Insira seu usuário"
                                onChange={handleChange('usuario')}
                                onBlur={handleBlur('usuario')}
                                value={values.usuario}
                            />
                        </Box>

                        <Box>
                            <input
                                type="password"
                                placeholder="Insira sua senha"
                                onChange={handleChange('senha')}
                                onBlur={handleBlur('senha')}
                                value={values.senha}
                            />
                        </Box>
                        <Box><button type="button" onClick={() => handleSubmit()}>Enviar</button></Box>
                    </>
                )}
            </Formik>
        </>
    )
}

export default Config;