import { TRASH_SVG, MOVE_SVG } from './images';
import { useEffect, useRef} from 'react'

const TaskItemMenu = ({moveTaskToTrash, taskId, onClose})=>{

    const taskMenuRef = useRef(null)

    const handleClick = (event) => {
      if(taskMenuRef.current && !taskMenuRef.current.contains(event.target))
      onClose()
    }

    useEffect(()=>{
      document.addEventListener('mousedown', handleClick)
    },[])


    return(
    <div 
    className="absolute right-auto top-full mt-2 z-50 bg-gray-200 shadow-lg rounded-xl w-56 py-2 font-medium"
    ref={taskMenuRef}>
      <ul>
        
        <li>
          <button 
          className="flex items-center gap-3 px-2 py-1 w-full text-left hover:bg-gray-300 text-gray-900 text-sm"
          onClick={()=>{moveTaskToTrash(taskId);
               onClose()
          }}
          >
            
              {TRASH_SVG}
            <span>Move to Trash</span>
          </button>
        </li>
        <li>
          <button className="flex items-center gap-3 px-2 py-1 w-full text-left hover:bg-gray-300 text-gray-900 text-sm">
            {TRASH_SVG}
            <span>Delete Forever</span>
          </button>
        </li>
        <li>
          <button className="flex items-center gap-3 px-2 py-1 w-full text-left hover:bg-gray-300 text-gray-900 text-sm">
            {MOVE_SVG}
            <span>Move Back To To Do</span>
          </button>
        </li>
      </ul>
    </div>
  );
}
export default TaskItemMenu