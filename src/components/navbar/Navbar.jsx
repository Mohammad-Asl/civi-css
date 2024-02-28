import logo from '../../assets/logo.png';
import "./Navbar.css"

const Navbar = () => {
  return (
    <nav className="nav">
      <div className="nav-left">
        <img src={logo} className="logo" />
        <ul className="nav-list">
          <li>Home</li>
          <li>Find jobs</li>
          <li>Companies</li>
          <li>Candidates</li>
          <li>Pages</li>
          <li>Blogs</li>
        </ul>
      </div>
      <div className="nav-right">
        <p className="nav-login">Login</p>
        <button className="nav-btn">+Post a job</button>
      </div>
    </nav>
  );
};

export default Navbar;
