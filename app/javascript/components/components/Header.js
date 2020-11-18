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
            <p className="app-name">Life<span>Band</span></p>
            <NavItem>
              <a className="footer-link" href="/">Home</a>
            </NavItem>
            <NavItem>
              <a className="footer-link" href="/usershow/1">Demo</a>
            </NavItem>
            { logged_in &&
              <>
                <NavItem>
                  <a className="footer-link" href={"/myprofileindex"}>My Profile</a>
                </NavItem>
                <NavItem>
                  <a className="footer-link" href={sign_out_route}>Sign Out</a>
                </NavItem>
              </>
            }
            { !logged_in &&
              <>
                <NavItem>
                  <a className="footer-link" href="/learnmore">Learn More</a>
                </NavItem>
                <NavItem>
                  <a className="footer-link" href={sign_in_route}>Sign In</a>
                </NavItem>
                <NavItem>
                  <a className="footer-link" href={sign_up_route}>Sign Up</a>
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
