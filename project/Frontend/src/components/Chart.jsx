import React, { useEffect, useRef, useState } from 'react';
import * as echarts from 'echarts';

const Chart = () => {
    const chartRef = useRef(null);
    const [data, setData] = useState([
        { value: '', name: '', multiplier: '' }
    ]);

    useEffect(() => {
        const myChart = echarts.init(chartRef.current, 'dark');

        const option = {
            title: {
                text: 'My Stock PPT',
                left: 'center'
            },
            tooltip: {
                trigger: 'item',
                formatter: (params) => {
                    const { name, dataIndex } = params;
                    const valueFormatted = data[dataIndex].value.toLocaleString();
                    const multiplierFormatted = data[dataIndex].multiplier.toLocaleString();
                    const product = (data[dataIndex].value * data[dataIndex].multiplier || 0).toLocaleString();
                    return `${name}<br/>가격(원): ${valueFormatted}<br/>개수: ${multiplierFormatted}<br/>금액(원): ${product} (${params.percent.toFixed(2)}%)`;
                }
            },

            legend: {
                bottom: 10,
                left: 'center',
                data: data.map(item => item.name)
            },
            series: [
                {
                    type: 'pie',
                    radius: '65%',
                    center: ['50%', '50%'],
                    selectedMode: 'single',
                    data: data.map(item => ({
                        value: item.value * item.multiplier || 0,
                        name: item.name
                    })),
                    emphasis: {
                        itemStyle: {
                            shadowBlur: 10,
                            shadowOffsetX: 0,
                            shadowColor: 'rgba(0, 0, 0, 0.5)'
                        }
                    }
                }
            ]
        };

        myChart.setOption(option);

        return () => {
            myChart.dispose();
        };
    }, [data]);

    const handleChangeValue = (event, index) => {
        const newData = [...data];
        newData[index].value = parseFloat(event.target.value.replace(/,/g, ''));
        setData(newData);
    };

    const handleChangeMultiplier = (event, index) => {
        const newData = [...data];
        newData[index].multiplier = parseFloat(event.target.value.replace(/,/g, ''));
        setData(newData);
    };

    const handleChangeName = (event, index) => {
        const newData = [...data];
        newData[index].name = event.target.value;
        setData(newData);
    };

    const handleAddEntry = () => {
        const newData = [...data, { value: '', name: '', multiplier: '' }];
        setData(newData);
    };

    const handleRemoveEntry = (index) => {
        const newData = [...data];
        newData.splice(index, 1);
        setData(newData);
    };

    return (
        <div>
            <div ref={chartRef} style={{ height: '400px', width: '100%' }}></div>
            {data.map((entry, index) => (
                <div key={index}>
                    <label>
                        <input type="text" value={entry.name} onChange={(e) => handleChangeName(e, index)} placeholder='이름' />
                    </label>
                    <label>
                        <input type="text" value={entry.value.toLocaleString()} onChange={(e) => handleChangeValue(e, index)} placeholder='가격(원)' />
                    </label>
                    <label>
                        <input type="text" value={entry.multiplier.toLocaleString()} onChange={(e) => handleChangeMultiplier(e, index)} placeholder='개수' />
                    </label>
                    {index === data.length - 1 && (
                        <button onClick={handleAddEntry}>+</button>
                    )}
                    {data.length > 1 && (
                        <button onClick={() => handleRemoveEntry(index)}>-</button>
                    )}
                </div>
            ))}
        </div>
    );
};

export default Chart;
