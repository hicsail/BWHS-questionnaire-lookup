import Select from 'react-select'

const CategoryDropdown = ({ updateTopics, categories }) => {
  const onChange = (option) => {    
    const category = option.value    
    updateTopics(category) 
  }

  return (
    <label style={{'width': '100%'}}>
      Select a general category
      <Select        
        options={categories}      
        onChange={onChange} 
      />
    </label>
  )            
}

export default CategoryDropdown