import React from 'react';
import { Bar } from 'react-chartjs-2';
import {useSelector, useDispatch} from 'react-redux'



export default (props) => {
    
    let details = props.data
    
        let i = 0;
        let flowAvg = 0
        let techAvg = 0
        let downAvg = 0
        let climbAvg = 0
        let overallAvg = 0
        for (i=0; i < details.length; i++) {
            console.log(details[i])
            flowAvg += details[i].flowy / details.length 
            techAvg += details[i].technical / details.length 
            downAvg += details[i].downhill / details.length 
            climbAvg += details[i].climbing / details.length 
            overallAvg += details[i].overall / details.length 
            console.log(flowAvg)
        }
        console.log(flowAvg)
        console.log(props.data)
        const state = {
            labels: ['Flowy', 'Technical', 'Downhill',
                'Climbing', 'Overall', ],
            datasets: [
                {
                    label: 'Styles',
                    backgroundColor: '#04ad04',
                    hoverBackgroundColor: '#40dd4d',
                    hoverBorderColor: 'green',
                    borderColor: 'rgba(0,0,0,1)',
                    borderWidth: 0,
                    borderRadius: 10,
                    data: [flowAvg, techAvg, downAvg, climbAvg, overallAvg]
                },
            ]
        }
        return (
            <div>
                {/* {averageFlow()} */}
                <Bar 
                    data={state}
                    options={{
                        gridLines: {
                            color: 'rgba(0,0,0,0)',
                            display: false,
                            xAxis: 10
                        
                        },
                        animation: {
                            duration: 2000,
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