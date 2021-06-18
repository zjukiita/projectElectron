import React, { useCallback, useEffect, useState } from 'react';

// Importação dos componentes
import NavbarComponent from '../../components/HomeComponents/Navbar';
import MainCarousel from '../../components/HomeComponents/MainCarousel';
import FilmsCarousel from '../../components/HomeComponents/FilmsCarousel';

// Styled Components
import * as s from './styles';

// Bootstrap 
import * as Bs from 'react-bootstrap'

const Home = () => {
    return (
        <>
            <NavbarComponent />
            <MainCarousel />
            <FilmsCarousel />
        </>
    );
};

export default Home;
