import { Link } from "react-router-dom";
import blogData from "../assets/main";

const Blog = () => {
    return ( 
        <>
        {blogData.map((el, index) => {
            return (
                <div key={index}>
                    <img src={el.img_url} alt="" />
                    <h2>{el.title}</h2>
                    <Link to={`/Blog/${el.id}`}>Read More</Link>
                </div>
            )
        })}
        </>
     );
}
 
export default Blog;