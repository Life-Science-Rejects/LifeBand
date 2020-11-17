import React, { Component } from 'react'
import userIcon from '../assets/user-icon.jpg'
//this is the public show page for other users
//will render emergency contact as a component

class UserProfile extends Component {
  render() {
    const { userInfo, current_user } = this.props
    if (!userInfo) {
      return (<h3>Error</h3>)
    }

    return (
      <>
        <div className="user-profile-body">
          <div className="profile-container-1">
          <h3><span>{userInfo.full_name}</span></h3>
            <img className="avatar" src={userIcon} alt="generic illustrated user avatar" />
            <p>Date of Birth: {current_user.date_of_birth} </p>
            <p>Gender: {userInfo.gender} </p>
            <p>Phone Number: {userInfo.phone_number} </p>
            <p>Code Status: {userInfo.code_status} </p>
          </div>
          <div className="profile-container-2">
            <div className="wrapper-1">
              <span>Allergies</span>
              <p>{userInfo.allergy}</p>
              <span>Medical History</span>
              <p>{userInfo.medical_history}</p>
              <span>Treatment Refusals</span>
              <p>{userInfo.treatment_refusal}</p>
              <span>Medical Conditions</span>
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

export default UserProfile
