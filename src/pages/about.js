import React from "react"
import { Link } from 'gatsby'

export default () => (
  <div>
    <Link to="/" style={{
      textDecoration: 'none'
    }}>
      <h1>Welcome to Freecodecamp Ibadan Meetup</h1>
    </Link>
    <h1>About</h1>
    <p>The freeCodeCamp Ibadan Meetup is a gathering where beginners, intermediate, and advanced JavaScript developers meet to know one another, discuss the challenges faced and get information on the latest news and changes about JavaScript and JavaScript frameworks. <br /> It comes up every month on a Saturday at designated location but currently holds at the Edulight Consulting office, 1st floor, Leventis Building, Lebanon Street Dugbe, Ibadan, Nigeria.</p>
    <p> &copy; All right Reserved. Made with Love by the Ibadan Campers</p>
  </div>
)
