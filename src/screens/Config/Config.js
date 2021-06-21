import React, { useCallback, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Formik } from 'formik'
import * as Yup from 'yup'

// Estilos
import { ImgProfile, Info } from './styles'
import { Container } from 'react-bootstrap'

const Config = () => {

    const [storage, setStorage] = useState({});

    const profilePicture = () => {
        const pictures = [
            "https://i.imgur.com/2ezz7tz.png",
            "https://sguru.org/wp-content/uploads/2017/06/steam-avatar-profile-picture-1003.jpg",
            "https://sguru.org/wp-content/uploads/2017/06/steam-avatar-profile-picture-1773.jpg",
            "https://i.pinimg.com/originals/6f/06/52/6f0652369f39ec5aab17fc1e29377c6a.png"
        ];
        const aleatory = Math.floor(Math.random() * (3 - 0 + 1)) + 0;
        return pictures[aleatory];
    };

    const handleUpdate = useCallback(async (data) => {
        try {
            const schema = Yup.object().shape({
                nomeCompleto: Yup.string().required('Campo "nome" obrigatório!'),
                email: Yup.string().email('Email não encontrado!').required('Campo "email" obrigatório'),
                usuario: Yup.string().required('Campo "usuário" obrigatório'),
                senha: Yup.string().min(6, 'A senha deve conter no mínimo 6 caracteres').required('Campo "senha"obrigatório'),
                senhaVerify: Yup.string().oneOf([Yup.ref('senha'), null], 'A senhas devem ser iguais!')
            });
            await schema.validate(data);
            const response = api.put('/users', data);
        } catch (error) {
            console.log(`Não foi possivel atualizar os dados do usuario! ${error}`)
        }
    });

    const getStorage = useCallback(async () => {
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

            <img src={profilePicture()} />
            <h3>Nome: Name Example</h3>
            <h3>Email: Example@gmail.com</h3>
            <h3>Password: Hidden</h3>
            <Link to="/login">Voltar ao login</Link>

            <Formik
                enableReinitialize
                onSubmit={handleUpdate}
                initialValues={{
                    senha: '',
                    email: 'Example@gmail.com',
                }}
            >
                {({ handleSubmit, values, setFieldValue, handleChange, handleBlur }) => (
                    <>
                        <h2>Login</h2>

                        <div>
                            <input
                                type="text"
                                placeholder="Insira seu email"
                                onChange={handleChange('email')}
                                onBlur={handleBlur('email')}
                                value={values.email}
                            />
                        </div>

                        <div>
                            <input
                                type="password"
                                placeholder="Insira sua senha"
                                onChange={handleChange('senha')}
                                onBlur={handleBlur('senha')}
                                value={values.senha}
                            />
                        </div>
                        <button type="button" onClick={() => handleSubmit()}>Enviar</button>
                    </>
                )}
            </Formik>
        </>
    )
}

export default Config;