import React, { useCallback, useState } from 'react';
import * as Yup from 'yup'
import api from '../../services/api'
import { useFormik, Formik } from 'formik';
import { useHistory, Link } from 'react-router-dom'

// Styled Components \\
import * as s from './styles'

// Bootstrap 
import Modal from 'react-bootstrap/Modal'

const Login = () => {
    const history = useHistory();
    const [modalShow, setModalShow] = useState(false);

    const handleLogin = useCallback(async (data) => {
        try {
            const schema = Yup.object().shape({
                email: Yup.string().email('Email inválido!').required('Informe seu E-mail!'),
                senha: Yup.string().min(6, 'A senha deve conter no mínimo 6 caracteres').required('Informe sua senha!'),
            });
            await schema.validate(data);
            const response = await api.post('/login', data);
            const jsonData = JSON.stringify(response.data);
            await localStorage.setItem('login', jsonData );
            history.push('/perfil');
        }
        catch (error) {
            if (error instanceof Yup.ValidationError) {
                alert(`${error.message}`);
            };
            alert('Credencias incorretas!');
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
            const response = api.post('/users', data);
                alert('Registro realizado com sucesso!');
            setModalShow(false);
        }
        catch (error) {
            if (error instanceof Yup.ValidationError) {
                alert(`${error.message}`)
            };
        };
    }, []);

    return (
        <>
            <s.Content>
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
        </>
    );
};

export default Login;