import React from 'react'
import { Line } from 'react-chartjs-2';
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend,
} from 'chart.js';

ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend
);


function LineGraph() {

    const data = {
        labels: ['1D', '1W', '1M', '3M', '1Y'],
        datasets: [
            {
                label: 'Dataset 1',
                data: [65, 59, 80, 81, 56, 55, 40],
                borderColor: 'green',
                backgroundColor: 'black'

            }
        ]
    }

    const options = {
        reponsive: true,
        plugins: {
            title: {
                display: false
            },
            legend: {
                display: false
            }
        }
    }


    return (
        <Line
            data={data}
            options={options}
        />
    )
}

export default LineGraph