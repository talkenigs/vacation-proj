import React, { useEffect, useState } from 'react'
import { Bar } from 'react-chartjs-2';
import { Chart as ChartJS } from 'chart.js/auto'
import axios from 'axios';

function Charts() {
const [chartData, setData] = useState()
const [labels, setLabels] = useState()

// const getLabels = () => {
//     chartData.map((bar) => console.log(bar.title))
// }

    useEffect(() => {
        axios.get("/getChart")
        .then((res) => res.data.data)
        .then((res) => {
            setLabels(res.map((vac) => vac.title))
            setData(res.map((vac) => vac.follows))
        })
    }, [])

    return (
        <div>     
            <Bar
            height={100}
            data={{
                labels: labels  ,
                datasets: [{
                    label: '# of Followers',
                    data: chartData,
                    backgroundColor: [
                        'rgba(255, 99, 132, 0.2)',
                        'rgba(54, 162, 235, 0.2)',
                        'rgba(255, 206, 86, 0.2)',
                        'rgba(75, 192, 192, 0.2)'],
                        borderColor: [
                            'rgba(255, 99, 132, 1)',
                            'rgba(54, 162, 235, 1)',
                            'rgba(255, 206, 86, 1)',
                            'rgba(75, 192, 192, 1)' 
                        ],
                            borderWidth: 1
                        }]
                }
            }
            />
        </div>
    )
}

export default Charts
