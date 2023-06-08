import { useState } from "react";
import { Link } from "react-router-dom";
import FoodLogo from "../assets/img/Foodvilla.jpg";
import useOnline from "../utils/useOnline";

const Title = () => {
  return <img src={FoodLogo} alt="image" className="logo" />;
};

const Header = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const isOnline = useOnline();
  return (
    <div className="header">
      <Title />
      <h1>Welcome to FoodVilla</h1>
      <div className="nav-items">
        <ul>
          <li>
            <Link to={"/"} className="link-text">
              Home
            </Link>
          </li>

          <li>
            <Link to={"/about"} className="link-text">
              About us
            </Link>
          </li>

          <li>
            <Link to={"/contact"} className="link-text">
              Contact
            </Link>
          </li>
          {/* <li>Cart</li> */}
        </ul>
      </div>
      <h1>{isOnline ? "online" : "offline"}</h1>

      {isLoggedIn ? (
        <button className="login-btn" onClick={() => setIsLoggedIn(false)}>
          Logout
        </button>
      ) : (
        <button className="login-btn" onClick={() => setIsLoggedIn(true)}>
          Login
        </button>
      )}
      {/* <h1>{status ? "online" : "offline"}</h1> */}
    </div>
  );
};
export default Header;
