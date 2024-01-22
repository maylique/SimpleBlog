import { Link, useParams } from "react-router-dom";
import blogData from "../assets/main";

const BlogDetail = () => {


    const idParam = useParams()

    const sucheBlog = blogData.filter((blog) => {
        return (
            blog.id === Number(idParam.id)
        )
    })

    return ( 
        <>
        <div>
            <img src={blogData[0].img_url} alt="" />
            <h2>{blogData[0].title}</h2>
            <p>{blogData[0].description}</p>
            <p>{blogData[0].published_date}</p>
            <p>{blogData[0].author}</p>
            <Link to='/Blog'>Back to articles</Link>
        </div>
        </>
     );
}
 
export default BlogDetail;