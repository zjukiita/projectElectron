import React, { useEffect, useState } from 'react';
import MoviesInfo from '../MoviesInfo';
import api from '../../services/api';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { Modaal, Container, Close, Button } from './styles';

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
                alert(JSON.stringify(values, null, 2));
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
                                <label htmlFor="imagem">Imagem</label>
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
                            <button type="submit" >Enviar</button>
                        </form>
                    )}
                </Container>
            </Modaal>
        </div>
    );
};

export default Modal;
