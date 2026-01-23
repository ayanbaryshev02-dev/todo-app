import { useState } from 'react'
import './App.css'

function App() {


  return (
    <>
     <header>
      <h1>Simple To Do List</h1>
      <p>Today is awesome day. The weather is awesome, you are awesome too!</p>
     </header>
     
     <main>

      <div className='pager'>
      <button>To Do</button>
       <button>Done</button>
        <button>Trash</button>
        <button>+</button>
     </div>

      <div className='sectionName'>
        <h2>To Do</h2>
      </div>

      <div className='itemList'>
      <ul>
        <li>Write Essay</li>
         <li>One Hour CSS Course Online</li>
          <li>Go to Gym</li>
      </ul>
      </div>

     </main>
     <footer>

    <p>Made with ❤️ at nFactorial in 2022.</p>
    <p><a href='#'/>Credits: icons from Icons8.</p>

     </footer>
    </>
  )
}

export default App
