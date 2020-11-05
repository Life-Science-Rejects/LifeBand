import React, { Component } from 'react'
import {
  BrowserRouter as Router, Route, Switch
} from 'react-router-dom'

import Header from './components/Header'
import Footer from './components/Footer'

import DevTeam from './pages/DevTeam'
import EmergencyContacts from './components/EmergencyContacts'
import Faq from './pages/Faq'
import Home from './pages/Home'
import LearnMore from './pages/LearnMore'
import NotFound from './pages/NotFound'
import EmergencyContactsEdit from './pages/EmergencyContactsEdit'
import UserProfileEdit from './pages/UserProfileEdit'
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

  updatePersonalInfo = (personalInfo, id) => {
    console.log("personal info:", personalInfo, "id:", id);
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
          {/* Unprotected Routes */}

          {/*Home*/}
          <Route exact path="/" component={Home} />

          {/*Of our pages, EmergencyContactsEdit is a form to edit
          UserProfile is a show page
          UserProfileEdit is a form to edit*/}

          {/*UserProfile, a public unprotected show page*/}
          <Route
            path="/usershow/:id"
            render={(props) => {
              let localid = props.match.params.id
              let userInfo = this.state.personalInfo.find(user => user.id === parseInt(localid))
              return (
                <UserProfile userInfo={userInfo} />
              )
            }}
          />

          {/*Not Found*/}
          <Route component={NotFound} />

          {/* Protected Routes */}
          <Home />
          <LearnMore />
          {/*UserProfile, the private protected show page that allows you to edit your page*/}
          {/*<Route
            path="/usershow/:id"
            render={(props) => {
              let localid = props.match.params.id
              let userInfo = this.state.personalInfo.find(user => user.id === parseInt(localid))
              return (
                <UserProfile userInfo={userInfo} logged_in={logged_in} />
              )
            }}
          />*/}

          {logged_in &&
            <Route
              path="/userprofileedit/:id"
              render={(props) => {
                let localid = props.match.params.id
                let userInfo = this.state.personalInfo.find(user => user.id === parseInt(localid))
                return (
                  <UserProfileEdit
                    updatePersonalInfo={this.updatePersonalInfo}
                    current_user={current_user}
                    userInfo={userInfo}
                  />
                )
              }}
            />
          }
          <Route path="/devteam" component={DevTeam} />
          <Route path="/faq" component={Faq} />
        </Switch>
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
