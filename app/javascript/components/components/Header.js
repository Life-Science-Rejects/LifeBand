import React, { Component } from 'react'
import { Nav, NavItem } from 'reactstrap'

class Header extends Component {
  render() {
    return (
      <>
        <div id="header">
          <h3>This is the Header.</h3>
            <Nav>
              <NavItem>
                <a href="/">Home</a>
              </NavItem>
              <NavItem>
                <a href="/learnmore">Learn More</a>
              </NavItem>
              <NavItem>
                <a href="/usershow/1">[TEST: "/usershow/1"]</a>
              </NavItem>
              <NavItem>
                <a href="/usershow/2">[TEST: "/usershow/2"]</a>
              </NavItem>
            </Nav>
        </div>
      </>
    )
  }
}

export default Header
