import React from 'react'
import {PolarArea} from 'react-chartjs-2'
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend,
    ArcElement,
    RadialLinearScale,

} from 'chart.js';

ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend,
    ArcElement,
    RadialLinearScale,

)

function PolarChart() {
    const sirQavi = {
        labels:["Jan","Feb","March","April","May","June"],
        datasets:[
            {
            label:"StudentsQavi",
            data: [20,35,40,44,56,64],
            backgroundColor:["red","orange","black","blue","green"],
            borderColor:"Green"
        },
            {
            label:"StudentsWajahat",
            data: [40,33,26,20,14,34],
            backgroundColor:["lightgreen","orange","black","lightblue","green"],
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
            <PolarArea data={sirQavi} height={200} options={option}/>
            </div>

            <div className="col col-lg-6">
            <h1>Line ChartnSir Wajahat</h1>
            <PolarArea data={sirQavi} height={200} />
            </div>
        </div>
    </div>
  )
}

export default PolarChart
