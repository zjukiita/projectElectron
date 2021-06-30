import React, { useEffect, useState } from 'react';
import MoviesInfo from '../MoviesInfo';
import api from '../../services/api';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { Modaal, Container, Close, Button, Box, Label, Buttoon } from './styles';

const Modal = ({ id = 'mod', onClose = () => { }, selectedMovie, onUpdate = () => { } }) => {

    const [edit, setEdit] = useState(false);
    const [movie, setMovie] = useState(selectedMovie);

    useEffect(() => {
        setMovie(selectedMovie);
    }, [selectedMovie]);

    const handleOutsideClick = (e) => {
        if (e.target.id === id)
            onClose();
    };

    const formik = useFormik({
        initialValues: {
            nome: movie.nome || '',
            imagem: movie.imagem || '',
            sinopse: movie.sinopse || '',
            duracao: movie.duracao || '',
            link: movie.link || '',
            trailer: movie.trailer || '',
            avaliacao: movie.avaliacao || '',
            anoDeLancamento: movie.anoDeLancamento || '',
            categoria: movie.categoria || '',
            classificacao: movie.classificacao || '',
        },
        enableReinitialize: true,
        validationSchema: Yup.object({
            nome: Yup.string().required('Obrigatório'),
            imagem: Yup.string().required('Obrigatório'),
            sinopse: Yup.string().required('Obrigatório'),
            duracao: Yup.string().required('Obrigatório'),
            link: Yup.string().required('Obrigatório'),
            trailer: Yup.string().required('Obrigatório'),
            avaliacao: Yup.string().required('Obrigatório'),
            anoDeLancamento: Yup.string().required('Obrigatório'),
            categoria: Yup.string().required('Obrigatório'),
            classificacao: Yup.string().required('Obrigatório'),
        }),
        onSubmit: async (values) => {
            try {
                await api.put(`/filmes/${selectedMovie.id}`, values);
                setMovie({
                    id: selectedMovie.id,
                    ...values
                });
                onUpdate();
                onClose();
                // alert(JSON.stringify(values, null, 2));
            } catch (error) {
                console.log('erro')
            }
            setEdit(false);
        }
    })

    return (
        <div>
            <Modaal id={id} className="mod" onClick={handleOutsideClick} >
                <Container>
                    <Close onClick={onClose} />

                    {!edit ? (

                        <div>
                            <MoviesInfo movie={movie} />
                            <Button onClick={() => { setEdit(true) }} >Editar</Button>
                        </div>

                    ) : (

                        <div style={{
                            display: "flex",
                            color: "#fff",
                            justifyContent: "center",
                        }} >
                            <form onSubmit={formik.handleSubmit}>
                                <div style={{
                                    display: "flex",
                                    flexDirection: "column",
                                }}>
                                    <Label htmlFor="nome">Nome</Label>
                                    <Box
                                        id="nome"
                                        type="text"
                                        {...formik.getFieldProps('nome')}
                                    />
                                </div>
                                <div style={{
                                    display: "flex",
                                    flexDirection: "column"
                                }}>
                                    <Label htmlFor="imagem">Imagem</Label>
                                    <Box
                                        id="imagem"
                                        type="text"
                                        {...formik.getFieldProps('imagem')}
                                    />
                                </div>
                                <div style={{
                                    display: "flex",
                                    flexDirection: "column"
                                }}>
                                    <Label htmlFor="sinopse">Sinopse</Label>
                                    <Box
                                        id="sinopse"
                                        type="text"
                                        {...formik.getFieldProps('sinopse')}
                                    />
                                </div>
                                <div style={{
                                    display: "flex",
                                    flexDirection: "column"
                                }}>
                                    <Label htmlFor="duracao">Duração</Label>
                                    <Box
                                        id="duracao"
                                        type="text"
                                        {...formik.getFieldProps('duracao')}
                                    />
                                </div>
                                <div style={{
                                    display: "flex",
                                    flexDirection: "column"
                                }}>
                                    <Label htmlFor="link">Link</Label>
                                    <Box
                                        id="link"
                                        type="text"
                                        {...formik.getFieldProps('link')}
                                    />
                                </div>
                                <div style={{
                                    display: "flex",
                                    flexDirection: "column"
                                }}>
                                    <Label htmlFor="trailer">Trailer</Label>
                                    <Box
                                        id="trailer"
                                        type="text"
                                        {...formik.getFieldProps('trailer')}
                                    />
                                </div>
                                <div style={{
                                    display: "flex",
                                    flexDirection: "column"
                                }}>
                                    <Label htmlFor="avaliacao">Avaliação</Label>
                                    <Box
                                        id="avaliacao"
                                        type="text"
                                        {...formik.getFieldProps('avaliacao')}
                                    />
                                </div>
                                <div style={{
                                    display: "flex",
                                    flexDirection: "column"
                                }}>
                                    <Label htmlFor="anoDeLancamento">Lançamento</Label>
                                    <Box
                                        id="anoDeLancamento"
                                        type="text"
                                        {...formik.getFieldProps('anoDeLancamento')}
                                    />
                                </div>
                                <div style={{
                                    display: "flex",
                                    flexDirection: "column"
                                }}>
                                    <Label htmlFor="categoria">Categoria</Label>
                                    <Box
                                        id="categoria"
                                        type="text"
                                        {...formik.getFieldProps('categoria')}
                                    />
                                </div>
                                <div style={{
                                    display: "flex",
                                    flexDirection: "column"
                                }}>
                                    <Label htmlFor="classificacao">Classificação</Label>
                                    <Box
                                        id="classificacao"
                                        type="text"
                                        {...formik.getFieldProps('classificacao')}
                                    />
                                </div>
                                <Buttoon type="submit" >Enviar</Buttoon>
                            </form>
                        </div>
                    )}
                </Container>
            </Modaal>
        </div>
    );
};

export default Modal;
