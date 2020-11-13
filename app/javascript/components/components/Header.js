import React, { Component } from 'react'
import { Nav, NavItem } from 'reactstrap'

class Header extends Component {
  render() {
      const{
        logged_in,
        sign_in_route,
        sign_up_route,
        sign_out_route
      } = this.props
    return (
      <>
        <div>
          <Nav className="header">
            <NavItem>
              <a href="/">Home</a>
            </NavItem>
            { logged_in &&
              <>
                <NavItem>
                  <a href={`/myprofileindex`}>My Profile</a>
                </NavItem>
                <NavItem>
                  <a href={sign_out_route}>Sign Out</a>
                </NavItem>
              </>
            }
            { !logged_in &&
              <>
                <NavItem>
                  <a href="/learnmore">Learn More</a>
                </NavItem>
                <NavItem>
                  <a href={sign_in_route}>Sign In</a>
                </NavItem>
                <NavItem>
                  <a href={sign_up_route}>Sign Up</a>
                </NavItem>
              </>
            }
          </Nav>
        </div>
      </>
    )
  }
}

export default Header
