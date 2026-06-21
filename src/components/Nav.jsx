import { Link, NavLink } from "react-router-dom";
import { useAuth } from "../context/auth-context";

const Nav = () => {
  const { user, logout } = useAuth();

  const getNavLinkClassName = ({ isActive }) =>
    isActive ? "navbar-link navbar-link-active" : "navbar-link";

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <Link to="/" className="navbar-brand">
          ShopHub.
        </Link>
        <div className="navbar-links">
          <NavLink to="/" end className={getNavLinkClassName}>
            Home
          </NavLink>
          <NavLink to="/checkout" className={getNavLinkClassName}>
            Cart
          </NavLink>
        </div>

        <div className="navbar-auth">
          {!user ? (
            <div className="navbar-auth-links">
              <Link to="/auth" className="btn btn-secondary">
                Login
              </Link>
              <Link to="/auth" className="btn btn-primary">
                Signup
              </Link>
            </div>
          ) : (
            <div className="navbar-user">
              <span className="navbar-greeting">Hello, {user.email}</span>
              <button className="btn btn-secondary" onClick={logout}>
                Logout
              </button>
            </div>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Nav;
