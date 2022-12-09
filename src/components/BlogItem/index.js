import './index.css'

const BlogItem = props => {
  const {blogitemDetails} = props
  const {id, title, description, publishedDate} = blogitemDetails
  return (
    <li className="list-item">
      <div className="role-container">
        <h1 className="title-role">{title}</h1>
        <p className="date">{publishedDate}</p>
      </div>
      <p className="description">{description}</p>
      <hr />
    </li>
  )
}

export default BlogItem
