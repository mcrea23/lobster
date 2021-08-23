import React from 'react'
import People from './components/People'
import { Person } from './components/Person'
// import { useState } from 'react'


function App() {
  // const [show, setShow] = useState(false);

  // const closeModal = () => setShow(false);
  
  return (
    <div>
      <Person />
      <People />
    </div>
  )
}
export default App