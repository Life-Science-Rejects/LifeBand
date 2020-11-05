import React, { Component } from 'react'
import { Nav, NavItem, NavLink } from 'reactstrap'

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
        <div id="footer">
          <Nav>
            <NavItem>
              <a href="/devteam">Learn About The Devs</a>
            </NavItem>
            <NavItem>
              <a href="/faq">FAQ</a>
            </NavItem>

            {logged_in &&
              <NavItem>
                <a href={sign_out_route}>Sign Out</a>
              </NavItem>
            }
            {!logged_in &&
              <>
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

export default Footer
