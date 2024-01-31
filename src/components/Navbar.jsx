import logo from "../../public/img/argentBankLogo.png";
import { NavLink } from "react-router-dom";

export const Navbar = () => {
  return (
    <nav className="main-nav">
      <NavLink className="main-nav-logo" to={"/"}>
        <img
          className="main-nav-logo-image"
          src={logo}
          alt="Argent Bank Logo"
        />
        <h1 className="sr-only">Argent Bank</h1>
      </NavLink>
      <div>
        <NavLink
          className="main-nav-item"
          activeClassName="active"
          to={"/login"}
        >
          <i className="fa fa-user-circle"></i> Sign In
        </NavLink>
      </div>
      {/* <div>
        <a class="main-nav-item" href="./user.html">
          <i class="fa fa-user-circle"></i>
          Tony
        </a>
        <a class="main-nav-item" href="./index.html">
          <i class="fa fa-sign-out"></i>
          Sign Out
        </a>
      </div> */}
    </nav>
  );
};
