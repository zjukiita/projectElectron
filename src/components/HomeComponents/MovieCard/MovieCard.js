import React, { useState } from 'react';
import Modal from 'react-bootstrap/Modal';

// Styled Component
import { BgHover, BgImage, Title, Button, View } from './styles';

const MovieCard = ({ movie }) => {

    const [modalShow, setModalShow] = useState(false);

    return (
        <div>
            <BgImage style={{ backgroundImage: `url(${movie.imagem})` }}>
                <BgHover>
                    <Title>{movie.nome}</Title>
                    <Button onClick={() => setModalShow(true)}>Play <i className="fas fa-play"></i></Button>
                    <Modal
                        show={modalShow}
                        className="bgModal"
                        onHide={() => setModalShow(false)}
                        size="xl"
                        aria-labelledby="contained-modal-title-vcenter"
                        centered
                    >
                        <Modal.Body>
                            <webview
                                src={movie.link}
                            >
                            </webview>
                        </Modal.Body>
                    </Modal>
                </BgHover>
            </BgImage>
        </div>
    )
}

export default MovieCard;