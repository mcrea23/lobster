import React, { useState, useEffect} from 'react'
import Person from './Person'
import Modal from './Modal'

const People = () => {
  const [people, setPeople] = useState([])
  const [show, setShow] = useState(false);
  const [current, setCurrent] =useState(null);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  
  const fetchPeople = () => {
    fetch('https://randomuser.me/api/?results=9')
    .then(res => res.json())
    .then(data => setPeople(data.results))
  }
  
  useEffect(() => {
    fetchPeople()
  }, [])
  
  const showPerson = (i) => {
    console.log("clickyyyy")
    setCurrent(i)
  }

  const mapPeople = () => {
    return people.map((p,i) => <Person person = {p} key = {i} index = {i} show = {showPerson} />)
  }
  
  
  return (
    <div>
      {mapPeople()}
      { show ? <Modal person = {people[current]} /> : null }
      <button onClick = {() => setShow(!show)}>SEAN </ button>
    </div>
  )
}

export default People