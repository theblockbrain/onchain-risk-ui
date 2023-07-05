"use client"

import React from "react";
import ReactECharts from "echarts-for-react";

const PieChart = () => {
    const [option, setOption] = React.useState(null);

    React.useEffect(() => {
        const pieChartOptions = {
            tooltip: {
              trigger: 'item',
              formatter: '{a} <br/>{b}: {c} ({d}%)'
            },
            legend: {
              data: [
                'NFTs',
                'Stables',
                'Coins',
                'Huxley Comics',
                'Huxley Robots',
                'Cryptoskulls',
                'Angry Dynomites',
                'Illuvium',
                'Ethereum'
              ],
              bottom: 0
            },
            series: [
              {
                name: 'Allocation',
                type: 'pie',
                selectedMode: 'single',
                radius: [0, '30%'],
                label: {
                  position: 'inner',
                  fontSize: 14
                },
                labelLine: {
                  show: false
                },
                data: [
                  { value: 1548, name: 'NFTs' },
                  { value: 775, name: 'Stables' },
                  { value: 679, name: 'Coins', selected: true }
                ]
              },
              {
                name: 'Allocation',
                type: 'pie',
                radius: ['45%', '60%'],
                labelLine: {
                  length: 30
                },
                label: {
                  formatter: '{a|{a}}{abg|}\n{hr|}\n  {b|{b}：}{c}  {per|{d}%}  ',
                  backgroundColor: '#F6F8FC',
                  borderColor: '#8C8D8E',
                  borderWidth: 1,
                  borderRadius: 4,
                  rich: {
                    a: {
                      color: '#6E7079',
                      lineHeight: 22,
                      align: 'center'
                    },
                    hr: {
                      borderColor: '#8C8D8E',
                      width: '100%',
                      borderWidth: 1,
                      height: 0
                    },
                    b: {
                      color: '#4C5058',
                      fontSize: 14,
                      fontWeight: 'bold',
                      lineHeight: 33
                    },
                    per: {
                      color: '#fff',
                      backgroundColor: '#4C5058',
                      padding: [3, 4],
                      borderRadius: 4
                    }
                  }
                },
                data: [
                  { value: 533, name: 'Huxley Comics' },
                  { value: 335, name: 'Huxley Robots' },
                  { value: 310, name: 'Cryptoskulls' },
                  { value: 251, name: 'Angry Dynomites' },
                  { value: 234, name: 'Illuvium' },
                  { value: 147, name: 'Ethereum' },
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