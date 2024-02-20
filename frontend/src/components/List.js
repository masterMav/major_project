const List = ({ list }) => {
  return (
    <table className="table table-striped">
      <thead>
        <tr>
          <th scope="col">#</th>
          <th scope="col">Blog title</th>
          <th scope="col">Author</th>
          <th scope="col">Author Ratings</th>
        </tr>
      </thead>

      <tbody>
        {list.map((blog) => (
          <tr className="blog-preview" key={blog.id}>
            <th scope="row">{blog.id}</th>
            <td>{blog.title}</td>
            <td>Written by {blog.authorName}</td>
            <td>{blog.authorRating}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default List;
