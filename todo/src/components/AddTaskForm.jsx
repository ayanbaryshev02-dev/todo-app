const AddTaskForm = ({addNewTask, newTaskTitle, setNewTaskTitle}) =>{
    return(
        <div className="flex absolute right-30 top-15 bg-[#E4E6E7] p-4 rounded shadow-lg ">
        <div className="flex">
            <form className="w-60">
            <h1 className="font-medium mb-3">Add New To Do</h1>
            <input 
            className="bg-white h-30 w-60 rounded pl-3 resize-none pb-20" 
            placeholder="Your text" type="text" 
            value={newTaskTitle}
            onInput={(event) => setNewTaskTitle(event.target.value)}/>
            <button onClick={addNewTask} type="submit" className="bg-[#081E34] text-white rounded-3xl h-10 w-20 flex-end mt-3">Add</button>
            </form>
        </div>
        </div>
    )
}
export default AddTaskForm