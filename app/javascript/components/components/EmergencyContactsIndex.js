import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { Button } from 'reactstrap'
import editIcon from '../assets/edit-icon.svg'
import trashIcon from '../assets/trash-icon.svg'
//This is a component now that will be rendereded on the public show for user profile, NOT A PAGE
//This will be an index
//Userprofile will have a button that leads to edit form


class EmergencyContactsIndex extends Component {
  render() {
    return (
      <>
        <div className="index-body">
          <div className="index-wrapper-1">
            <h3>Emergency Contacts</h3>
            { this.props.userInfo && 
              <Link to={"/contactinfonew"}>
                <Button className="add-btn">Add a New Emergency Contact</Button>
              </Link>
            }
          </div>
          {this.props.contactInfo &&

            this.props.contactInfo.map((contact, index) => {
              return (
                <div className="e-contact" key={index}>
                  <p> {contact.full_name}</p>
                  <p> {contact.relationship}</p>
                  <p> {contact.phone_number}</p>
                  { this.props.userInfo &&
                    <>
                      <Link to={`contactinfoedit/${contact.id}`}>
                        <img
                          src={editIcon}
                          alt="pencil edit icon"
                          className="icon"
                        />
                      </Link>
                      <img
                        src={trashIcon}
                        alt="metal trash can icon"
                        className="icon"
                        onClick={() => {this.props.deleteContactInfo(contact.id)}}
                      />
                    </>
                  }
                </div>
              )
            })}
        </div>
      </>
    )
  }
}

export default EmergencyContactsIndex
