const TableInfo = ({results}) => {  
  
  return results.length > 0 ? (
    <p style={{'margin-top': '30px'}}>
     Showing {results.length} result{results.length > 1 ? 's' : ''} 
    </p>
  ) : (
   ''
  )   
}

export default TableInfo