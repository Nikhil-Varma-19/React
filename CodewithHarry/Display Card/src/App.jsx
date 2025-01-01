
import { useState } from 'react'
import './App.css'
import { useEffect } from 'react'
import Navbar from './Navbar'

function App() {
 const [card, setcard] = useState([])

 const fechData= async ()=>{
      let a = await fetch("https://jsonplaceholder.typicode.com/posts")
      let data = await a.json()
      setcard(data)
      console.log(data)
 }
 useEffect(() => {
  fechData()
 }, [])

  return (
    <>
    <Navbar/>
     <div className="container">
      {card.map((card)=>{
        return <div key={card.id}className="card">
           <span>{card.userId}</span>
          <h1>{card.title}</h1>
          <p>{card.body}</p>
         
        </div>

      })}
      
     </div>
    </>
  )
}

export default App
