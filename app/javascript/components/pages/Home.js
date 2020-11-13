import React, { Component } from 'react'
import lifeband from '../assets/lifeband-home.png'


class Home extends Component {
  render() {
    return (
      <>
        <h3>
          This is the Home.
        </h3>
        <img src={lifeband} alt="hiker and foodie illustration" />
      </>
    )
  }
}

export default Home
