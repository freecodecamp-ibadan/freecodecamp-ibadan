import React from "react"
import { Link } from 'gatsby'
import styled from 'styled-components'

const Center = styled.div`
  height: 70vh;
  margin: 0 300px;
  padding: 20px;
  text-align: center;
  background-color: #ffffff;
  color: #222222;
  &:before {
    content: '';
    background-color: #006400;
    width: 100px;
    position: absolute;
    height: 70vh;
    right: 210px;
    top: 80px;
  }
  &:after {
    background-color: #006400;
    content: '';
    width: 100px;
    position: absolute;
    height: 70vh;
    left: 210px;
    top: 80px;
  }
  p {
    font-size: 4em;
  }
  a {
    text-decoration: none;
  }
`;

export default () => (
  <div>
  <Link to="/">
    <h1>Welcome to Freecodecamp Ibadan Meetup</h1>
  </Link>
    <Center>
      <p>Site under construction</p><br />
      <Link to="/about">
        Go to the About Page For More Details
      </Link>
    </Center>
    <p> &copy; All right Reserved. Made with <span role="img" aria-label="heart emoji">💖</span> by the Ibadan Campers</p>
  </div>
)
