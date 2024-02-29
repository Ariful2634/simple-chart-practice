
import { Cell, Legend, Pie, PieChart, Tooltip } from 'recharts'
import './App.css'
import { useEffect, useState } from 'react';

function App() {

  const [todo,setTodo]=useState([])

useEffect(()=>{
  fetch('https://jsonplaceholder.typicode.com/todos')
  .then(res=>res.json())
  .then(data=>setTodo(data))
},[])


const completedTodo = todo.filter(to=>to.completed===true)
console.log(completedTodo.length)
const inCompletedTodo = todo.filter(to=>to.completed===false)
console.log(inCompletedTodo.length)

  const data01 = [
    { name: 'Completed', value: completedTodo.length,color: '#ff0000' },
    { name: 'Incompleted', value: inCompletedTodo.length,color: '#00ff00' },
    
  ];

  // const data02 = [
  //   { name: 'Group A', value: 2400 },
  //   { name: 'Group B', value: 4567 },
  //   { name: 'Group C', value: 1398 },
  //   { name: 'Group D', value: 9800 },
  //   { name: 'Group E', value: 3908 },
  //   { name: 'Group F', value: 4800 },
  // ];


  return (
    <>
      <div>
        <h2>Chart</h2>
        {/* <ResponsiveContainer width="100%" height="100%"> */}
        <PieChart width={400} height={400}>
          <Pie
            dataKey="value"
            isAnimationActive={false}
            data={data01}
            cx="50%"
            cy="50%"
            outerRadius={80}
            fill="#8884d8"
            label
          >
          {/* <Pie dataKey="value" data={data02} cx={500} cy={200} innerRadius={40} outerRadius={80} fill="#82ca9d" /> */}
          {data01.map((entry, index) => (
            <Cell key={`cell-${index}`} fill={entry.color} />
          ))}
          </Pie>
          <Tooltip />
          <Legend/>
        </PieChart>
      {/* </ResponsiveContainer> */}
      </div>
    </>
  )
}

export default App
