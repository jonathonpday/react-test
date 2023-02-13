import { useEffect, useState } from 'react'
import { Link } from "react-router-dom";
import './HomePage.css'

const HomePage = () => {
  const [issues, setIssues] = useState([]);

  useEffect(() => {
    fetch("/test.json")
    .then(res => res.json())
    .then(data => setIssues(data.data))
    .catch(err => console.log(err))
  }, []);

  if (!issues.length) return <p>Loading...</p>;

  return (
    <div className='cards'>
      {
        issues.map((issue, index) => {
          return (
            <h5 key={index} className ='card'>
              <Link to={`issue/${issue.uuid}`} className='link'>{issue.name}</Link>
            </h5>
          );
        })
      }
    </div>
  );
}

export default HomePage;