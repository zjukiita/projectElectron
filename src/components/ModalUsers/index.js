import React, { useEffect, useState } from 'react';
import api from '../../services/api';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { Modaal, Container, Box, Label, Buttoon } from './styles';

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
        },
        enableReinitialize: true,
        validationSchema: Yup.object({
            nomeCompleto: Yup.string().required('Obrigatório'),
            usuario: Yup.string().required('Obrigatório'),
            email: Yup.string().required('Obrigatório'),
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
                console.log(error)
            }
        }
    })

    return (
        <div>
            <Modaal id={id} className="mod" onClick={handleOutsideClick} >
                <Container>
                    <div style={{
                        display: "flex",
                        justifyContent: "center",
                        margin: "0",
                        width: "40vw",
                        height: "40vw",
                        paddingTop: "40px",
                    }}>
                        <form onSubmit={formik.handleSubmit}>
                            <div>
                                <Label htmlFor="nomeCompleto">Nome</Label>
                                <Box
                                    id="nomeCompleto"
                                    type="text"
                                    {...formik.getFieldProps('nomeCompleto')}
                                />
                            </div>
                            <div>
                                <Label htmlFor="usuario">Usuário</Label>
                                <Box
                                    id="usuario"
                                    type="text"
                                    {...formik.getFieldProps('usuario')}
                                />
                            </div>
                            <div>
                                <Label htmlFor="email">Email</Label>
                                <Box
                                    id="email"
                                    type="text"
                                    {...formik.getFieldProps('email')}
                                />
                            </div>
                            <div>
                                <Buttoon type="submit" >Enviar</Buttoon>
                            </div>
                        </form>
                    </div>
                </Container>
            </Modaal>
        </div>
    );
};

export default ModalUsers;
