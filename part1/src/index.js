import React from 'react'
import ReactDOM from 'react-dom'

const Header = (props) => {
  return (
    <h1>{props.course}</h1>
  )
}

const Content = (props) => {
  console.log(props)
  return (
    <div>
    <p>{props.parts[0].part1} {props.parts[0].exercises0}</p>
    <p>{props.parts[1].part2} {props.parts[1].exercises1}</p>
    <p>{props.parts[2].part3} {props.parts[2].exercises2}</p>  
    </div>
    )
}
 
const Total = (props) => {
  
  return (
    <p>Number of exercises  {props.parts[0].exercises0 +props.parts[1].exercises1 + props.parts[2].exercises2}</p>
    )
}

const App = () => {
  const course = 'Half Stack application development'
  const parts =  [
    {
      part1 : 'Fundamentals of React',
      exercises0 : 10
    },
    {  
      part2 : 'Using props to pass data',
      exercises1 : 7
    },
    { 
      part3 : 'State of a component',
      exercises2 : 14
    }

  ]
  

  return (
    <div>
      <Header course={course} />

      <Content parts = {parts} />

      <Total parts ={parts} />
      
      
   
    </div>
  )
}

ReactDOM.render(<App />, document.getElementById('root'))