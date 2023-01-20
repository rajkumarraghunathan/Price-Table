import React from 'react'
import Free from './Component/Free'
import Plus from './Component/Plus'
import Pro from './Component/Pro'
import './App.css'

const App = () => {
  return (
    
    <>
        <div className='container-fluid  '>
          <div className='mt-5 style'>
            <div className='holder'>
              <Free />
              <Plus />
              <Pro />
           </div>
          </div>
        </div>
    </>
  )
}

export default App