import './Layout.scss';

import Container from 'react-bootstrap/Container';
import { Outlet } from "react-router-dom";

import MainHeader from './Header/Header';
import MainFooter from './Footer/Footer';

function Layout() {
    return (
        <>
            <MainHeader />
            <Container>
                <Outlet />
            </Container>
            <MainFooter />
        </>
    );
};

export default Layout;