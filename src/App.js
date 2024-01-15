import logo from './logo.svg';
import './bootstrap.min.css';
import NavBar from "./Components/NavBar";
import Chart from "./Components/Chart";
import ChartComponent from "./Components/Chart";
import {Col, Row} from "react-bootstrap";
import Container from "react-bootstrap/Container";
import './App.css'
import InputBox from "./Components/InputBox";

function App() {
  return (
    <div className="App">
      <NavBar></NavBar>
        <Container fluid className="centered-content">
            <Row className="centered-row">
                <Col>
                    <ChartComponent></ChartComponent>
                </Col>
            </Row>
            <Row className="centered-row">>
                <Col>
                    <InputBox></InputBox>
                </Col>
            </Row>
        </Container>
    </div>
  );
}

export default App;
