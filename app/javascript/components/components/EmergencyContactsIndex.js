import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { Button } from 'reactstrap'
//This is a component now that will be rendereded on the public show for user profile, NOT A PAGE
//This will be an index
//Userprofile will have a button that leads to edit form


class EmergencyContactsIndex extends Component {
  render() {
    return (
      <>
        <h3>
          This all of the EmergencyContactsIndex for this User.
        </h3>
        <div id="index-body">
          {this.props.contactInfo &&

            this.props.contactInfo.map((contact, index) => {
              return (
                <div key={index}>
                  <p> {contact.full_name}</p>
                  <p> {contact.relationship}</p>
                  <p> {contact.phone_number}</p>
                  <Link to={"/contactinfoedit/1"}>
                    <Button> Edit Contact Info </Button>
                  </Link>
                </div>
              )
            })}
        </div>
      </>
    )
  }
}

export default EmergencyContactsIndex
