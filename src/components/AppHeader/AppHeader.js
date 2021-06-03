import { Link } from "react-router-dom";
import "./AppHeader.css";

const Header = () => {
  return (
    <div className="header">
      <Link to="/" className="title">
        ReactJS Quiz
      </Link>
    </div>
  );
};

export default Header;
