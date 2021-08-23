import React, { useState, useEffect} from 'react'
import Person from './Person'

const People = () => {
  const [people, setPeople] = useState([])
  
  const fetchPeople = () => {
    fetch('https://randomuser.me/api/?results=9')
    .then(res => res.json())
    .then(data => setPeople(data.results))
  }
  
  useEffect(() => {
    fetchPeople()
  }, [])
  

  const mapPeople = () => {
    return people.map((p,i) => <Person person = {p} key = {i} />)
  }
  
  
  return (
    <div>
      {mapPeople()}
    </div>
  )
}

export default People