import React, { Component } from 'react'
import { Col, Row } from 'reactstrap'
import bach from '../assets/pixel-bach.png'
import diem from '../assets/pixel-diem-capstone.png'
import nate from '../assets/pixel-nate.png'


class DevTeam extends Component {
  render() {
    return (
      <>
        <h3>Meet the Devs Team</h3>
        <Row className = "devs">
          <Col>
            <h4>Bach Diep</h4>
            <img src={bach} alt="a pixel version of Bach"/>
            <p>lorem ipsum</p>
          </Col>
          <Col>
            <h4>Diem "the Yam" Tran</h4>
            <img src={diem} alt="a pixel version of Diem"/>
            <p>Diem (pronounced "Yeem") is LifeBand's product manager and tech lead advisor. She is allergic to amoxicillin, has flat feet, and enjoys room-temperature water</p>
          </Col>
          <Col>
            <h4>Nathan “NateDawg” Loranca</h4>
            <img src={nate} alt="a pixel version of Nate"/>
            <p>Nate (pronounced “N8 + 8”) is LifeBand’s tech lead. He is allergic to eggs, and does not have flat feet.  His blood type is O- and enjoys Italian lemonade.</p>
          </Col>
        </Row>
      </>
    )
  }
}

export default DevTeam
