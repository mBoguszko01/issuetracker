function IssueListItem({ issue, onClick }) {
  return (
    <div className="issue" onClick={onClick}>
      <p className="issue-id">{issue.id}</p>
      <p className="issue-title">{issue.title}</p>
    </div>
  );
}
export default IssueListItem;
