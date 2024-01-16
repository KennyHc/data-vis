import './bootstrap.min.css';
import ChartComponent from "./Components/Chart";
import {Col, Row} from "react-bootstrap";
import Container from "react-bootstrap/Container";
import './App.css'
import InputBox from "./Components/InputBox";
import {useState} from "react";
import DynamicChart from "./Components/DynamicChart";

function Home() {

    const [chartConfig, setChartConfig] = useState(getInitialChartConfig());

    return (
        <Container fluid className="centered-content">
            {/*<Row className="centered-row">*/}
            {/*    <Col>*/}
            {/*        <ChartComponent chartData={chartData}></ChartComponent>*/}
            {/*    </Col>*/}
            {/*</Row>*/}

            <Row className="centered-row">>
                <Col>
                    <DynamicChart chartConfig={chartConfig}/>
                </Col>
            </Row>
            <Row className="centered-row">
                <Col>
                    <InputBox chartConfig={chartConfig} setChartConfig={setChartConfig}></InputBox>
                </Col>
            </Row>
        </Container>
    );
}

function getInitialChartConfig() {
    return {
        type: 'bar',
        data: {
            labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
            datasets: [{
                label: '# of Votes',
                data: [12, 19, 3, 5, 2, 3],
                backgroundColor: [
                    'rgba(255, 99, 132, 0.2)',
                    'rgba(54, 162, 235, 0.2)',
                    'rgba(255, 206, 86, 0.2)',
                    'rgba(75, 192, 192, 0.2)',
                    'rgba(153, 102, 255, 0.2)',
                    'rgba(255, 159, 64, 0.2)'
                ],
                borderColor: [
                    'rgba(255, 99, 132, 1)',
                    'rgba(54, 162, 235, 1)',
                    'rgba(255, 206, 86, 1)',
                    'rgba(75, 192, 192, 1)',
                    'rgba(153, 102, 255, 1)',
                    'rgba(255, 159, 64, 1)'
                ],
                borderWidth: 1
            }]
        },
        options: {
            scales: {
                y: {
                    beginAtZero: true
                }
            }
        }
    }
}

