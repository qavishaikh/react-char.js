import React from 'react'
import {Line} from 'react-chartjs-2'
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
    Legend,
)

function LineChart() {
    const sirQavi = {
        labels:["Jan","Feb","March","April","May"],
        datasets:[
            {
            label:"StudentsQavi",
            data: [20,35,40,44,56],
            backgroundColor:"red",
            borderColor:"Green"
        },
            {
            label:"StudentsWajahat",
            data: [40,33,26,20,14],
            backgroundColor:"pink",
            borderColor:"yellow"
        }
    ]
    }

    var option={
        indexAxis:"y"
    }
  return (
    <div className='container'>
        <div className="row">
            <div className="col col-lg-6">
            <h1>Line Chart Sir Qavi</h1>
            <Line data={sirQavi} height={200} options={option}/>
            </div>

            <div className="col col-lg-6">
            <h1>Line ChartnSir Wajahat</h1>
            <Line data={sirQavi} height={200} />
            </div>
        </div>
    </div>
  )
}

export default LineChart
