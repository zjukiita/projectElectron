import React, { useState } from 'react';
import Modal from 'react-bootstrap/Modal';

// Styled Component
import { BgHover, BgImage, Title, Button } from './styles';


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
                        onHide={() => setModalShow(false)}
                        size="lg"
                        aria-labelledby="contained-modal-title-vcenter"
                        centered
                    >

                        <Modal.Body
                            style={{
                                width: '90vw',
                                height: '50vw'
                            }}>
                            <webview
                            style={{
                                width: '60vw',
                                height: '30vw'
                            }}
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