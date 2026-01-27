import AddTaskForm from "./AddTaskForm"

     

const AddTaskButton = ({isModalOpen, setIsModalOpen, addNewTask, newTaskTitle, setNewTaskTitle}) =>{

       const buttonText = isModalOpen ? '−' : '+'

    return(
        <>
        <div>{isModalOpen && <AddTaskForm 
        addNewTask={addNewTask} 
        newTaskTitle={newTaskTitle}
        setNewTaskTitle={setNewTaskTitle}
        onClose={() => setIsModalOpen(false)} />}
        </div>

        <button 
        onClick={()=> isModalOpen ? setIsModalOpen(false) : setIsModalOpen(true)}
        className='text-4xl font-medium bg-slate-800 rounded-full  text-white pb-2 px-3'
        type="submit">
            {buttonText}
            </button>
            </>
    )
}
export default AddTaskButton