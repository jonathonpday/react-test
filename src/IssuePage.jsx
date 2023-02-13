import { useEffect, useState } from 'react'
import { Link, useParams } from "react-router-dom";
import axios  from 'axios'
import './IssuePage.css'

const IssuePage = ({match}) => {
  const { issueId } = useParams();
  const [issue, setIssue] = useState({});

  useEffect(() => {
    axios.get('/public/test.json')
    .then((res) => setIssue(res.data.data.find((issue) => issue.uuid === issueId)))
    .catch(err => console.log(err))
  }, [issueId]);

  return (
    <>
      {
        <>
        <ul>
          <li><strong>Name:</strong> {issue.name}</li>
          <li><strong>Severity:</strong> {issue.severity}</li>
          <li><strong>Category:</strong> {issue.category}</li>
          <li><strong>Description:</strong> {issue.description}</li>
          <li><strong>Remediation:</strong> {issue.remediation}</li>
          <li><strong>Exploit Available:</strong> {issue.exploit_available}</li>
          <li><strong>CVSS Score:</strong> {issue.cvss_score}</li>
          <li><strong>CVSS3 Score:</strong> {issue.cvss3_score}</li>
          <li className='initial'>
            <strong>CVES:</strong>
            {issue.cves && (
              <ul>
                {issue.cves.map((cve, index) => (
                  <li key={index} className='second'>{cve}</li>
                ))}
              </ul>
            )}
          </li>
          <li className='initial'>
            <strong>External Links:</strong>
            {issue.external_links && (
              <ul>
                {Object.values(issue.external_links).map((value, index) => (
                  <li key={index} className='second'>
                    <em>URL:</em> <a href={value.url} target="_blank">{value.url}</a>
                    <br />
                    <em>Title:</em> {value.title}
                  </li>
                ))}
              </ul>
            )}
          </li>
          <li><strong>Nessus Plugin family:</strong> {issue.nessus_plugin_id}</li>
          <li><strong>Created at:</strong> {issue.created_at}</li>
          <li><strong>Updated at:</strong> {issue.updated_at}</li>
          <li><strong>Deleted at:</strong> {issue.deleted_at}</li>
          <li className='initial'>
            <strong>Additional Affected Assest Fields:</strong>
            {issue.additional_affected_asset_fields && (
              <ul>
                {issue.additional_affected_asset_fields.map((assets, index) => (
                  <li key={index} className='second'>{assets}</li>
                ))}
              </ul>
            )}
          </li>
          <li><strong>Record To Remove:</strong> {issue.record_to_remove}</li>
        </ul>
          <div className='linkContainer'>
            <Link to="/" className='homepageLink'>Dashboard</Link>
         </div> 
        </>
      }
    </>
  );
};

export default IssuePage;