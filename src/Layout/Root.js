import React from 'react';
import { Outlet } from "react-router-dom";
import Header from '../Pages/Shared/Header';

const Root = () => {
    return (
        <>
            <Header></Header>
            <div class="container px-4">
                <div class="grid grid-cols-12 gap-4">
                    <div class="col-start-1 col-span-3 ">
                        <h2>Category</h2>
                    </div>
                    <div class="col-start-4 col-span-12">
                        <Outlet></Outlet>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Root;