import {useState, useEffect} from 'react'
import CategoryDropdown from './components/CategoryDropdown'
import TopicDropdown from './components/TopicDropdown'
import ResultTable from './components/ResultTable'
import TableInfo from './components/TableInfo'
import ResetBtn from './components/ResetBtn'

function App() {
  const [data,setData]=useState({});
  const [categories,setCategories]=useState([]);
  const [category, setCategory] = useState('')
  const [topic, setTopic] = useState('')  
  const [topics, setTopics] = useState([])
  const [results, setResults] = useState([]) 

  const resetCategories = () => {
    let categories = [...Object.keys(data).map(elem => {return {'value': elem, 'label': elem}})]    
    setCategories(categories)    
  } 

  const resetTopics = () => {
    let topics = new Set([])
    for (const category in data) {
      for(const topic of Object.keys(data[category]))
        topics.add(topic)
    }            
    setTopics([...topics].map(elem => {return {'value': elem, 'label': elem}}))
  }

  const updateTopics = (category) => {     
    setTopics( 
      Object.keys(data[category]).map(elem => {return {'value': elem, 'label': elem}})
    )         
  }

  const updateCategories = (topic) => {    
    const categories = []
    for (const category in data) { //find categories that have thid topic 
      if (Object.keys(data[category]).includes(topic)) {
        categories.push(category)
      }  
    }         
    setCategories(categories.map(elem => {return {'value': elem, 'label': elem}}))
  }

  const updateResults = (category, topic) => {
    if (category && topic) {
      setResults(data[category][topic])   
    }
    else {
      setResults([])
    }                      
  }

  const updateTopic = (topic) => {  
    setTopic(topic)                      
  }

  const updateCategory = (category) => {    
    setCategory(category)
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
        const topics = new Set([])
        for (const category in data) {
          for(const topic of Object.keys(data[category]))
          topics.add(topic)
        }            
        setTopics([...topics].map(elem => {return {'value': elem, 'label': elem}}))
      })
  }, []);

  return (
    <div className='App'>
      <div className='container' style={{'marginTop':'50px'}}>        
        <div className='row'>
          <div className='col-md-2'></div>
          <div className='col-md-4'>
            <CategoryDropdown 
            topic={topic}
            category={category}
            updateCategory={updateCategory}
            updateTopics={updateTopics}
            updateResults={updateResults} 
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
              updateCategories={updateCategories}                           
            />  
          </div>
          <div className='col-md-2'></div>
        </div>              
        <div className='row'>
        <div className='col-md-2'></div>
        <div className='col-md-8'>
          <ResetBtn
            updateResults={updateResults}
            resetCategories={resetCategories}
            resetTopics={resetTopics}
            updateTopic={updateTopic}
            updateCategory={updateCategory}
            results={results}
          />
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