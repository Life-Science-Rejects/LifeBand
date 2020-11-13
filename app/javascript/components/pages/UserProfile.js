import React, { Component } from 'react'
import userIcon from '../assets/user-icon.jpg'
//this is the public show page for other users
//will render emergency contact as a component

class UserProfile extends Component {
  render() {
    const { userInfo } = this.props
    return (
      <>
        <div id="user-profile-body">
          <h3>This is the UserProfile.</h3>
          <img className="avatar" src={userIcon} alt="generic illustrated user avatar" />
          <p>Name: {userInfo.full_name} </p>
          <p>Gender: {userInfo.gender} </p>
          <p>Phone Number: {userInfo.phone_number} </p>
          <p>Allergies: {userInfo.allergy} </p>
          <p>Medical History: {userInfo.medical_history} </p>
          <p>Treatment Refusals: {userInfo.treatment_refusal} </p>
          <p>Pregnancy Status: {userInfo.pregnancy_status} </p>
          <p>Smoker: {userInfo.smoker} </p>
          <p>Alcohol Use: {userInfo.alcohol} </p>
          <p>Recreational Drug Use: {userInfo.recreational_drug} </p>
          <p>Last Day of Menstruation: {userInfo.menstruation} </p>
          <p>Code Status: {userInfo.code_status} </p>
          <p>Medical Conditions: {userInfo.medical_condition} </p>
          <p>Date of Diagnosis: {userInfo.diagnosis_date} </p>
          <p>Prescription Medications: {userInfo.medication} </p>
          <p>Dosage: {userInfo.dosage} </p>
        </div>
      </>
    )
  }
}

export default UserProfile
