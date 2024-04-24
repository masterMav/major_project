const ListProblems = ({ list }) => {
  // Table row will redirect to problemLink by this function
  const gotoProblemLink = (problemLink) => {
    window.open(problemLink, "_blank");
  };

  return (
    <table className="table table-striped">
      <thead>
        <tr>
          <th scope="col">#</th>
          <th scope="col">Problem Name</th>
          <th scope="col">Problem Rating</th>
          <th scope="col">Tag</th>
        </tr>
      </thead>

      <tbody>
        {list.map((problem) => (
          <tr onClick={() => gotoProblemLink(problem.link)}>
            <th scope="row">{problem.id}</th>
            <td>{problem.name}</td>
            <td>{problem.rating}</td>
            <td>{problem.tag}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default ListProblems;
