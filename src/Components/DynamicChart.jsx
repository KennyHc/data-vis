import React, { useState, useEffect, useRef } from 'react';
import Chart from 'chart.js/auto';
import '../bootstrap.min.css'
import Container from "react-bootstrap/Container";
import {Button} from "react-bootstrap";

function DynamicChart({chartConfig}) {
    const chartRef = useRef(null);
    const [chartInstance, setChartInstance] = useState(null);

    useEffect(() => {
        if (chartInstance) {
            chartInstance.destroy();
        }

        const ctx = chartRef.current.getContext('2d');
        const newChartInstance = new Chart(ctx, chartConfig);

        setChartInstance(newChartInstance);

        return () => {
            if (newChartInstance) {
                newChartInstance.destroy();
            }
        };
    }, [chartConfig]);



    return (
        <Container>
            <canvas ref={chartRef}></canvas>
        </Container>
    );
}

export default DynamicChart;