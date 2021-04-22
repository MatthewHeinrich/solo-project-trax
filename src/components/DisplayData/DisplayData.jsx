import React from 'react';
import { Bar } from 'react-chartjs-2';
import {useSelector, useDispatch} from 'react-redux'

const state = {
    labels: ['Flowy', 'Technical', 'Downhill',
        'Climbing', 'Overall', ],
    datasets: [
        {
            label: 'Styles',
            backgroundColor: 'rgba(75,192,192,1)',
            borderColor: 'rgba(0,0,0,1)',
            borderWidth: 2,
            data: [65, 59, 80, 81, 56]
        }
    ]
}


export default (props) => {

    
        console.log(props.data)
        return (
            <div>
                <Bar
                    data={state}
                    options={{
                        title: {
                            display: true,
                            text: 'Average Rainfall per month',
                            fontSize: 20
                        },
                        legend: {
                            display: true,
                            position: 'right'
                        }
                    }}
                />
            </div>
        );

    
}