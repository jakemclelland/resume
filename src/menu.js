import React, { useState } from 'react';

export default function Menu() {

  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  }

  return (
    <div className={`menu ${menuOpen ? 'show-menu' : ''}`}>
      <button className="hamburger" onClick={toggleMenu}>
        <span className={`line ${menuOpen ? 'line1-rotated' : 'line1'}`}></span>
        <span className={`line ${menuOpen ? 'line2-rotated' : 'line2'}`}></span>
        <span className={`line ${menuOpen ? 'line3-rotated' : 'line3'}`}></span>
        <span className={`menu-text ${menuOpen ? 'hide-menu-text' : ''}`}>Menu</span>
      </button>
      <ul>
        <li key={1}>
          <a href="#about-me">About Me</a>
        </li>
        <li key={2}>
          <a href="#experiences">Experience</a>
        </li>
        <li key={3}>
          <a href="#certifications">Certifications</a>
        </li>
        <li key={4}>
          <a href="#skills">Skills</a>
        </li>
        <li key={5}>
          <a href="#other-skills">Other Skills</a>
        </li>
      </ul>
    </div>
  );
}
