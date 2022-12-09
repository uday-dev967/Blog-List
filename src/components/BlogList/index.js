import './index.css'
import BlogItem from '../BlogItem'

const BlogList = props => {
  const {blogsList} = props
  return (
    <ul className="blogList">
      {blogsList.map(each => (
        <BlogItem blogitemDetails={each} key={each.id} />
      ))}
    </ul>
  )
}

export default BlogList
