import { useEffect, useState } from 'react'
import { Link } from "react-router-dom";
import axios  from 'axios'
import './HomePage.css'

const HomePage = () => {
  const [issues, setIssues] = useState([]);

  useEffect(() => {
    axios.get("/react-test/test.json")
    .then(res => setIssues(res.data.data))
    .catch(err => console.log(err))
  }, []);

  if (!issues.length) return <p>Loading...</p>;

  const groupByCategory = issues.reduce((group, issue) => {
    const { severity } = issue;
    group[severity] = group[severity] ?? [];
    group[severity].push(issue);
    return group;
  }, {});
  
  let critical = groupByCategory.CRITICAL.map(severity => severity);
  let high = groupByCategory.HIGH.map(severity => severity);
  let medium = groupByCategory.MEDIUM.map(severity => severity);
  let low = groupByCategory.LOW.map(severity => severity);
  let info = groupByCategory.INFO.map(severity => severity);

  let sorted = critical.concat(high, medium, low, info);

  return (
    <div className='cards'>
      {
        sorted.map((issue, index) => {
          return (
            <h5 key={index} className ='card'>
              <Link to={`issue/${issue.uuid}`} className='link'>{issue.name} - {issue.severity}</Link>
            </h5>
          );
        })
      }
    </div>
  );
}

export default HomePage;