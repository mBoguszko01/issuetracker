
import { useState } from "react";
import IssueListItem from "../components/IssueListItem";
import { useNavigate } from "react-router";
function IssuesPage() {
  const [issues, setIssues] = useState([
    { id: "1", title: "Login button not working" },
    { id: "2", title: "Add loading state to list" },
  ]);
  const navigate = useNavigate();
  const issueClickHandler = (id) => {
    navigate(`${id}`)
  }

  return (
    <div className="wrapper">
      <div className="issues-container">
        {issues.map(issue => {
            return <IssueListItem key={issue.id} issue={issue} onClick={()=>{issueClickHandler(issue.id)}}/>
        })}
      </div>
    </div>
  );
}
export default IssuesPage;
