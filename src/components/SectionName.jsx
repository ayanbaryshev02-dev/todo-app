const SectionName = ({activeTab}) =>{
  const titles = { 
    ToDo: 'To Do',
    Done: 'Done',
    Trash: 'Trash',
  }

  const title = titles[activeTab] || ''

    return(
              <div className='ml-8 mt-8 '>
        <h2 className='font-bold text-2xl'>{title}</h2>
        <div  className='border-b-2 border-gray-300 pb-5'></div>
      </div>
    )
}
export default SectionName