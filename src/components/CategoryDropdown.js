import Select from 'react-select'

const CategoryDropdown = ({ topic, category, updateCategory, updateTopics, updateResults, categories }) => {
  const onChange = (option) => {    
    const category = option.value 
    updateCategory(category)     
    updateTopics(category)
    if (category && topic) {
      updateResults(category, topic)
    }
  }

  return (
    <label style={{'width': '100%'}}>
      Select a general category
      <Select        
        options={categories}      
        onChange={onChange}
        value={{'value': category, 'label': category}} 
      />
    </label>
  )            
}

export default CategoryDropdown