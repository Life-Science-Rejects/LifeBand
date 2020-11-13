import React, { Component } from 'react'
import lifeband from '../assets/lifeband-home.jpg'


class Home extends Component {
  render() {
    return (
      <>
        <h3>
          This is the LifeBand Home.
        </h3>
        <img className="home-img" src={lifeband} alt="hiker and foodie illustration" />
      </>
    )
  }
}

export default Home
