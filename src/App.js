import React from 'react'
import People from './components/People'
import { useState } from 'react'


const App = () => {
  const [show, setShow] = useState(false);

  const closeModal = () => setShow(false);
  
  return (
    <div>
      <People />
    </div>
  )
}
export default App