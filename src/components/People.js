import React, { useState, useEffect} from 'react'
import { Person } from './Person'


export const People = () => {
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
  
  const mapPeople = () => {
    return people.map(p => <Person person = {p} />)
  }

  return (
    <div>
      {mapPeople()}
    </div>
  )
}

export default People