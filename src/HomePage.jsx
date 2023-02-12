import { useEffect, useState } from 'react'
import { Link } from "react-router-dom";
import axios  from 'axios'

const HomePage = () => {
  const [issues, setIssues] = useState([]);

  useEffect(() => {
    axios.get("./test.json")
    .then(res => setIssues(res.data.data))
    .catch(err => console.log(err))
  }, []);

  if (!issues.length) return <p>Loading...</p>;

  return (
    <>
      {
        issues.map((issue, index) => {
          return (
            <h5 key={index}>
              <Link to={`issue/${issue.uuid}`}>{issue.name}'s Page</Link>
            </h5>
          );
        })
      }
    </>
  );
}

export default HomePage;