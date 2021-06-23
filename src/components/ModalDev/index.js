import React, { useCallback, useEffect, useState } from 'react';
import MoviesInfo from '../MoviesInfo';
import api from '../../services/api';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { Modaal, Container, Close, Button } from './styles';

const Modal = ({ id = 'mod', onClose = () => { }, selectedMovie }) => {

    const [edit, setEdit] = useState(false);

    const handleOutsideClick = (e) => {
        if (e.target.id === id) onClose();
    }

    const updateMovie = async (id) => {
        await api.put(`/filmes/${id}`);
        setEdit(false);
    };

    const formik = useFormik({
        initialValues: {
            nome: selectedMovie.nome,
            imagem: selectedMovie.imagem,
            sinopse: selectedMovie.sinopse,
            duracao: selectedMovie.duracao,
            link: selectedMovie.link,
            trailer: selectedMovie.trailer,
            avaliacao: selectedMovie.avaliacao,
            anoDeLancamento: selectedMovie.anoDeLancamento,
            categoria: selectedMovie.categoria,
            classificacao: selectedMovie.classificacao
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
        })
    })

    return (
        <div>
            <Modaal id={id} className="mod" onClick={handleOutsideClick} >
                <Container>
                    <Close onClick={onClose} />
                    {!edit ? (
                        <div>
                            <MoviesInfo movie={selectedMovie} />

                            <Button onClick={() => {
                                setEdit(true)
                            }} >Editar</Button>
                        </div>
                    ) : (
                        <form onSubmit={formik.handleSubmit}>
                            <div>
                                <label htmlFor="nome">Nome</label>
                                <input
                                    id="nome"
                                    type="text"
                                    {...formik.getFieldProps('nome')}
                                />
                            </div>
                            <div>
                                <label htmlfor="imagem">Imagem</label>
                                <input
                                    id="imagem"
                                    type="text"
                                    {...formik.getFieldProps('imagem')}
                                />
                            </div>
                            <div>
                                <label htmlFor="sinopse">Sinopse</label>
                                <input
                                    id="sinopse"
                                    type="text"
                                    {...formik.getFieldProps('sinopse')}
                                />
                            </div>
                            <div>
                                <label htmlFor="duracao">Duração</label>
                                <input
                                    id="duracao"
                                    type="text"
                                    {...formik.getFieldProps('duracao')}
                                />
                            </div>
                            <div>
                                <label htmlFor="link">Link</label>
                                <input
                                    id="link"
                                    type="text"
                                    {...formik.getFieldProps('link')}
                                />
                            </div>
                            <div>
                                <label htmlFor="trailer">Trailer</label>
                                <input
                                    id="trailer"
                                    type="text"
                                    {...formik.getFieldProps('trailer')}
                                />
                            </div>
                            <div>
                                <label htmlFor="avaliacao">Avaliação</label>
                                <input
                                    id="avaliacao"
                                    type="text"
                                    {...formik.getFieldProps('avaliacao')}
                                />
                            </div>
                            <div>
                                <label htmlFor="anoDeLancamento">Lançamento</label>
                                <input
                                    id="anoDeLancamento"
                                    type="text"
                                    {...formik.getFieldProps('anoDeLancamento')}
                                />
                            </div>
                            <div>
                                <label htmlFor="categoria">Categoria</label>
                                <input
                                    id="categoria"
                                    type="text"
                                    {...formik.getFieldProps('categoria')}
                                />
                            </div>
                            <div>
                                <label htmlFor="classificacao">Classificação</label>
                                <input
                                    id="classificacao"
                                    type="text"
                                    {...formik.getFieldProps('classificacao')}
                                />
                            </div>
                            <button type="submit" >Salvar</button>
                        </form>
                    )}
                </Container>
            </Modaal>
        </div>
    );
};

export default Modal;
