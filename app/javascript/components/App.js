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
import EmergencyContactsEdit from './pages/EmergencyContactsEdit'
import EmergencyContactsNew from './pages/EmergencyContactsNew'
import UserProfileNew from './pages/UserProfileNew'
import UserProfileEdit from './pages/UserProfileEdit'
import UserProfile from './pages/UserProfile'
import MyProfileIndex from './pages/MyProfileIndex'

import mockPersonalInfo from './mockPersonalInfo.js'
import mockEmergencyContacts from './mockEmergencyContacts.js'


class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      personalInfo: mockPersonalInfo,
      emergencyContacts: mockEmergencyContacts
    }
  }

  createNewUser = (newUser) => {
    console.log(newUser);
  }

  updatePersonalInfo = (personalInfo, id) => {
    console.log("personal info:", personalInfo, "id:", id);
  }


  createNewContact = (newContact) => {
    console.log(newContact);
  }


  updateContactInfo = (contact, id) => {
    console.log("contact info:", contact, "id:", id);
  }

  deleteContactInfo = (id) => {
    console.log("id:", id);
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
        <Header 
          logged_in={logged_in}
          sign_in_route={sign_in_route}
          sign_up_route={sign_up_route}
          sign_out_route={sign_out_route}
          current_user={current_user}/>

        <Switch>


          {/*Of our pages, EmergencyContactsEdit is a form to edit
          UserProfile is a show page
          UserProfileEdit is a form to edit*/}

          {/*UserProfile, a public unprotected show page*/}
          <Route
            path="/usershow/:id"
            render={(props) => {
              let localid = props.match.params.id
              let userInfo = this.state.personalInfo.find(user => user.id === parseInt(localid))
              let contactInfo = this.state.emergencyContacts.filter(contact => contact.user_id === parseInt(localid))
              return (
                <>
                  <UserProfile userInfo={userInfo} />
                  <EmergencyContactsIndex emergencyContacts={this.state.emergencyContacts} contactInfo={contactInfo} />
                </>
              )
            }}
          />

          {/* Protected Routes */}

          {/*UserProfile, the private protected show page that allows you to edit your page*/}
          {logged_in &&
            <Route
              path="/myprofileindex"
              render={(props) => {
                let userInfo = this.state.personalInfo.find(user => user.id === current_user.id)
                console.log("User Info: ", userInfo)
                let contactInfo = this.state.emergencyContacts.filter(contact => contact.user_id === current_user.id)
                console.log(this.state.personalInfo)
                console.log(current_user.id)
                return (
                  <div>
                  <MyProfileIndex
                    current_user={current_user}
                    userInfo={userInfo}
                  />
                  <EmergencyContactsIndex emergencyContacts={this.state.emergencyContacts} contactInfo={contactInfo} deleteContactInfo={this.deleteContactInfo} />
                  </div>

                )
              }}
            />
          }


          {logged_in &&
            <Route
              path="/userprofilenew"
              render={(props) => {
                let localid = props.match.params.id
                let userInfo = this.state.personalInfo.find(user => user.id === parseInt(localid))
                return (
                  <UserProfileNew
                    createNewUser={this.createNewUser}
                    current_user={current_user}
                    userInfo={userInfo}
                  />
                )
              }}
            />
          }

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

          {logged_in &&
            <Route
              path="/contactinfonew"
              render={(props) => {
                let localid = props.match.params.id
                let userInfo = this.state.personalInfo.find(user => user.id === parseInt(localid))
                return (
                  <EmergencyContactsNew
                    createNewContact={this.createNewContact}
                    current_user={current_user}
                    userInfo={userInfo}
                  />
                )
              }}
            />
          }

          {logged_in &&
            <Route
              path="/contactinfoedit/:id"
              render={(props) => {
                let localid = props.match.params.id
                let userInfo = this.state.personalInfo.find(user => user.id === parseInt(localid))
                let contactInfo = this.state.emergencyContacts.find(contact => contact.id === parseInt(localid))
                console.log("contact info:", contactInfo, "localid:", localid);
                return (
                  <EmergencyContactsEdit
                    updateContactInfo={this.updateContactInfo}
                    current_user={current_user}
                    userInfo={userInfo}
                    contactInfo={contactInfo}
                  />
                )
              }}
            />
          }


          <Route path="/devteam" component={DevTeam} />
          <Route path="/faq" component={Faq} />
          <Route path="/learnmore" component={LearnMore} />
          {/* Unprotected Routes */}

          {/*Home*/}
          <Route exact path="/" component={Home} />
          {/*Not Found*/}
          <Route component={NotFound} />
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