// function getInitialChartConfig() {
//
//     console.log((JSON.parse("{\"type\":\"line\",\"data\":{\"labels\":[\"Red\",\"Blue\",\"Yellow\",\"Green\",\"Purple\",\"Orange\"],\"datasets\":[{\"label\":\"# of Votes\",\"data\":[12,19,3,5,2,3],\"backgroundColor\":[\"rgba(255, 99, 132, 0.2)\",\"rgba(54, 162, 235, 0.2)\",\"rgba(255, 206, 86, 0.2)\",\"rgba(75, 192, 192, 0.2)\",\"rgba(153, 102, 255, 0.2)\",\"rgba(255, 159, 64, 0.2)\"],\"borderColor\":[\"rgba(255, 99, 132, 1)\",\"rgba(54, 162, 235, 1)\",\"rgba(255, 206, 86, 1)\",\"rgba(75, 192, 192, 1)\",\"rgba(153, 102, 255, 1)\",\"rgba(255, 159, 64, 1)\"],\"borderWidth\":1}]},\"options\":{\"scales\":{\"y\":{\"axis\":\"y\",\"beginAtZero\":true,\"type\":\"linear\",\"ticks\":{\"minRotation\":0,\"maxRotation\":50,\"mirror\":false,\"textStrokeWidth\":0,\"textStrokeColor\":\"\",\"padding\":3,\"display\":true,\"autoSkip\":true,\"autoSkipPadding\":3,\"labelOffset\":0,\"minor\":{},\"major\":{},\"align\":\"center\",\"crossAlign\":\"near\",\"showLabelBackdrop\":false,\"backdropColor\":\"rgba(255, 255, 255, 0.75)\",\"backdropPadding\":2,\"color\":\"#666\"},\"display\":true,\"offset\":false,\"reverse\":false,\"bounds\":\"ticks\",\"clip\":true,\"grace\":0,\"grid\":{\"display\":true,\"lineWidth\":1,\"drawOnChartArea\":true,\"drawTicks\":true,\"tickLength\":8,\"offset\":false,\"color\":\"rgba(0,0,0,0.1)\"},\"border\":{\"display\":true,\"dash\":[],\"dashOffset\":0,\"width\":1,\"color\":\"rgba(0,0,0,0.1)\"},\"title\":{\"display\":false,\"text\":\"\",\"padding\":{\"top\":4,\"bottom\":4},\"color\":\"#666\"},\"id\":\"y\",\"position\":\"left\"},\"x\":{\"axis\":\"x\",\"type\":\"category\",\"offset\":true,\"grid\":{\"offset\":true,\"display\":true,\"lineWidth\":1,\"drawOnChartArea\":true,\"drawTicks\":true,\"tickLength\":8,\"color\":\"rgba(0,0,0,0.1)\"},\"ticks\":{\"minRotation\":0,\"maxRotation\":50,\"mirror\":false,\"textStrokeWidth\":0,\"textStrokeColor\":\"\",\"padding\":3,\"display\":true,\"autoSkip\":true,\"autoSkipPadding\":3,\"labelOffset\":0,\"minor\":{},\"major\":{},\"align\":\"center\",\"crossAlign\":\"near\",\"showLabelBackdrop\":false,\"backdropColor\":\"rgba(255, 255, 255, 0.75)\",\"backdropPadding\":2,\"color\":\"#666\"},\"display\":true,\"reverse\":false,\"beginAtZero\":false,\"bounds\":\"ticks\",\"clip\":true,\"grace\":0,\"border\":{\"display\":true,\"dash\":[],\"dashOffset\":0,\"width\":1,\"color\":\"rgba(0,0,0,0.1)\"},\"title\":{\"display\":false,\"text\":\"\",\"padding\":{\"top\":4,\"bottom\":4},\"color\":\"#666\"},\"id\":\"x\",\"position\":\"bottom\"}},\"plugins\":{}}}")))
//
//     return {"type":"line","data":{"labels":["Red","Blue","Yellow","Green","Purple","Orange"],"datasets":[{"label":"# of Votes","data":[12,19,3,5,2,3],"backgroundColor":["rgba(255, 99, 132, 0.2)","rgba(54, 162, 235, 0.2)","rgba(255, 206, 86, 0.2)","rgba(75, 192, 192, 0.2)","rgba(153, 102, 255, 0.2)","rgba(255, 159, 64, 0.2)"],"borderColor":["rgba(255, 99, 132, 1)","rgba(54, 162, 235, 1)","rgba(255, 206, 86, 1)","rgba(75, 192, 192, 1)","rgba(153, 102, 255, 1)","rgba(255, 159, 64, 1)"],"borderWidth":1}]},"options":{"scales":{"y":{"axis":"y","beginAtZero":true,"type":"linear","ticks":{"minRotation":0,"maxRotation":50,"mirror":false,"textStrokeWidth":0,"textStrokeColor":"","padding":3,"display":true,"autoSkip":true,"autoSkipPadding":3,"labelOffset":0,"minor":{},"major":{},"align":"center","crossAlign":"near","showLabelBackdrop":false,"backdropColor":"rgba(255, 255, 255, 0.75)","backdropPadding":2,"color":"#666"},"display":true,"offset":false,"reverse":false,"bounds":"ticks","clip":true,"grace":0,"grid":{"display":true,"lineWidth":1,"drawOnChartArea":true,"drawTicks":true,"tickLength":8,"offset":false,"color":"rgba(0,0,0,0.1)"},"border":{"display":true,"dash":[],"dashOffset":0,"width":1,"color":"rgba(0,0,0,0.1)"},"title":{"display":false,"text":"","padding":{"top":4,"bottom":4},"color":"#666"},"id":"y","position":"left"},"x":{"axis":"x","type":"category","offset":true,"grid":{"offset":true,"display":true,"lineWidth":1,"drawOnChartArea":true,"drawTicks":true,"tickLength":8,"color":"rgba(0,0,0,0.1)"},"ticks":{"minRotation":0,"maxRotation":50,"mirror":false,"textStrokeWidth":0,"textStrokeColor":"","padding":3,"display":true,"autoSkip":true,"autoSkipPadding":3,"labelOffset":0,"minor":{},"major":{},"align":"center","crossAlign":"near","showLabelBackdrop":false,"backdropColor":"rgba(255, 255, 255, 0.75)","backdropPadding":2,"color":"#666"},"display":true,"reverse":false,"beginAtZero":false,"bounds":"ticks","clip":true,"grace":0,"border":{"display":true,"dash":[],"dashOffset":0,"width":1,"color":"rgba(0,0,0,0.1)"},"title":{"display":false,"text":"","padding":{"top":4,"bottom":4},"color":"#666"},"id":"x","position":"bottom"}},"plugins":{}}}
// }

export default Home;





// const data = {
//     labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
//     datasets: [{
//         label: 'My First Dataset',
//         data: [65, 59, 80, 81, 56, 55, 40],
//         backgroundColor: [
//             'rgba(255, 99, 132, 0.2)',
//             'rgba(255, 159, 64, 0.2)',
//             'rgba(255, 205, 86, 0.2)',
//             'rgba(75, 192, 192, 0.2)',
//             'rgba(54, 162, 235, 0.2)',
//             'rgba(153, 102, 255, 0.2)',
//             'rgba(201, 203, 207, 0.2)'
//         ],
//         borderColor: [
//             'rgb(255, 99, 132)',
//             'rgb(255, 159, 64)',
//             'rgb(255, 205, 86)',
//             'rgb(75, 192, 192)',
//             'rgb(54, 162, 235)',
//             'rgb(153, 102, 255)',
//             'rgb(201, 203, 207)'
//         ],
//         borderWidth: 1,
//         borderRadius: 3,
//     }]
// };

// const config = {
//     type: 'bar',
//     data: data,
//     options: {
//         scales: {
//             y: {
//                 beginAtZero: true
//             }
//         }
//     },
// };