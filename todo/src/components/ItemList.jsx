const ItemList = ({tasks, isDoneClick}) =>{
    return(

        <div className='itemList mt-8 ml-4'>
      <ul className=''>
           {tasks.map((task)=>(
        <li id={task.id} className="flex items-center mb-2">
        <button className='text-gray-400 font-bold'>⋮</button>
       <div className='ml-3 '>
        <input onChange={isDoneClick} className='' type="checkbox" checked={task.isChecked}/>
        <span className='ml-3 font-medium'>{task.title}</span>
          </div>
        </li>
           ))}
      </ul>
      </div>
    )
}
export default ItemList