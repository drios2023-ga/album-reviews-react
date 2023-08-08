import { Link } from "react-router-dom";

export default function NavBar() {

  return (
    <header>
      <h1>Album Reviews</h1>
      <nav>
        <Link to="/" >Review List</Link>
        &nbsp;
        |
        &nbsp;
        <Link to="/new" >New Review</Link>
      </nav>
    </header>
  );
}