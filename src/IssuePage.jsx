import { useEffect, useState } from 'react'
import { Link, useParams } from "react-router-dom";
import axios  from 'axios'

const IssuePage = ({match}) => {
  const { issueId } = useParams();
  const [issue, setIssue] = useState({});

  useEffect(() => {
    axios.get('/test.json')
    .then((res) => setIssue(res.data.data.find((issue) => issue.uuid === issueId)))
    .catch(err => console.log(err))
  }, [issueId]);

  return (
    <>
      {
        <>
          <h1>Name: {issue.name}</h1>
          <Link to="/">Back to homepage</Link>
        </>
      }
    </>
  );
};

export default IssuePage;