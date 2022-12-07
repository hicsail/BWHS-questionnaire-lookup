const ResultTable = ({ results }) => {    
  return (
    results.length > 0 ? (
      <table 
        style={{'width':'100%', 'marginTop': '30px'}} 
        className='table table-bordered table-striped table-hover'
      >
        <thead className='thead-light'>
          <tr>
            <th>Question #</th>
            <th>page</th>
          </tr>
        </thead>
        <tbody>
          {results.map((val, index) => {
            return (
              <tr key={index}>
                <td>{val.question}</td>
                <td>{val.page}</td>              
              </tr>
            )
          })}
        </tbody>
      </table>
      ) : (
      ''
    )           
  )    
}

export default ResultTable