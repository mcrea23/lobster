import React, { useState, useEffect} from 'react'
import People from './People'



const App = () => {

  const [people, setPeople] = useState([])

  const fetchPeople = () => {
    fetch('https://randomuser.me/api/?results=9')
    .then(res => res.json())
    .then(data => setPeople(data.results))
  }

  useEffect(() => {
    fetchPeople()
  }, [])

  console.log(people)

  return (
    <div>
      <People people={people}/>
    </div>
  )
}

export default App