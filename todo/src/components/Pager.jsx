import AddTaskButton from "./AddTaskButton"

const Pager = ({isModalOpen, setIsModalOpen, addNewTask, newTaskTitle, setNewTaskTitle, activeTab, setActiveTab}) =>{
    return(
        <div className='flex justify-between mt-15 '>
        <div className=''>
       <button onClick={()=> setActiveTab('ToDo')} className= {activeTab === "ToDo" ? 'ml-8 bg-gray-400 rounded-full p-2 px-6 font-medium text-white' :'ml-8 bg-gray-200 rounded-full p-2 px-6 font-medium text-black'}>To Do</button>
       <button onClick={()=> setActiveTab('Done')} className= {activeTab === "Done" ? 'ml-8 bg-gray-400 rounded-full p-2 px-6 font-medium text-white' :'ml-8 bg-gray-200 rounded-full p-2 px-6 font-medium text-black'}>Done</button>
        <button className='ml-8 bg-gray-200  rounded-full p-2 px-6 font-medium'>Trash</button>
        </div>
        <AddTaskButton isModalOpen={isModalOpen}
        setIsModalOpen={setIsModalOpen}
        addNewTask={addNewTask}
        newTaskTitle={newTaskTitle}
        setNewTaskTitle={setNewTaskTitle}/>
     </div>
    )
}
export default Pager