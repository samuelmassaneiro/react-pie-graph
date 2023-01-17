import React, { useState } from 'react';
import { PieChart, Pie, Sector, Cell } from 'recharts';
import './PizzaGraph.css'

const data = [
    { name: 'Data 1', value: 100 },
    { name: 'Data 2', value: 200 },
];

const generateHexColor = () => {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}

const generateColorArray = (num) => {
    let colors = []
    for (let i = 0; i < num; i++) {
      colors.push(generateHexColor())
    }
    return colors;
  }

const PizzaGraph = () => {
    const [chartData, setChartData] = useState(data);

    const handleAddData = () => {
        const name = prompt('Entre com o nome do Dado');
        const value = parseInt(prompt('Entre com o Valor do Dado'));
        setChartData([...chartData, { name, value }])
    }

    const [color] = useState(generateColorArray(100))

    return (
        <div>
            <button onClick={handleAddData}>Add Data</button>
            <PieChart width={400} height={400} className="recharts-wrapper">
                <Pie data={chartData} cx={200} cy={200} outerRadius={80} fill="#8884d8" label>
                    {chartData.map((entry, index) => <Cell key={index} fill={color[index % color.length]}/>)}
                </Pie>
            </PieChart>
        </div>
    );
};

export default PizzaGraph;