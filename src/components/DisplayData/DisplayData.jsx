import React from 'react';
import { Bar } from 'react-chartjs-2';
import {useSelector, useDispatch} from 'react-redux'

const state = {
    labels: ['Flowy', 'Technical', 'Downhill',
        'Climbing', 'Overall', ],
    datasets: [
        {
            label: 'Styles',
            backgroundColor: 'green',
            hoverBackgroundColor: '#40dd4d',
            hoverBorderColor: 'green',
            borderColor: 'rgba(0,0,0,1)',
            borderWidth: 0,
            borderRadius: 10,
            data: [5, 9, 8, 5, 9]
        },
    ]
}


export default (props) => {

    
        console.log(props.data)
        return (
            <div>
                <Bar 
                    data={state}
                    options={{
                        gridLines: {
                            color: 'rgba(0,0,0,0)',
                            display: false,
                            xAxis: 10
                        },
                        title: {
                            display: true,
                            text: 'Average Rainfall per month',
                            fontSize: 20
                        },
                        legend: {
                            display: true,
                            position: 'right',
                            labels: {
                                boxWidth: 80,
                                fontColor: 'black'
                            }
                        }
                    }}
                />
            </div>
        );

    
}