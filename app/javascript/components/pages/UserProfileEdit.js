import React, { Component } from 'react'
import {
  Button,
  Form,
  FormGroup,
  Input,
  Label
} from 'reactstrap'
import { Redirect } from 'react-router-dom'
//this will remain a page. upon edit and save, user will be taken back to their my user profile index


class UserProfileEdit extends Component {
  constructor(props) {
    super(props)
    this.state = {
      form: {
        full_name: this.props.userInfo.full_name,
        gender: this.props.userInfo.gender,
        phone_number: this.props.userInfo.phone_number,
        allergy: this.props.userInfo.allergy,
        medical_history: this.props.userInfo.medical_history,
        treatment_refusal: this.props.userInfo.treatment_refusal,
        pregnancy_status: this.props.userInfo.pregnancy_status,
        smoker: this.props.userInfo.smoker,
        alcohol: this.props.userInfo.alcohol,
        recreational_drug: this.props.userInfo.recreational_drug,
        menstruation: this.props.userInfo.menstruation,
        code_status: this.props.userInfo.code_status,
        medical_condition: this.props.userInfo.medical_condition,
        diagnosis_date: this.props.userInfo.diagnosis_date,
        medication: this.props.userInfo.medication,
        dosage: this.props.userInfo.dosage
      },
      success: false
    }
  }

  handleChange = (e) => {
    let { form } = this.state
    form[e.target.name] = e.target.value
    this.setState({ form: form })
  }

  handleSubmit = (e) => {
    // keeps react from refreshing the page unnecessarily
    e.preventDefault()
    this.props.updatePersonalInfo(this.state.form, this.props.userInfo.id)
    this.setState({ success: true })
  }

  render() {
    return (
      <>
        <h3>Edit Personal Info</h3>
        <div className="form-body">
          <Form>
            <FormGroup>
              <Label>Full Name</Label>
              <Input
                type="string"
                name="full_name"
                onChange={this.handleChange}
                value={this.state.form.full_name}
              />
            </FormGroup>
            <FormGroup>
              <Label>Gender</Label>
              <Input
                type="string"
                name="gender"
                onChange={this.handleChange}
                value={this.state.form.gender}
              />
            </FormGroup>
            <FormGroup>
              <Label>Phone Number</Label>
              <Input
                type="string"
                name="phone_number"
                onChange={this.handleChange}
                value={this.state.form.phone_number}
              />
            </FormGroup>
            <FormGroup>
              <Label>Allergy</Label>
              <Input
                type="text"
                name="allergy"
                onChange={this.handleChange}
                value={this.state.form.allergy}
              />
            </FormGroup>
            <FormGroup>
              <Label>Medical History</Label>
              <Input
                type="text"
                name="medical_history"
                onChange={this.handleChange}
                value={this.state.form.medical_history}
              />
            </FormGroup>
            <FormGroup>
              <Label>Treatment Refusal</Label>
              <Input
                type="text"
                name="treatment_refusal"
                onChange={this.handleChange}
                value={this.state.form.treatment_refusal}
              />
            </FormGroup>
            <FormGroup>
              <Label>Pregnancy Status</Label>
              <Input
                type="string"
                name="pregnancy_status"
                onChange={this.handleChange}
                value={this.state.form.pregnancy_status}
              />
            </FormGroup>
            <FormGroup>
              <Label>Smoker</Label>
              <Input
                type="string"
                name="smoker"
                onChange={this.handleChange}
                value={this.state.form.smoker}
              />
            </FormGroup>
            <FormGroup>
              <Label>Alcohol</Label>
              <Input
                type="string"
                name="alcohol"
                onChange={this.handleChange}
                value={this.state.form.alcohol}
              />
            </FormGroup>
            <FormGroup>
              <Label>Recreational Drug</Label>
              <Input
                type="string"
                name="recreational_drug"
                onChange={this.handleChange}
                value={this.state.form.recreational_drug}
              />
            </FormGroup>
            <FormGroup>
              <Label>menstruation</Label>
              <Input
                type="string"
                name="menstruation"
                onChange={this.handleChange}
                value={this.state.form.menstruation}
              />
            </FormGroup>
            <FormGroup>
              <Label>Code Status</Label>
              <Input
                type="string"
                name="code_status"
                onChange={this.handleChange}
                value={this.state.form.code_status}
              />
            </FormGroup>
            <FormGroup>
              <Label>Medical Condition</Label>
              <Input
                type="string"
                name="medical_condition"
                onChange={this.handleChange}
                value={this.state.form.medical_condition}
              />
            </FormGroup>
            <FormGroup>
              <Label>Diagnosis Date</Label>
              <Input
                type="string"
                name="diagnosis_date"
                onChange={this.handleChange}
                value={this.state.form.diagnosis_date}
              />
            </FormGroup>
            <FormGroup>
              <Label>Medication</Label>
              <Input
                type="string"
                name="medication"
                onChange={this.handleChange}
                value={this.state.form.medication}
              />
            </FormGroup>
            <FormGroup>
              <Label>Dosage</Label>
              <Input
                type="string"
                name="dosage"
                onChange={this.handleChange}
                value={this.state.form.dosage}
              />
            </FormGroup>
            <Button
              name="submit"
              onClick={this.handleSubmit}> Edit Info
            </Button>
          </Form>
          {this.state.success && <Redirect to={"/myprofileindex"} />}
        </div>
      </>
    )
  }
}

export default UserProfileEdit
