import { Link } from "react-router-dom";

const Nav = () => {
    return ( 
        <>
        <nav>
            <Link to='/'>Home</Link>
            <Link to='/Blog'>Blog</Link>
        </nav>
        </>
     );
}
 
export default Nav;