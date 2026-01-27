import TaskItemMenu from "./TaskItemMenu"

const ItemList = ({toggleTaskComplete, filteredTasks, isMenuItemOpen, setIsMenuItemOpen, openMenuId, moveTaskToTrash, activeTab}) =>{
    return(
      <>
    
           <div className='itemList mt-8 ml-4'>
      <ul className=''>
           {filteredTasks.map((task)=>(
        <li key={task.id} id={task.id} className="relative flex items-center mb-2">
        <button 
        onClick={() => openMenuId(task.id)}
       
        className='text-gray-400 font-bold'>⋮</button>
          {isMenuItemOpen === task.id && <TaskItemMenu 
        onClose={() => setIsMenuItemOpen(null)} 
        moveTaskToTrash={moveTaskToTrash}
        taskId={task.id}
        activeTab={activeTab}
        />}
       <div className='ml-3 '>
        <input onChange={(event)=> toggleTaskComplete(task.id, event.target.checked)} type="checkbox" checked={task.isDone}/>
        <span className={`ml-3 font-medium ${task.isDone ? 'line-through text-gray-400': ''}`}>{task.title}</span>
          </div>
        </li>
           ))}
      </ul>
      </div>
        
         
       </>
    )
}
export default ItemList