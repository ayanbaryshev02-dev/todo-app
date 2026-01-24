const AddTaskForm = () =>{
    return(
        <div className="flex absolute right-30 top-15 bg-gray-200 p-4 rounded shadow-lg ">
        <div className="flex">
            <form className="w-50">
            <h1 className="font-medium mb-3">Add New To Do</h1>
            <input className="bg-white h-30 rounded pl-3 resize-none pb-20" placeholder="Your text" type="text" />
            <button className="bg-gray-700 text-white rounded-3xl h-10 w-15 flex-end mt-3">Add</button>
            </form>
        </div>
        </div>
    )
}
export default AddTaskForm