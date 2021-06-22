import React from 'react';
import MoviesInfo from '../MoviesInfo';
import { Modaal, Container, Close } from './styles';

const Modal = ({ id = 'mod', onClose = () => { }, selectedMovie }) => {

    const handleOutsideClick = (e) => {
        if (e.target.id === id) onClose();
    }

    return (
        <Modaal id={id} className="mod" onClick={handleOutsideClick} >
            <Container>
                <Close onClick={onClose} />
                <div>
                    <MoviesInfo movie={selectedMovie} />
                    <button onClick={} >Editar</button>
                </div>
            </Container>
        </Modaal>
    );
};

export default Modal;
