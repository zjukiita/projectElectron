import React, { useCallback, useState } from 'react';
import * as Yup from 'yup';
import api from '../../services/api';
import { useFormik, Formik } from 'formik';
import path from 'path'
import { useHistory, Link } from 'react-router-dom';

// Styled Components \\
import * as s from './styles';
import { ToastContainer, toast } from 'react-toastify';

// Bootstrap 
import Modal from 'react-bootstrap/Modal';
import { isNull } from 'util';

const Login = () => {
    const history = useHistory();

    const [modalShow, setModalShow] = useState(false);

    const handleLogin = useCallback(async (data) => {
        try {
            const schema = Yup.object().shape({
                email: Yup.string().email('Insira um endereço de email válido').required('Informe seu E-mail!'),
                senha: Yup.string().required('Insira sua senha do SenacPlay'),
            });
            await schema.validate(data);
            const response = await api.post('/login', data);
            if (response.data) {
                const jsonData = JSON.stringify(response.data);
                localStorage.setItem('login', jsonData);
                history.push('/perfil');
            }
            else {
                toast.warn(error.message, {
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
        catch (error) {
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
                toast.error('Seu email ou senha estão incorretos!', {
                    position: "top-right",
                    autoClose: 5000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                });
            }
        };
    }, []);

    const handleRegister = useCallback(async (data) => {
        try {
            const schema = Yup.object().shape({
                nomeCompleto: Yup.string().required('Campo "nome" obrigatório!'),
                email: Yup.string().email('Email não encontrado!').required('Campo "email" obrigatório'),
                usuario: Yup.string().required('Campo "usuário" obrigatório'),
                senha: Yup.string().min(6, 'A senha deve conter no mínimo 6 caracteres').required('Campo "senha"obrigatório'),
                senhaVerify: Yup.string().oneOf([Yup.ref('senha'), null], 'A senhas devem ser iguais!')
            });
            await schema.validate(data);
            await api.post('/users', data);
            setModalShow(false);
            toast.success('Cadastrado com sucesso', {
                position: "top-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
            });
        }
        catch (error) {
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
                toast.error('Seu email ou senha estão incorretos!', {
                    position: "top-right",
                    autoClose: 5000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                });
            }
        };
    }, []);

    return (
        <>
            <div className="bgRegister">
                <ToastContainer />
                <s.Logo src={path.join(__dirname, '../../assets/logo.png')} />
                <s.Content className="bg-ticket">
                    <s.Main>
                        <Formik
                            enableReinitialize
                            onSubmit={handleLogin}
                            initialValues={{
                                senha: "",
                                email: "",
                            }}
                        >
                            {({ handleSubmit, values, setFieldValue, handleChange, handleBlur }) => (
                                <>
                                    <s.Title>Login</s.Title>
                                    <div>
                                        <s.fieldInput
                                            type="text"
                                            placeholder="Insira seu email"
                                            onChange={handleChange('email')}
                                            onBlur={handleBlur('email')}
                                            value={values.email}
                                        />
                                    </div>

                                    <div>
                                        <s.fieldInput
                                            type="password"
                                            placeholder="Insira sua senha"
                                            onChange={handleChange('senha')}
                                            onBlur={handleBlur('senha')}
                                            value={values.senha}
                                        />
                                    </div>
                                    <s.Button type="button" onClick={() => handleSubmit()}>Enviar</s.Button>
                                    <s.ButtonRight type="button" onClick={() => setModalShow(true)}>Crie sua conta</s.ButtonRight>
                                </>
                            )}
                        </Formik>
                        <Modal
                            show={modalShow}
                            className="RegisterModal"
                            onHide={() => setModalShow(false)}
                            size="lg"
                            aria-labelledby="contained-modal-title-vcenter"
                            centered
                        >
                            <Modal.Body>
                                <s.Title>Cadastro</s.Title>
                                <Formik
                                    enableReinitialize
                                    onSubmit={handleRegister}
                                    initialValues={{
                                        senha: "",
                                        senhaVerify: "",
                                        nomeCompleto: "",
                                        usuario: "",
                                        email: "",
                                    }}
                                >
                                    {({ handleSubmit, values, setFieldValue, handleChange, handleBlur }) => (
                                        <>
                                            <div>
                                                <s.fieldInput
                                                    type="text"
                                                    placeholder="Insira seu nome"
                                                    onChange={handleChange('nomeCompleto')}
                                                    onBlur={handleBlur('nomeCompleto')}
                                                    value={values.nomeCompleto}
                                                />
                                            </div>
                                            <div>
                                                <s.fieldInput
                                                    type="text"
                                                    placeholder="Insira seu email"
                                                    onChange={handleChange('email')}
                                                    onBlur={handleBlur('email')}
                                                    value={values.email}
                                                />
                                            </div>
                                            <div>
                                                <s.fieldInput
                                                    type="text"
                                                    placeholder="Insira seu usuario"
                                                    onChange={handleChange('usuario')}
                                                    onBlur={handleBlur('usuario')}
                                                    value={values.usuario}
                                                />
                                            </div>
                                            <div>
                                                <s.fieldInput
                                                    type="password"
                                                    placeholder="Insira sua senha"
                                                    onChange={handleChange('senha')}
                                                    onBlur={handleBlur('senha')}
                                                    value={values.senha}
                                                />
                                            </div>
                                            <div>
                                                <s.fieldInput
                                                    type="password"
                                                    placeholder="Confirme sua senha"
                                                    onChange={handleChange('senhaVerify')}
                                                    onBlur={handleBlur('senhaVerify')}
                                                    value={values.senhaVerify}
                                                />
                                            </div>
                                            <s.ButtonRegister onClick={() => setModalShow(false)}>Fechar</s.ButtonRegister>
                                            <s.ButtonRegisterLeft type="button" onClick={() => handleSubmit()}>Enviar</s.ButtonRegisterLeft>
                                        </>
                                    )}
                                </Formik>
                            </Modal.Body>
                        </Modal>
                    </s.Main>
                </s.Content>
            </div>
        </>
    );
};

export default Login;