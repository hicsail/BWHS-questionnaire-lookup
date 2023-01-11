const ResetBtn = ({resetCategories, resetTopics, updateResults, updateCategory, updateTopic, results}) => { 
  const onClick = () => {    	
    updateResults([])   
    updateTopic('')
    updateCategory('')
    resetCategories()
    resetTopics()
  }

  const display = results.length === 0 ? 'none' : 'block'
  return (
  	<button
  	  type="button"   	  
  	  className='btn btn-danger btn-sm text-white'
   	  style={{'marginTop': '30px', 'float': 'right', 'display': display}} 
  	  onClick={onClick}  	  
  	>
      Reset Search (options)      
    </button>
  )
}

export default ResetBtn