import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { Button } from 'reactstrap'
import userIcon from '../assets/user-icon.jpg'
//this is the public show page for other users
//will render emergency contact as a component

class MyProfileIndex extends Component {
  render() {
    const { userInfo, current_user } = this.props
    if (!userInfo) {
        return (<h3>Error:  </h3>)

    }
    return (
      <>
        <div className="user-profile-body">
          <div className="profile-container-1">
            <h3>Welcome back <span>{userInfo.full_name}</span>!</h3>
            <img className="avatar" src={userIcon} alt="generic illustrated user avatar" />
            <p><span>Name: </span>{userInfo.full_name} </p>
            <p><span>Date of Birth: </span>{current_user.date_of_birth}</p>
            <p><span>Gender: </span>{userInfo.gender} </p>
            <p><span>Phone Number: </span>{userInfo.phone_number}</p>
            <p><span>Code Status: </span>{userInfo.code_status}</p>
            <Link to={`/userprofileedit/${userInfo.id}`}>
              <Button className="edit-btn"> Edit Info </Button>
            </Link>
            <p>Share your Profile:</p>
            <img src={this.props.qrCode} alt="test" />
          </div>
          <div className="profile-container-2">
            <div className="wrapper-1">
              <span>Allergies</span>
              <p>{userInfo.allergy}</p>
              <span>Medical History</span>
              <p>{userInfo.medical_history}</p>
              <span>Treatment Refusals</span>
              <p>{userInfo.treatment_refusal}</p>
              <span>Medical Condition</span>
              <p>{userInfo.medical_condition}</p>
              <span>Prescription Medications</span>
              <p>{userInfo.medication}</p>
            </div>
            <div className="wrapper-2">
              <span>Pregnancy Status</span>
              <p>{userInfo.pregnancy_status}</p>
              <span>Last Day of Menstruation</span>
              <p>{userInfo.menstruation}</p>
              <span>Smoker</span>
              <p>{userInfo.smoker}</p>
              <span>Alcohol Use</span>
              <p>{userInfo.alcohol}</p>
              <span>Recreational Drug Use</span>
              <p>{userInfo.recreational_drug}</p>
            </div>
          </div>
        </div>
      </>
    )
  }
}

export default MyProfileIndex
