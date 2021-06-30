import React from 'react';
import { P } from './styles';

const MoviesDev = ({ user }) => {
    return (
        <div style={{
            display: "flex",
            flexDirection: "column",
        }}>
            <P>Id: {user.id}</P>
            <P>Nome: {user.nomeCompleto}</P>
            <P>Email: {user.email}</P>
            <P>Usuário: {user.usuario}</P>
        </div>
    );
};

export default MoviesDev;
