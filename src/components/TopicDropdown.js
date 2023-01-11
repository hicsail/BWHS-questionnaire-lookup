import Select from 'react-select'

const TopicDropdown = ({ topics, category, topic, updateResults, updateTopic, updateCategories}) => {  
  const onChange = (option) => { 
    const topic = option.value    
    updateTopic(topic)    
    updateCategories(option.value)    
    if (category && topic) {      
      updateResults(category, topic) 
    }
  }
  
  return (
    <label style={{'width': '100%'}}>
      Select a topic 
      <Select        
        options={topics}      
        onChange={onChange}
        value={{'value': topic, 'label': topic}}                            
      />
    </label>
  )    
}

export default TopicDropdown