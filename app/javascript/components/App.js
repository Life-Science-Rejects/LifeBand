import React from "react"
import{
  BrowserRouter as Router, Route, Switch
} from 'react-router-dom'

import Header from './components/Header'
import Footer from './components/Footer'

import DevTeam from './pages/DevTeam'
import EmergencyContactsIndex from './pages/EmergencyContactsIndex'
import Faq from './pages/Faq'
import Home from './pages/Home'
import LearnMore from './pages/LearnMore'
import MyEmergencyContactsEdit from './pages/MyEmergencyContactsEdit'
import MyEmergencyContactsIndex from './pages/MyEmergencyContactsIndex'
import MyUserProfile from './pages/MyUserProfile'
import MyUserProfileEdit from './pages/MyUserProfileEdit'
import UserProfile from './pages/UserProfile'





class App extends React.Component {
  render() {
    const {
      logged_in,
      sign_in_route,
      sign_out_route
    } = this.props
    return (
      <>
      <Header />
      <Home />
      <LearnMore />
      <DevTeam />
      <Faq />

        { logged_in &&
          <div>
            <a href={sign_out_route}>Sign Out</a>
          </div>
        }
        { !logged_in &&
          <div>
            <a href={sign_in_route}>Sign In</a>
          </div>
        }
        <Footer />

      </>
    )
  }
}

export default App
