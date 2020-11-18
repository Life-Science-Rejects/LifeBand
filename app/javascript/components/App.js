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

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      personalInfo: [],
      emergencyContacts: [],
      medicalConditions: [],
      qrCode: ""
    }
  }

  componentDidMount() {
    this.getPersonalInfo()
    this.getEmergencyContacts()

    if (this.props.current_user) {
      this.getQRCode(`https://fathomless-woodland-26064.herokuapp.com/usershow/${this.props.current_user.id}`)
    }
  }

  getPersonalInfo = () => {
    fetch("/personal_infos")
      .then(response => {
        return response.json()
      })
      .then(payload => {
        this.setState({ personalInfo: payload })
      })
      .catch(errors => {
        console.log("personal info errors: ", errors)
      })
  }

  getEmergencyContacts = () => {
    fetch("/emergency_contacts")
      .then(response => {
        return response.json()
      })
      .then(payload => {
        this.setState({ emergencyContacts: payload })
      })
      .catch(errors => {
        console.log("e-contacts index errors: ", errors)
      })
  }

  getQRCode = (url) => {
    fetch(`https://chart.googleapis.com/chart?chs=150x150&cht=qr&chl=${url}&choe=UTF-8`)
      .then(payload => {
        this.setState({ qrCode: payload.url })
      })
      .catch(errors => {
        console.log("errors:", errors);
      })
  }

  createNewInfo = (newInfo) => {
    return fetch("/personal_infos", {
      body: JSON.stringify(newInfo),
      headers: {
        "Content-Type": "application/json"
      },
      method: "POST",
    })
      .then(response => {
        this.getPersonalInfo()
      })
      .catch(errors => {
        console.log("create personal info errors:", errors);
      })
  }

  createNewContact = (newContact) => {
    return fetch("/emergency_contacts", {
      body: JSON.stringify(newContact),
      headers: {
        "Content-Type": "application/json"
      },
      method: "POST",
    })
      .then(response => {
        this.getEmergencyContacts()
      })
      .catch(errors => {
        console.log("create e-contact info errors:", errors);
      })
  }

  updatePersonalInfo = (personalInfo, id) => {
    return fetch(`/personal_infos/${id}`, {
      body: JSON.stringify(personalInfo),
      headers: {
        "Content-Type": "application/json"
      },
      method: "PATCH",
    })
      .then(response => {
        if (response.status === 200) {
          this.getPersonalInfo()
        }
        return response
      })
      .catch(errors => {
        console.log("edit personal info errors:", errors);
      })
  }

  updateContactInfo = (contact, id) => {
    return fetch(`/emergency_contacts/${id}`, {
      body: JSON.stringify(contact),
      headers: {
        "Content-Type": "application/json"
      },
      method: "PATCH",
    })
      .then(response => {
        if (response.status === 200) {
          this.getEmergencyContacts()
        }
        return response
      })
      .catch(errors => {
        console.log("edit e-contact info errors:", errors);
      })
  }

  deleteContactInfo = (id) => {
    return fetch(`/emergency_contacts/${id}`, {
      headers: {
        "Content-Type": "application/json"
      },
      method: "DELETE",
    })
      .then(response => {
        alert("Are you sure you want to remove this emergency contact? 🥺")
        this.getEmergencyContacts()
        return response
      })
      .catch(errors => {
        console.log("delete e-contact info errors:", errors);
      })
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
          current_user={current_user}
        />

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
                <div className="profile-components">
                  <UserProfile userInfo={userInfo} current_user={current_user} />
                  <EmergencyContactsIndex
                    emergencyContacts={this.state.emergencyContacts}
                    contactInfo={contactInfo}
                  />
                </div>
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
                let contactInfo = this.state.emergencyContacts.filter(contact => contact.user_id === current_user.id)
                return (
                  <div className="profile-contents">
                    <MyProfileIndex
                      current_user={current_user}
                      userInfo={userInfo}
                      qrCode={this.state.qrCode}
                    />
                    <EmergencyContactsIndex
                      userInfo={userInfo}
                      emergencyContacts={this.state.emergencyContacts}
                      contactInfo={contactInfo}
                      deleteContactInfo={this.deleteContactInfo}
                    />
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
                    createNewInfo={this.createNewInfo}
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

          {/* Unprotected Routes */}
          <Route path="/devteam" component={DevTeam} />
          <Route path="/faq" component={Faq} />
          <Route path="/learnmore" component={LearnMore} />
          <Route
            exact path="/"
            render={(props) => {
              return (
                <Home
                  current_user={current_user}
                  logged_in={logged_in}
                  personalInfo={this.state.personalInfo}
                />
              )
            }
            }
          />
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
