import {useState, useEffect} from 'react'
import CategoryDropdown from './components/CategoryDropdown'
import TopicDropdown from './components/TopicDropdown'
import ResultTable from './components/ResultTable'
import TableInfo from './components/TableInfo'

function App() {
  const [data,setData]=useState({});
  const [categories,setCategories]=useState([]);
  const [category, setCategory] = useState({'value': '', 'label': ''})
  const [topic, setTopic] = useState({'value': '', 'label': ''})  
  const [topics, setTopics] = useState([])
  const [results, setResults] = useState([]) 
  const [topicDisabled, setTopicDisabled] = useState(true)  

  const updateTopics = (category) => {       
    setTopics( 
      Object.keys(data[category]).map(elem => {return {'value': elem, 'label': elem}})
    )
    setCategory(category) 
    setTopic({'value': '', 'label': ''}) 
    setTopicDisabled(false)
    setResults([])      
  }

  const updateResults = (category, topic) => {     
    setResults(data[category][topic])                   
  }

  const updateTopic = (topic) => {     
    setTopic(topic)                   
  }

  useEffect(() => {
    fetch('./data/questionnaire.json'
    ,{
      headers : { 
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      }
    })
      .then(res => res.json())
      .then(data => {
        setData(data)
        setCategories(Object.keys(data).map(elem => {return {'value': elem, 'label': elem}}))
      })
  }, []);

  return (
    <div className='App'>
      <div className='container' style={{'marginTop':'50px'}}>
        <div className='row'>
          <div className='col-md-2'></div>
          <div className='col-md-4'>
            <CategoryDropdown 
            updateTopics={updateTopics}
            categories={categories}
          />
          </div>
          <div className='col-md-4'>
            <TopicDropdown 
              topics={topics}
              category={category}
              topic={topic}
              updateTopic={updateTopic}
              updateResults={updateResults}
              isDisabled={topicDisabled}              
            />  
          </div>
          <div className='col-md-2'></div>
        </div>              
        <div className='row'>
        <div className='col-md-2'></div>
        <div className='col-md-8'>
          <TableInfo
            results={results}
          />
          <ResultTable 
            results={results}
          />                    
        </div>
        <div className='col-md-2'></div>
        </div>
      </div>      
    </div>
  );
}

export default App;