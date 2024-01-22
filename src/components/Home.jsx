import { Link } from "react-router-dom";
import Nav from "./Nav";

const Home = () => {
    return ( 
        <>
        <Nav />
        <h1>hallo</h1>
        <Link to='/Blog'>to Blogs</Link>
        </>
     );
}
 
export default Home;