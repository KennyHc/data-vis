import './bootstrap.min.css';
import ChartComponent from "./Components/Chart";
import {Col, Row} from "react-bootstrap";
import Container from "react-bootstrap/Container";
import './App.css'
import InputBox from "./Components/InputBox";
import {useState} from "react";


function Home() {
    const [chartData,setChartData] = useState({})
    
    return (
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
    );
}

export default Home;
