import React from 'react'
import {Pie} from 'react-chartjs-2'
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
    ArcElement,
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
    ArcElement,
)

export default function Piechart() {
    const courses = {
        labels: ["CCO","MWA","GD","VE","CCNA"],
        datasets:[
            {
                label: "Students in Course",
                data:[50,30,35,25,15],
                backgroundColor:["yellow","orange","blue","green","brown"],
                borderColor:"blue",
                borderWidth:5,
            }
        ]

    }
    const Votes = {
        labels: ["PTI","PPP","MQM","JI","TLP"],
        datasets:[
            {
                label: "Party Votes",
                data:[1800,200,1500,1320,500],
                backgroundColor:["green","black","red","skyblue","lightgreen"],
                borderColor:"yellow",
                borderWidth:5,
            }
        ]

    }
  return (
    <div className='container'>
    <div className="row">
        <div className="col col-lg-6">
        <h1>Students in Different Courses</h1>
        <Pie data={courses} height={200} />
        </div>

        <div className="col col-lg-6">
        <h1>Votes of Different Parties</h1>
        <Pie data={Votes} height={200} />
        </div>
    </div>
</div>
  )
}
