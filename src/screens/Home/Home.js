import React, { useCallback, useEffect, useState } from 'react';

// Importação dos componentes
import NavbarComponent from '../../components/HomeComponents/Navbar';
import MainCarousel from '../../components/HomeComponents/MainCarousel';
import FilmsCarousel from '../../components/HomeComponents/FilmsCarousel';

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
