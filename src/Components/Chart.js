// components/BarChart.js
import {BarChart} from "./BarChart";
import Container from "react-bootstrap/Container";
import {barChartData} from "../SampleData";
import {Bar} from "react-chartjs-2";

import { Chart, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from 'chart.js';
import {Col, Row} from "react-bootstrap";
import {useState} from "react";

Chart.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

// Now you can create a chart
function ChartComponent({chartData}) {

    return (
            <Container>
                <Bar data={chartData}></Bar>
            </Container>
    );
}

export default ChartComponent;