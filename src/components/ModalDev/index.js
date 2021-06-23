import React, { useCallback, useEffect, useState } from 'react';
import MoviesInfo from '../MoviesInfo';
import EditMovie from '../EditMovie';
import { Modaal, Container, Close, Button } from './styles';

const Modal = ({ id = 'mod', onClose = () => { }, selectedMovie }) => {

    const [modalVisible, setModalVisible] = useState(false);

    const handleOutsideClick = (e) => {
        if (e.target.id === id) onClose();
    }

    return (
        <div>
            <Modaal id={id} className="mod" onClick={handleOutsideClick} >
                <Container>
                    <Close onClick={onClose} />
                    <div>
                        <MoviesInfo movie={selectedMovie} />

                        <Button onClick={() => { setModalVisible(true); }} >Editar</Button>
                    </div>
                </Container>
            </Modaal>
            {modalVisible ? <EditMovie onClose={() => setModalVisible(false)} /> : null}
        </div>
    );
};

export default Modal;
