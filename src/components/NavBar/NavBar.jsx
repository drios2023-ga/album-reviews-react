import { Link } from "react-router-dom";
import "./NavBar.css";

export default function NavBar() {

  return (
    <header>
      <div className="nav-contents">
        <h1>Album Reviews</h1>
        <nav>
          <Link to="/" >Review List</Link>
          &nbsp;
          |
          &nbsp;
          <Link to="/new" >New Review</Link>
        </nav>
      </div>
    </header>
  );
}