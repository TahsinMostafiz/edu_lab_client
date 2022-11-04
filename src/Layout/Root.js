import React from 'react';
import { Outlet } from "react-router-dom";
import Header from '../Pages/Shared/Header';
import Footer from '../Pages/Shared/Footer/Footer';

const Root = () => {
    return (
        <>
            <Header></Header>
            <Outlet></Outlet>
            <Footer></Footer>
        </>
    );
};

export default Root;