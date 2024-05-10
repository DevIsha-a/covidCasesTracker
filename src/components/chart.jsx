import React from "react";
import './chart.css'
import { Bar, } from "react-chartjs-2";
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend,
} from 'chart.js';
ChartJS.register(
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend
);

const Chart = ({ country, totalDeaths, totalCases, totalRecovered }) => {


    const data = {
        labels: ['Infected', 'Deaths', 'Recovered'],
        datasets: [
            {
                label: 'people',
                backgroundColor: ['blue', 'green', 'red'],
                data: [totalCases, totalRecovered, totalDeaths,]
            }
        ],
    }
    return <div>
        <Bar data={data} id='chart' />
    </div>
}
export default Chart;





