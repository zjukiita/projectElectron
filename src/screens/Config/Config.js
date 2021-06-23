import React, { useCallback, useEffect, useState } from 'react';
import api from '../../services/api'
import { Link } from 'react-router-dom';
import { Formik } from 'formik';
import * as Yup from 'yup';

// Estilos
import { ImgProfile } from './styles'


const Config = () => {

    const [storage, setStorage] = useState({});
    const [imgStorage, setImgStorage] = useState();

    const handleUpdate = useCallback(async (data) => {
        try {
            const schema = Yup.object().shape({
                email: Yup.string().email('Email inválido!'),
                usuario: Yup.string(),
            });

            await schema.validate(data);
            const response = await api.put(`/users/${storage.id}`, data);

            if (response.data) {
                const jsonData = JSON.stringify(response.data);
                localStorage.setItem('login', jsonData);
                alert('Dados atualizados com sucesso!')
            } else {
                alert('Algo deu errado!')
            }

        } catch (error) {
            console.log(`Não foi possivel atualizar os dados do usuario! ${error}`)
        }
    });

    const getStorage = useCallback(async () => {
        try {
            const storage = await localStorage.getItem('login');
            setStorage(JSON.parse(storage));
            const imgStorage = await localStorage.getItem('img');
            setImgStorage(JSON.parse(imgStorage));
        } catch (error) {
            console.log(error)
        }
    }, []);

    useEffect(() => {
        getStorage();
    }, [getStorage])

    return (
        <>

            <ImgProfile src={imgStorage || ''} />
            <h3>Nome: {storage.nomeCompleto || ''}</h3>
            <h3>Email: {storage.email || ''}</h3>
            <h3>Nome de usuário: {storage.usuario || ''}</h3>
            <Link to="/home">Voltar a home</Link>

            <Formik
                enableReinitialize
                onSubmit={handleUpdate}
                initialValues={{
                    senha: '',
                    email: storage.email,
                    nomeCompleto: storage.nomeCompleto,
                    usuario: storage.usuario
                }}
            >
                {({ handleSubmit, values, setFieldValue, handleChange, handleBlur }) => (
                    <>
                        <h2>Atualização de informações</h2>
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
                                type="text"
                                placeholder="Insira seu usuário"
                                onChange={handleChange('usuario')}
                                onBlur={handleBlur('usuario')}
                                value={values.usuario}
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