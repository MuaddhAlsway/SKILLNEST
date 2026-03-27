import './Navbar.css'
import { useState } from 'react';
import { FiMenu, FiX } from 'react-icons/fi';
import { useNavigate } from 'react-router-dom';

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const navigate = useNavigate();

  return (
    <nav className="navbar">
      <div className="logo">
        <h1>SKILLNEST</h1>
      </div>

      <ul className={`navbarContainer ${menuOpen ? 'mobile-active' : ''}`}>
        <li><a href="/">Home</a></li>
        <li><a href="/about">AboutUs</a></li>
        <li><a href="/services">Services</a></li>
        <li><a href="/categories">Categories</a></li>
        <li><a href="/contact">ContactUS</a></li>
      </ul>

      <div className="authButtons">
        <button className="loginBtn" onClick={() => navigate('/login')}>
          Login
        </button>
        <button className="signupBtn" onClick={() => navigate('/signup')}>
          Sign Up
        </button>
      </div>

      <div className="menuIcons" onClick={() => setMenuOpen(!menuOpen)}>
        {menuOpen ? <FiX size={28} /> : <FiMenu size={28} />}
      </div>
    </nav>
  );
};

export default Navbar;
