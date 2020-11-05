import React, { Component } from 'react'
import {
  BrowserRouter as Router, Route, Switch
} from 'react-router-dom'

import Header from './components/Header'
import Footer from './components/Footer'

import DevTeam from './pages/DevTeam'
import EmergencyContactsIndex from './components/EmergencyContactsIndex'
import Faq from './pages/Faq'
import Home from './pages/Home'
import LearnMore from './pages/LearnMore'
import NotFound from './pages/NotFound'
import MyEmergencyContactsEdit from './pages/MyEmergencyContactsEdit'
import MyEmergencyContactsIndex from './components/MyEmergencyContactsIndex'
import MyUserProfile from './pages/MyUserProfile'
import MyUserProfileEdit from './pages/MyUserProfileEdit'
import UserProfile from './pages/UserProfile'

import mockPersonalInfo from './mockPersonalInfo.js'
import mockEmergencyContact from './mockEmergencyContact.js'


class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      personalInfo: mockPersonalInfo,
      emergencyContact: mockEmergencyContact
    }
  }
  render() {
    const {
      logged_in,
      sign_in_route,
      sign_up_route,
      sign_out_route,
      current_user
    } = this.props
    return (
      <Router>
        <Header />

        <Switch>
          { /* Unprotected Routes */}

          { /*Home*/}
          <Route exact path="/" component={Home} />

          {/*Only Index We'll Have is Emergency Contact*/}

          { /*Show for Public Profile is difficult to code right now because we need to understand our routes better, so I'll Work on Emergency Contacts First*/}
          {/*<Route
            path="/profileindex/:id"
            render={(props) => <UserProfile personalInfo={this.state.personalInfo} />}
          />*/}

          {/*Not Found*/}
          <Route component={NotFound} />

          { /* Protected Routes */}
        </Switch>
        <Home />
        <LearnMore />
        <Route path="/devteam" component={DevTeam} />
        <Route path="/faq" component={Faq} />
        <h1> Hello World</h1>
        {logged_in &&
          <div>
            <a href={sign_out_route}>Sign Out</a>
          </div>
        }
        {!logged_in &&
          <div>
            <a href={sign_in_route}>Sign In</a>
          </div>
        }
        <Footer
          logged_in={logged_in}
          sign_in_route={sign_in_route}
          sign_up_route={sign_up_route}
          sign_out_route={sign_out_route}
        />
      </Router>
    )
  }
}

export default App
