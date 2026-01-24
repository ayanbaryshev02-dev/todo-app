import { useState } from 'react'
import './App.css'
import Header from './components/Header'
import Footer from './components/Footer'
import Pager from './components/Pager'
import SectionName from './components/SectionName'
import ItemList from './components/ItemList'


function App() {

  const tasks = [
  {
    id: 'task-1',
    title: 'Go to run',
    isDone: false,
  },
  {
    id: 'task-2',
    title: 'Go to gym',
    isDone: true,
  },
]

 const [isModalOpen, setIsModalOpen] = useState(false)

 const openModalForm = () =>{
  setIsModalOpen(!isModalOpen)
 }

 const toggleTaskComplete = (taskId, isDone) =>{
  console.log();
  
 }

  return (
    <>
    <div className='min-h-screen flex flex-col mt-10 ml-5 mr-12'>
    <Header />
    <Pager  
    openModalForm={openModalForm}
    isModalOpen={isModalOpen}
    setIsModalOpen={setIsModalOpen}/>
    <SectionName />
    <ItemList tasks={tasks}
    />
    <Footer />
      </div>
    </>
  )
}

export default App
