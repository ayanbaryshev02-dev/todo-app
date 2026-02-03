import AddTaskButton from "./AddTaskButton"

const Pager = ({isModalOpen, setIsModalOpen, addNewTask, newTaskTitle, setNewTaskTitle, activeTab, setActiveTab, setSelectTask}) =>{

    const handleTabChange = (tab) => {
    setActiveTab(tab)
    setSelectTask(null)
}
    return(
        <div className='flex justify-between mt-15 '>
        <div className=''>
       <button onClick={()=> handleTabChange('ToDo')} 
       className= {activeTab === "ToDo" 
       ? 'ml-8 bg-gray-400 rounded-full p-2 px-6 font-medium text-white' 
       : 'ml-8 bg-gray-200 rounded-full p-2 px-6 font-medium text-black'}>To Do</button>

       <button onClick={()=> handleTabChange('Done')} 
       className= {activeTab === "Done" 
       ? 'ml-8 bg-gray-400 rounded-full p-2 px-6 font-medium text-white' 
       : 'ml-8 bg-gray-200 rounded-full p-2 px-6 font-medium text-black'}>Done</button>

        <button onClick={()=> handleTabChange('Trash')} 
        className= {activeTab === "Trash" 
        ? 'ml-8 bg-gray-400 rounded-full p-2 px-6 font-medium text-white' 
        :'ml-8 bg-gray-200 rounded-full p-2 px-6 font-medium text-black'}>Trash</button>
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