const Pager = () =>{
    return(
        <div className='flex justify-between mt-15 '>
        <div className=''>
       <button className='ml-8 bg-gray-400 rounded-full p-2 px-6 font-medium text-white'>To Do</button>
       <button className='ml-8 bg-gray-200 rounded-full p-2 px-6 font-medium'>Done</button>
        <button className='ml-8 bg-gray-200  rounded-full p-2 px-6 font-medium'>Trash</button>
        </div>
        <button className='text-4xl font-medium bg-slate-800 rounded-full  text-white pb-2 px-3'>+</button>
     </div>
    )
}
export default Pager