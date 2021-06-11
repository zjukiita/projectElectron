import React, { useCallback, AsyncStorage } from 'react';
import * as Yup from 'yup'
import api from '../../services/api'
import { useFormik, Formik } from 'formik';
import { useHistory } from 'react-router-dom'

// Styled Components \\
import * as s from './styles'

const Login = () => {
    const history = useHistory();

    const handleLogin = useCallback(async (data) => {
        try {
            const schema = Yup.object().shape({
                email: Yup.string().email('Email não encontrado!').required('Email ou senha inválidos!'),
                senha: Yup.string().min(6, 'A senha deve conter no mínimo 6 caracteres').required('Email ou senha inválidos!'),
            });
            await schema.validate(data);
            const response = await api.post('/login', data);
            console.log(response)
            const jsonData = JSON.stringify(response.data);
            history.push('/')
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
                        {({ handleSubmit, values, setFieldValue, handleChange }) => (
                            <>
                                <s.Title>Login</s.Title>

                                <div>
                                    <s.fieldInput
                                        type="text"
                                        placeholder="Insira seu email"
                                        onChange={handleChange('email')}
                                        value={values.email}
                                    />
                                </div>

                                <div>
                                    <s.fieldInput
                                        type="password"
                                        placeholder="Insira sua senha"
                                        onChange={handleChange('senha')}
                                        value={values.senha}
                                    />
                                </div>

                                <s.Button type="button" onClick={() => handleSubmit()}>Enviar</s.Button>
                            </>
                        )}
                    </Formik>
                </s.Main>
            </s.Content>
        </>
    );
};

export default Login;