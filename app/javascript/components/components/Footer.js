import React, { Component } from 'react'
import { Nav, NavItem } from 'reactstrap'

class Footer extends Component {
  render() {
    const {
      logged_in,
      sign_in_route,
      sign_up_route,
      sign_out_route
    } = this.props
    return (
      <>
        <div>
          <Nav className="footer">
            {logged_in &&
              <div>
                <h6>Account</h6>
                  <NavItem>
                    <a className="header-link" href={sign_out_route}>Sign Out</a>
                  </NavItem>
              </div>
            }
            {!logged_in &&
              <>
                <div>
                  <h6>Account</h6>
                  <NavItem>
                    <a className="header-link" href={sign_in_route}>Sign In</a>
                  </NavItem>
                  <NavItem>
                    <a className="header-link" href={sign_up_route}>Sign Up</a>
                  </NavItem>
                </div>
              </>
            }
            <div>
              <h6>About Us</h6>
              <NavItem>
                <a className="header-link" href="/devteam">Meet The Devs</a>
              </NavItem>
            </div>
            <div>
              <h6>Support</h6>
              <NavItem>
                <a className="header-link" href="/faq">FAQ</a>
              </NavItem>
            </div>
          </Nav>
        </div>
      </>
    )
  }
}

export default Footer
