import { Link } from 'react-router-dom';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const Home = () => {
    return (
        <Row>
            <Col>
                <h1>Página Inicial</h1>
                <Link to="/sobre">Sobre</Link>
                <br />
                <Link to="/usuario">Usuario</Link>
                <br />
                <Link to="/troll">Troll</Link>
                <br />
                <Link to="/albumpraia">Fotos da Praia</Link>
            </Col>
        </Row>
    );
}

export default Home;