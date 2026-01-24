import { useState } from 'react'
import './App.css'
import Header from './components/Header'


function App() {


  return (
    <>
    <div className='min-h-screen flex flex-col mt-10 ml-5 mr-12'>
    
    <Header />
  
      <div className='flex justify-between mt-15 '>
        <div className=''>
       <button className='ml-8 bg-gray-400 rounded-full p-2 px-6 font-medium text-white'>To Do</button>
       <button className='ml-8 bg-gray-200 rounded-full p-2 px-6 font-medium'>Done</button>
        <button className='ml-8 bg-gray-200  rounded-full p-2 px-6 font-medium'>Trash</button>
        </div>
        <button className='text-4xl font-medium bg-slate-800 rounded-full  text-white pb-2 px-3'>+</button>
     </div>

      <div className='ml-8 mt-8 '>
        <h2 className='font-bold text-2xl'>To Do</h2>
        <div  className='border-b-2 border-gray-300 pb-5'></div>
      </div>

      <div className='itemList mt-8 ml-4'>
      <ul className=''>
           
            <li className="flex items-center mb-2">
                 <button className='text-gray-400 font-bold'>⋮</button>
       <div className='ml-3 '>
        <input className='' type="checkbox" />
        <span className='ml-3 font-medium'>Write Essay</span>
          </div>
        </li>

            <li className="flex items-center">
                 <button className='text-gray-400 font-bold'>⋮</button>
       <div className='ml-3'>
        <input className='' type="checkbox" />
        <span className='ml-3 font-medium'>Go to gym</span>
          </div>
        </li>
      
      </ul>
      </div>


     <footer className='flex justify-between mt-auto'>

    <p className='ml-8 '>Made with ❤️ at nFactorial in 2022.</p>
    <p className='mr-8'><a href='#'/>Credits: icons from Icons8.</p>

     </footer>
      </div>
    </>
  )
}

export default App
