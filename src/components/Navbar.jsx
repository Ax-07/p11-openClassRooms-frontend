import logo from "/src/assets/img/argentBankLogo.png";
import { NavLink, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { logout } from "../app/authSlice";
import PropTypes from "prop-types";

export const Navbar = ({isConnected}) => {

  const dispatch = useDispatch();
  const navigation = useNavigate();
  const onLogout = () => {
    dispatch(logout())
    navigation("/");
  };

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
        {isConnected ? (
          <>
            <NavLink 
              className="main-nav-item"
              activeclassname="active"
              to={"/user"}
            >
              <i className="fa fa-user-circle"></i>{" Tony "}
              {/* {authState.user.firstName} */}
            </NavLink>
            <NavLink
              className="main-nav-item"
              activeclassname="active"
              to={"/"}
              onClick={onLogout}
            >
              <i className="fa fa-sign-out"></i>{" Sign Out "}
            </NavLink>
          </>
        ) : (
          <NavLink
            className="main-nav-item"
            activeclassname="active"
            to={"/login"}
          >
            <i className="fa fa-user-circle"></i>{" Sign In "}
          </NavLink>
        )}
      </div>
    </nav>
  );
};

Navbar.propTypes = {
  isConnected: PropTypes.bool,
};
