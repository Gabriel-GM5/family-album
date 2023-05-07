import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import './index.scss';

import Layout from "./Components/Layout/Layout";
import Home from "./Pages/Home/Home";
import Troll from "./Pages/Troll/Troll";
import NoPage from "./Pages/NoPage/NoPage";
import AlbumPraia from './Pages/AlbumPraia/AlbumPraia';

const MainContainer = () => {
    return (
        <>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Layout />}>
                        <Route index element={<Home />} />
                        <Route path="troll" element={<Troll />} />
                        <Route path="albumpraia" element={<AlbumPraia />} />
                        <Route path="*" element={<NoPage />} />
                    </Route>
                </Routes>
            </BrowserRouter>
        </>
    );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<MainContainer />);