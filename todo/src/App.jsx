import { useEffect, useRef, useState } from 'react'
import './App.css'
import Header from './components/Header'
import Footer from './components/Footer'
import Pager from './components/Pager'
import SectionName from './components/SectionName'
import ItemList from './components/ItemList'


function App() {

  const [tasks, setTasks] = useState([
  {
    id: 'task-1',
    title: 'Go to run',
    isDone: false,
    isDeleted: false,
  },
  {
    id: 'task-2',
    title: 'Go to gym',
    isDone: false,
    isDeleted: false,
  },
])



const [newTaskTitle, setNewTaskTitle] = useState('')
const [isModalOpen, setIsModalOpen] = useState(false)
const [activeTab, setActiveTab] = useState('ToDo')
const [isMenuItemOpen, setIsMenuItemOpen] = useState(null)


 const openModalForm = () =>{
  setIsModalOpen(!isModalOpen)
 }

 const addNewTask = (taskId, title, isDone) =>{
  event.preventDefault()
  if(newTaskTitle.trim().length > 0){
    const newTask = {
      id: crypto?.randomUUID() ?? Date.now().toString(), 
      title: newTaskTitle,
      isDone: false,
      isDeleted: false,
    }
    setTasks([...tasks, newTask])
    setNewTaskTitle('')
  }
}

const filteredTasks = tasks.filter(task=>{
  if(activeTab === 'ToDo') return !task.isDone && !task.isDeleted
  if(activeTab === 'Done') return task.isDone && !task.isDeleted
  if(activeTab === 'Trash') return task.isDeleted 
  return true
}
)

const openMenuId = (taskId) =>{
  if(taskId === isMenuItemOpen){
  setIsMenuItemOpen(null)
  }else{
  setIsMenuItemOpen(taskId)
  }   

}

const moveTaskToTrash =(taskId) =>{
  setTasks(
    tasks.map((task)=>{
      if(task.id === taskId){
        return {...task, isDeleted: true}
      }
      return task
    })
  )
}

 const toggleTaskComplete = (taskId, isDone) =>{
  setTasks(
    tasks.map((task)=>{
      if(task.id === taskId){
        return {...task, isDone}
      }
      return task
    })
  )
  
 }

  return (
    <>
    <div className='min-h-screen flex flex-col mt-10 ml-5 mr-12'>
    <Header />
    <Pager  
    openModalForm={openModalForm}
    isModalOpen={isModalOpen}
    setIsModalOpen={setIsModalOpen}
    addNewTask={addNewTask}
    newTaskTitle={newTaskTitle}
    setNewTaskTitle={setNewTaskTitle}
    activeTab={activeTab}
    setActiveTab={setActiveTab}
   />
    <SectionName />
    <ItemList
    toggleTaskComplete={toggleTaskComplete}
    filteredTasks={filteredTasks}
    isMenuItemOpen={isMenuItemOpen}
    setIsMenuItemOpen={setIsMenuItemOpen}
    openMenuId={openMenuId}
    moveTaskToTrash={moveTaskToTrash}
    activeTab={activeTab}/>
    <Footer />
      </div>
    </>
  )
}

export default App
