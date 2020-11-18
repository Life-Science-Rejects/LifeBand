import React, { Component } from 'react'
import lifeband from '../assets/lifeband-home.jpg'

class Home extends Component {
  render() {
    const {current_user,logged_in, personalInfo} = this.props
    if(logged_in) {
      let noProfile = personalInfo.filter((info, index) => {
        return index + 1 === current_user.id
      }).length
      if(noProfile === 0) {
        return(
          <div className="new-user-msg">
            <h3>LifeBand</h3>
            <p>Hey there! I see you haven't made a profile.
            <br />Please make one <a className="here" href="/userprofilenew">here</a>!</p>
            <img className="home-img" src={lifeband} alt="hiker and foodie illustration" />
          </div>
        )
      }
    }
    return (
      <>
        <img className="home-img" src={lifeband} alt="hiker and foodie illustration" />
      </>
    )
  }
}

export default Home
