import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <header>
      <div>
        <h1 className="logo">WestCoast Education</h1>
      </div>
      <nav className="navbar">
        <ul>
          <li>
            <Link to="/">Startsida</Link>
          </li>
          <li>
            <Link to="/courses">Kurser</Link>
          </li>
          <li>
            <Link to="/teachers">Lärare</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;
