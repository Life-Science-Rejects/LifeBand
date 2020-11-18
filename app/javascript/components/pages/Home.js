import React, { Component } from 'react'
import lifeband from '../assets/lifeband-home.jpg'

class Home extends Component {
  render() {
    const { current_user, logged_in, personalInfo } = this.props

    return (
      <>
      <div className="new-user-msg">
        {logged_in &&
          <p>If you haven't made a profile yet, please make one <a className="here" href="/userprofilenew">here</a>!</p>}
        <img className="home-img" src={lifeband} alt="hiker and foodie illustration" />
        </div>
      </>
    )
  }
}

export default Home
