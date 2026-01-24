const ItemList = () =>{
    return(
        <div className='itemList mt-8 ml-4'>
      <ul className=''>
           
            <li className="flex items-center mb-2">
                 <button className='text-gray-400 font-bold'>⋮</button>
       <div className='ml-3 '>
        <input className='' type="checkbox" />
        <span className='ml-3 font-medium'>Write Essay</span>
          </div>
        </li>

            <li className="flex items-center">
                 <button className='text-gray-400 font-bold'>⋮</button>
       <div className='ml-3'>
        <input className='' type="checkbox" />
        <span className='ml-3 font-medium'>Go to gym</span>
          </div>
        </li>
      
      </ul>
      </div>
    )
}
export default ItemList