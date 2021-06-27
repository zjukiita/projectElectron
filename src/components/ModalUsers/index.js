import React, { useEffect, useState } from 'react';
import api from '../../services/api';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { Modaal, Container, Close } from './styles';

const ModalUsers = ({ id = 'mod', onClose = () => { }, selectedUser, onUpdate = () => { } }) => {

    const [user, setUser] = useState(selectedUser);

    useEffect(() => {
        setUser(selectedUser);
    }, [selectedUser]);

    const handleOutsideClick = (e) => {
        if (e.target.id === id)
            onClose();
    };

    const formik = useFormik({
        initialValues: {
            nomeCompleto: user.nomeCompleto || '',
            usuario: user.usuario || '',
            email: user.email || '',
            senha: user.senha || '',
        },
        enableReinitialize: true,
        validationSchema: Yup.object({
            nomeCompleto: Yup.string().required('Obrigatório'),
            usuario: Yup.string().required('Obrigatório'),
            email: Yup.string().required('Obrigatório'),
            senha: Yup.string().required('Obrigatório'),
        }),
        onSubmit: async (values) => {
            try {
                await api.put(`/users/${selectedUser.id}`, values);
                setUser({
                    id: selectedUser.id,
                    ...values
                });
                onUpdate();
                onClose();
                // alert(JSON.stringify(values, null, 2));
            } catch (error) {
                console.log('erro')
            }
        }
    })

    return (
        <div>
            <Modaal id={id} className="mod" onClick={handleOutsideClick} >
                <Container>
                    <Close onClick={onClose} />
                    <form onSubmit={formik.handleSubmit}>
                        <div>
                            <label htmlFor="nomeCompleto">Nome</label>
                            <input
                                id="nomeCompleto"
                                type="text"
                                {...formik.getFieldProps('nomeCompleto')}
                            />
                        </div>
                        <div>
                            <label htmlFor="usuario">Usuário</label>
                            <input
                                id="usuario"
                                type="text"
                                {...formik.getFieldProps('usuario')}
                            />
                        </div>
                        <div>
                            <label htmlFor="email">Email</label>
                            <input
                                id="email"
                                type="text"
                                {...formik.getFieldProps('email')}
                            />
                        </div>
                        <div>
                            <label htmlFor="senha">Senha</label>
                            <input
                                id="senha"
                                type="text"
                                {...formik.getFieldProps('senha')}
                            />
                        </div>
                        <button type="submit" >Enviar</button>
                    </form>
                </Container>
            </Modaal>
        </div>
    );
};

export default ModalUsers;
