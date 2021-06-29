import React, { useCallback, useEffect, useState } from 'react';
import api from '../../services/api'
import { Link, useHistory } from 'react-router-dom';
import { Formik } from 'formik';
import * as Yup from 'yup';

// Estilos
import { ImgProfile,Box, ButtonRight, ImgDiv, Info, Back, TitleInfo, Title } from './styles';
import { ToastContainer, toast, collapseToast } from 'react-toastify';

// React Boostrap 
import { Container, Row, Col } from 'react-bootstrap'

const Config = () => {
    const history = useHistory();

    const backHome = () => {
        history.push('/home')
    }

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
            const storage = localStorage.getItem('login');
            setStorage(JSON.parse(storage));
            const imgStorage = localStorage.getItem('img');
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
            <Back onClick={backHome}><i className="fas fa-arrow-left"></i></Back>
            <ToastContainer />
            <Container>

                <ImgDiv>
                    <ImgProfile src={imgStorage || ''} />
                </ImgDiv>
                <Container>
                    <Row>
                        <Col md={12}>
                            <Info><TitleInfo>Nome:</TitleInfo>{storage.nomeCompleto || ''}</Info>
                            <Info><TitleInfo>Nome de usuário:</TitleInfo>{storage.usuario || ''}</Info>
                            <Info><TitleInfo>Email:</TitleInfo>{storage.email || ''}</Info>
                        </Col>
                    </Row>
                </Container>

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
                            <Container className="updateInfoConfig">
                                <Title>Atualização de informações</Title>
                                <Row>
                                    <Col md={{ span: 6, offset: 3 }}>
                                        <Box
                                            type="text"
                                            placeholder="Insira seu email"
                                            onChange={handleChange('email')}
                                            onBlur={handleBlur('email')}
                                            value={values.email}
                                        />
                                    </Col>

                                    <Col md={{ span: 6, offset: 3 }}>
                                        <Box
                                            type="text"
                                            placeholder="Insira seu usuário"
                                            onChange={handleChange('usuario')}
                                            onBlur={handleBlur('usuario')}
                                            value={values.usuario}
                                        />
                                    </Col>

                                    <Col md={{ span: 6, offset: 3 }}>
                                        <Box
                                            type="password"
                                            placeholder="Insira sua senha"
                                            onChange={handleChange('senha')}
                                            onBlur={handleBlur('senha')}
                                            value={values.senha}
                                        />
                                    </Col>
                                </Row>
                                <ButtonRight type="button" onClick={() => handleSubmit()}>Enviar</ButtonRight>
                            </Container>
                        </>
                    )}
                </Formik>
            </Container>
        </>
    )
}

export default Config;