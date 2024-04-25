import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { useEffect } from 'react'
import axios from 'axios'

function App() {
  const [jokes, setJokes] = useState([])

  useEffect(() => {
    axios.get('/api/jokes')
    .then((response) => {
      setJokes(response.data)
    }).catch((error) => {
      console.log("Line no 17", error)
    })
  })

  return (
    <>
      <h1>A basic full stack app</h1>
      <p>Jokes: {jokes.length}</p>

      {
        jokes.map((joke, index) => (
          <div key={joke.id}>
            <h1>{joke.title}</h1>
            <p>{joke.description}</p>
          </div> 
        ))
      }
    </>
  )
}

export default App
