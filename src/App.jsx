import { useEffect, useState } from 'react'
import axios  from 'axios'

function App() {
  const [data, setData] = useState([])
  useEffect(() => {
    axios.get("./test.json")
    .then(res => setData(res.data.data))
    .catch(err => console.log(err))
  }, []);


  
  return (
    <ul>
    {data.map(instance => <li>{instance.uuid}</li>)}  
    </ul> 
  )
}

export default App
