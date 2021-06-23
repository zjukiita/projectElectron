import React from 'react';
import { Div, Container, Close } from './styles';

const EditMovie = ({ id = 'mod', onClose = () => { } }) => {

    const handleOutsideClick = (e) => {
        if (e.target.id === id) onClose();
    }

    return (
        <Div id={id} className="mod" onClick={handleOutsideClick}>
            <Container>
                <Close onClick={onClose} />
                <div style={{
                            display: "flex",
                            width: "100%",
                            height: "100%"
                        }}>
                    <form>
                        <div style={{
                            display: "flex",
                            flexDirection: "column",
                            color: "#fff",
                            justifyContent: "center"
                        }}>
                            <label for="id">id</label>
                            <input type="text" id="id" name="id" />

                            <label for="name">Filme</label>
                            <input type="text" id="name" name="name" />

                            <label for="imagem">Imagem</label>
                            <input type="text" id="imagem" name="imagem" />

                            <label for="sinopse">Sinopse</label>
                            <input type="text" id="sinopse" name="sinopse" />

                            <label for="duracao">Duração</label>
                            <input type="text" id="duracao" name="duracao" />

                            <label for="link">Link</label>
                            <input type="text" id="link" name="link" />

                            <label for="trailer">Trailer</label>
                            <input type="text" id="trailer" name="trailer" />

                            <label for="avaliacao">Avaliação</label>
                            <input type="text" id="avaliacao" name="avaliacao" />

                            <label for="anoDeLancamento">Lançamento</label>
                            <input type="text" id="anoDeLancamento" name="anoDeLancamento" />

                            <label for="categoria">Categoria</label>
                            <input type="text" id="categoria" name="categoria" />

                            <label for="classificacao">Classificação</label>
                            <input type="text" id="classificacao" name="classificacao" />
                        </div>
                    </form>
                </div>
            </Container>
        </Div>
    );
}

export default EditMovie;