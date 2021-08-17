import React, { useState, useEffect} from 'react'
// import Hello from './Hello'


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
      {people && people.map(person => {
        <li> {person.name.first} </li>
      })}
    </div>
  )
}

export default App

 
