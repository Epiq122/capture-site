import React from 'react';
import styled from 'styled-components';

const NavBar = () => {
  return (
    <Nav>
      <a id='logo' href='#'>
        Capture
      </a>
      <ul>
        <li>
          <a href='#'>1. About Us</a>
        </li>
        <li>
          <a href='#'>2. Our Work</a>
        </li>
        <li>
          <a href='#'>3. Contact Us</a>
        </li>
      </ul>
    </Nav>
  );
};

const Nav = styled.div`
  min-height: 10vh;
  display: flex;
  margin: auto;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 10rem;
  background: #282828;
  a {
    color: white;
    text-decoration: none;
  }
  ul {
    display: flex;
    list-style: none;
  }
  #logo {
    font-family: 1.5rem;
    font-family: 'Lobster', cursive;
    font-weight: 'lighter';
  }
  li {
    padding-left: 10rem;
    position: relative;
  }
`;

export default NavBar;
