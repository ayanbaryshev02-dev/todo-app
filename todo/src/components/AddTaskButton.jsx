import AddTaskForm from "./AddTaskForm"

const AddTaskButton = ({isModalOpen, setIsModalOpen, addNewTask, newTaskTitle, setNewTaskTitle}) =>{
    return(
        <>
        <div>{isModalOpen && <AddTaskForm 
        addNewTask={addNewTask} 
        newTaskTitle={newTaskTitle}
        setNewTaskTitle={setNewTaskTitle}
        onClose={() => setIsModalOpen(false)} />}
        </div>

        <button 
        onClick={() => setIsModalOpen(true)} 
        className='text-4xl font-medium bg-slate-800 rounded-full  text-white pb-2 px-3'
        type="submit">
            +
            </button>
            </>
    )
}
export default AddTaskButton