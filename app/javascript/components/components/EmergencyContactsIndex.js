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
        <div id="index-body">
          <h3>Emergency Contacts</h3>
          {this.props.contactInfo &&

            this.props.contactInfo.map((contact, index) => {
              return (
                <div className="e-contact" key={index}>
                  <p> {contact.full_name}</p>
                  <p> {contact.relationship}</p>
                  <p> {contact.phone_number}</p>
                  <Link to={`/contactinfoedit/${contact.id}`}>
                    <Button className="edit-btn"> Edit Contact Info </Button>
                  </Link>
                  <Button className="delete-btn" onClick={() => { this.props.deleteContactInfo(contact.id) }}> Delete Emergency Contact</Button>
                </div>
              )
            })}
          <Link to={"/contactinfonew"}>
            <Button className="add-btn">Add a New Emergency Contact</Button>
          </Link>
        </div>
      </>
    )
  }
}

export default EmergencyContactsIndex
