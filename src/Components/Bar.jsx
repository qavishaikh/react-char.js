import React from 'react'
import {Bar} from 'react-chartjs-2'
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend,
    BarElement,
} from 'chart.js';

ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend,
    BarElement,
)

export default function Barchart() {
    const dollars = {
        labels: ["2020","2021","2022","2023","2024"],
        datasets:[
            {
                label: "Doallars",
                data:[200,230,245,260,280],
                backgroundColor:"pink",
                borderColor:"black",
                borderWidth:5,
            }
        ]

    }
    const Pound = {
        labels: ["2020","2021","2022","2023","2024"],
        datasets:[
            {
                label: "Pound",
                data:[310,320,340,354,353],
                backgroundColor:"green",
                borderColor:"yellow",
                borderWidth:5,
            }
        ]

    }
  return (
    <div className='container'>
    <div className="row">
        <div className="col col-lg-6">
        <h1>Bar Chart Dollars</h1>
        <Bar data={dollars} height={200} />
        </div>

        <div className="col col-lg-6">
        <h1>Bar Chart Pound</h1>
        <Bar data={Pound} height={200} />
        </div>
    </div>
</div>
  )
}
