import { useState } from 'react'
import './App.css'

function App() {
  

  return (
    <>
      <Navbar></Navbar>
      <Banner inProgressCount={inProgressCount} resolvedCount={resolvedCount}></Banner>
    </>
  )
}

export default App
