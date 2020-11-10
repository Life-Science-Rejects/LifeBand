import React, { Component } from 'react'
import {
  Button,
  Form,
  FormGroup,
  Input,
  Label
} from 'reactstrap'
import { Redirect } from 'react-router-dom'
//this will remain a page. upon new and save, user will be taken back to their my user profile index


class EmergencyContactsEdit extends Component {
  constructor(props) {
    super(props)
    this.state = {
      form: {
        full_name: this.props.contactInfo.full_name,
        relationship: this.props.contactInfo.relationship,
        phone_number: this.props.contactInfo.phone_number
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
    this.props.updateContactInfo(this.state.form, this.props.contactInfo.id)
    this.setState({ success: true })
  }

  render() {
    return (
      <>
        <h3>Edit Emergency Contact</h3>
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
              <Label>Relationship</Label>
              <Input
                type="string"
                name="relationship"
                onChange={this.handleChange}
                value={this.state.form.relationship}
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
            <Button
              name="submit"
              onClick={this.handleSubmit}> Edit Emergency Contact
            </Button>
          </Form>
          {this.state.success && <Redirect to={`/usershow/${this.props.current_user.id}`} />}
        </div>
      </>
    )
  }
}

export default EmergencyContactsEdit
