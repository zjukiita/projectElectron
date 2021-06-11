import React, { useCallback } from 'react';
import * as Yup from 'yup'
import api from '../../services/api'
import { useFormik, Formik } from 'formik';
import { useHistory } from 'react-router-dom'

const Register = () => {
    const history = useHistory();

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
                    history.push('/login')
        }
        catch (error) {
            if (error instanceof Yup.ValidationError) {
                alert(`${error.message}`)
            };
        };
    }, []);

    return (
        <>
            <h1>Registro</h1>
            <div>
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
                    {({ handleSubmit, values, setFieldValue, handleChange }) => (
                        <>
                            <div>
                                <input
                                    type="text"
                                    placeholder="Insira seu nome"
                                    onChange={handleChange('nomeCompleto')}
                                    value={values.nomeCompleto}
                                />
                            </div>
                            <div>
                                <input
                                    type="text"
                                    placeholder="Insira seu email"
                                    onChange={handleChange('email')}
                                    value={values.email}
                                />
                            </div>
                            <div>
                                <input
                                    type="text"
                                    placeholder="Insira seu usuario"
                                    onChange={handleChange('usuario')}
                                    value={values.usuario}
                                />
                            </div>
                            <div>
                                <input
                                    type="text"
                                    placeholder="Insira sua senha"
                                    onChange={handleChange('senha')}
                                    value={values.senha}
                                />
                            </div>
                            <div>
                                <input
                                    type="text"
                                    placeholder="Confirme sua senha!"
                                    onChange={handleChange('senhaVerify')}
                                    value={values.senhaVerify}
                                />
                            </div>

                            <button type="button" onClick={() => handleSubmit()}>Enviar</button>
                        </>
                    )}
                </Formik>
            </div>
        </>
    )
}

export default Register;