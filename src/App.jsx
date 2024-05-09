import React from 'react'
import Sidebar from './components/Sidebar'
import HomePage from './components/HomePage'
import Column from './components/Column'

const App = () => {
  return (
    <div className='flex bg-[#252836]  rounded-lg container mx-auto'>
     <div> <Sidebar/></div>
     <div><HomePage/></div>
     <div><Column/></div>
     
    </div>
  )
}

export default App