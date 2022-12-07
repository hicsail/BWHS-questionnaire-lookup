import Select from 'react-select'

const TopicDropdown = ({ topics, category, topic, updateResults, isDisabled, updateTopic}) => {  
  const onChange = (option) => {        
    updateResults(category, option.value) 
    updateTopic({'value': option.value, 'label': option.label})
  }
  
  return (
    <label style={{'width': '100%'}}>
      Select a topic 
      <Select        
        options={topics}      
        onChange={onChange}        
        value={topic}
        isDisabled={isDisabled ? true : false}              
      />
    </label>
  )    
}

export default TopicDropdown