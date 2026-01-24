const ItemList = ({tasks, toggleTaskComplete}) =>{
    return(

        <div className='itemList mt-8 ml-4'>
      <ul className=''>
           {tasks.map((task)=>(
        <li key={task.id} id={task.id} className="flex items-center mb-2">
        <button className='text-gray-400 font-bold'>⋮</button>
       <div className='ml-3 '>
        <input onChange={(event)=> toggleTaskComplete(task.id, event.target.checked)} type="checkbox" checked={task.isDone}/>
        <span className={`ml-3 font-medium ${task.isDone ? 'line-through text-gray-400': ''}`}>{task.title}</span>
          </div>
        </li>
           ))}
      </ul>
      </div>
    )
}
export default ItemList