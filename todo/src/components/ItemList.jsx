import DONE_SVG from "./images/done.svg";
import TaskItemMenu from "./TaskItemMenu"


const ItemList = ({
  toggleTaskComplete, 
  filteredTasks, 
  isMenuItemOpen, 
  setIsMenuItemOpen, 
  openMenuId, 
  moveTaskToTrash, 
  activeTab, 
  deleteTask,
  moveTaskToToDo,
  selectTask,
  setSelectTask}) =>{

    const itemsPerColumn = 9
    const columns = []

    for(let i = 0; i < filteredTasks.length; i += itemsPerColumn){
      columns.push(filteredTasks.slice(i, i + itemsPerColumn))
    }

    return(
      <>
      <div onClick={()=> setSelectTask(null)}> 
      <div className='itemList mt-8 ml-2'>
        <div className="grid grid-cols-3 gap-8">
          {columns.map((column, columnIndex)=>(
          
      <ul key={columnIndex}>
           {column.map((task)=>(
        <li key={task.id} 
        id={task.id} 
        className={`relative flex items-center mb-2 p-2 ${selectTask === task.id ? 'bg-gray-200' : ''}`}
        onClick={(e)=> {
          e.stopPropagation()
          setSelectTask(task.id)
        }}
        >
        <button 
        onClick={(e) => {
          e.stopPropagation();
          openMenuId(task.id);}}
        
        className='text-gray-400 font-bold cursor-pointer'>⋮</button>
          {isMenuItemOpen === task.id && <TaskItemMenu 
        onClose={() => setIsMenuItemOpen(null)} 
        moveTaskToTrash={moveTaskToTrash}
        taskId={task.id}
        activeTab={activeTab}
        deleteTask={deleteTask}
        moveTaskToToDo={moveTaskToToDo}
        />}
       <div className='ml-3 '>
       <div className="relative inline-flex items-center top-0.5">
        <input 
          type="checkbox" 
          className="appearance-none w-4 h-4 bg-gray border-2 border-[#AEAEAE] rounded checked:bg-[#712FFF] checked:border-none cursor-pointer"
          onChange={(event)=> toggleTaskComplete(task.id, event.target.checked)} 
          checked={task.isDone}
          id={`checkbox-${task.id}`}
        />
        {task.isDone && (
          <img 
            src={DONE_SVG} 
            alt="done" 
            className="absolute w-2.5 h-2.5 pointer-events-none left-1"
          />
        )}
      </div>
        <span className={`ml-3 font-medium ${task.isDone ? 'line-through text-gray-400': ''}`}>{task.title}</span>
          </div>
        </li>
           ))}
      </ul>
          ))}
      </div>
      </div>
      </div>
       </>
    )
}
export default ItemList