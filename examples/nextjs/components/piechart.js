"use client"

import React from "react";
import ReactECharts from "echarts-for-react";

const PieChart = () => {
    const [option, setOption] = React.useState(null);

    React.useEffect(() => {
        const pieChartOptions = {
            tooltip: {
              trigger: 'item'
            },
            legend: {
              top: '5%',
              left: 'center'
            },
            series: [
              {
                name: 'Access From',
                type: 'pie',
                radius: ['40%', '70%'],
                avoidLabelOverlap: false,
                itemStyle: {
                  borderRadius: 10,
                  borderColor: '#fff',
                  borderWidth: 2
                },
                label: {
                  show: false,
                  position: 'center'
                },
                emphasis: {
                  label: {
                    show: true,
                    fontSize: 40,
                    fontWeight: 'bold'
                  }
                },
                labelLine: {
                  show: false
                },
                data: [
                  { value: 300, name: 'StableCoins' },
                  { value: 735, name: 'ERC20' },
                  { value: 200, name: 'NFTs' }
                ]
              }
            ]
          };

        setOption(pieChartOptions);
    
    }, []);

    return (
        <div>
            {option && <ReactECharts option={option} />}
        </div>
    )
    
}

export default PieChart