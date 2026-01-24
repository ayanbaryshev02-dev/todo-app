import AddTaskForm from "./AddTaskForm"

const AddTaskButton = ({isModalOpen, setIsModalOpen}) =>{
    return(
        <>
        <div>{isModalOpen && <AddTaskForm onClose={() => setIsModalOpen(false)} />}</div>
        <button onClick={() => setIsModalOpen(true)} 
        className='text-4xl font-medium bg-slate-800 rounded-full  text-white pb-2 px-3'>
            +
            </button>
            </>
    )
}
export default AddTaskButton