import React, { Component } from 'react'
import {
    Button,
    Form,
    FormGroup,
    Input,
    Label
} from 'reactstrap'
import { Redirect } from 'react-router-dom'


class UserProfileNew extends Component {
    constructor(props) {
        super(props)
        this.state = {
            form: {
                full_name: "",
                gender: "",
                phone_number: "",
                allergy: "",
                medical_history: "",
                treatment_refusal: "",
                pregnancy_status: "",
                smoker: "",
                alcohol: "",
                recreational_drug: "",
                menstruation: "",
                code_status: "",
                medical_condition: "",
                diagnosis_date: "",
                medication: "",
                dosage: "",
                user_id: this.props.current_user.id
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
        this.props.createNewInfo(this.state.form)
        this.setState({ success: true })
    }

    render() {
        return (
            <>
                <h3>Add Personal Info</h3>
                <div className="form-body">
                    <Form>
                        <Row>
                            <Col s="auto">
                                <FormGroup>
                                    <Label>Full Name</Label>
                                    <Input
                                        type="string"
                                        name="full_name"
                                        onChange={this.handleChange}
                                        value={this.state.form.full_name}
                                    />
                                </FormGroup>
                            </Col>
                            <Col xs="auto">
                                <FormGroup>
                                    <Label>Gender</Label>
                                    <Input
                                        type="string"
                                        name="gender"
                                        onChange={this.handleChange}
                                        value={this.state.form.gender}
                                    />
                                </FormGroup>
                            </Col>
                            <Col xs="auto">
                                <FormGroup>
                                    <Label>Phone Number</Label>
                                    <Input
                                        type="string"
                                        name="phone_number"
                                        onChange={this.handleChange}
                                        value={this.state.form.phone_number}
                                    />
                                </FormGroup>
                            </Col>
                        </Row>

                        <FormGroup>
                            <Label>Allergy</Label>
                            <Input
                                type="textarea"
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
                            <FormGroup check>
                                <Label check>
                                <Input
                                    type="radio"
                                    name="pregnancy_status"
                                    value="No"
                                    onChange={this.handleChange}
                                    checked={this.state.form.pregnancy_status === "No"}
                                />
                                No
                                </Label>
                            </FormGroup>
                            <FormGroup check>
                                <Label check>
                                <Input
                                    type="radio"
                                    name="pregnancy_status"
                                    value="Yes"
                                    onChange={this.handleChange}
                                    checked={this.state.form.pregnancy_status === "Yes"}
                                />
                                Yes
                                </Label>
                            </FormGroup>
                            <FormGroup check>
                                <Label check>
                                <Input
                                    type="radio"
                                    name="pregnancy_status"
                                    value="Does not apply"
                                    onChange={this.handleChange}
                                    checked={this.state.form.pregnancy_status === "Does not apply"}
                                />
                                Does not apply
                                </Label>
                            </FormGroup>
                        </FormGroup>

                        <FormGroup>
                            <Label>Smoker</Label>
                            <FormGroup check>
                                <Label check>
                                <Input 
                                    type="radio"
                                    name="smoker"
                                    value="No"
                                    onChange={this.handleChange}
                                    checked={this.state.form.smoker === "No"}
                                />
                                No
                                </Label>
                            </FormGroup>
                            <FormGroup check inline>
                                <Label check>
                                <Input 
                                    type="radio"
                                    name="smoker"
                                    value="Yes, rarely"
                                    onChange={this.handleChange}
                                    checked={this.state.form.smoker === "Yes, rarely"}
                                />
                                Yes, rarely
                                </Label>
                            </FormGroup>
                            <FormGroup check inline>
                                <Label check>
                                <Input
                                    type="radio"
                                    name="smoker"
                                    value="Yes, sometimes"
                                    onChange={this.handleChange}
                                    checked={this.state.form.smoker === "Yes, sometimes"}
                                />
                                Yes, sometimes
                                </Label>
                            </FormGroup>
                            <FormGroup check inline>
                                <Label check>
                                <Input
                                    type="radio"
                                    name="smoker"
                                    value="Yes, frequently"
                                    onChange={this.handleChange}
                                    checked={this.state.form.smoker === "Yes, frequently"}
                                />
                                Yes, frequently
                                </Label>
                            </FormGroup>
                        </FormGroup>

                        <FormGroup>
                            <Label>Alcohol</Label>
                            <FormGroup check>
                                <Label check>
                                <Input 
                                    type="radio"
                                    name="alcohol"
                                    value="No"
                                    onChange={this.handleChange}
                                    checked={this.state.form.alcohol === "No"}
                                />
                                No
                                </Label>
                            </FormGroup>
                            <FormGroup check inline>
                                <Label check>
                                <Input
                                    type="radio"
                                    name="alcohol"
                                    value="Yes, rarely"
                                    onChange={this.handleChange}
                                    checked={this.state.form.alcohol === "Yes, rarely"}
                                />
                                Yes, rarely
                                </Label>
                            </FormGroup>
                            <FormGroup check inline>
                                <Label check>
                                <Input
                                    type="radio"
                                    name="alcohol"
                                    value="Yes, sometimes"
                                    onChange={this.handleChange}
                                    checked={this.state.form.alcohol === "Yes, sometimes"}
                                />
                                Yes, sometimes
                                </Label>
                            </FormGroup>
                            <FormGroup check inline>
                                <Label check>
                                <Input
                                    type="radio"
                                    name="alcohol"
                                    value="Yes, frequently"
                                    onChange={this.handleChange}
                                    checked={this.state.form.alcohol === "Yes, frequently"}
                                />
                                Yes, frequently
                                </Label>
                            </FormGroup>
                        </FormGroup>

                        <FormGroup>
                            <Label>Recreational Drug</Label>
                            <FormGroup check>
                                <Label check>
                                <Input
                                    type="radio"
                                    name="recreational_drug"
                                    value="No"
                                    onChange={this.handleChange}
                                    checked={this.state.form.recreational_drug === "No"}
                                />
                                No
                                </Label>
                            </FormGroup>
                            <FormGroup check inline>
                                <Label check>
                                <Input
                                    type="radio"
                                    name="recreational_drug"
                                    value="Yes, rarely"
                                    onChange={this.handleChange}
                                    checked={this.state.form.recreational_drug === "Yes, rarely"}
                                />
                                Yes, rarely
                                </Label>
                            </FormGroup>
                            <FormGroup check inline>
                                <Label check>
                                <Input
                                    type="radio"
                                    name="recreational_drug"
                                    value="Yes, sometimes"
                                    onChange={this.handleChange}
                                    checked={this.state.form.recreational_drug === "Yes, sometimes"}
                                />
                                Yes, sometimes
                                </Label>
                            </FormGroup>
                            <FormGroup check inline>
                                <Label check>
                                <Input
                                    type="radio"
                                    name="recreational_drug"
                                    value="Yes, frequently"
                                    onChange={this.handleChange}
                                    checked={this.state.form.recreational_drug === "Yes, frequently"}
                                />
                                Yes, frequently
                                </Label>
                            </FormGroup>
                        </FormGroup>

                        <FormGroup>
                            <Label>Last Day of Menstruation</Label>
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
                                type="select"
                                name="code_status"
                                onChange={this.handleChange}
                                value={this.state.form.code_status}
                            >
                                <option>Full Code</option>
                                <option>CPR</option>
                                <option>No code</option>
                                <option>DNR</option>
                                <option>DNI</option>
                                <option>NFR</option>
                                <option>AND</option>
                                <option>No CPR</option>
                                <option>DNAR</option>
                            </Input>
                        </FormGroup>

                        <FormGroup>
                            <Label>Medical Condition</Label>
                            <Input
                                type="texarea"
                                name="medical_condition"
                                onChange={this.handleChange}
                                value={this.state.form.medical_condition}
                            />
                        </FormGroup>

                        <FormGroup>
                            <Label>Medication</Label>
                            <Input
                                type="textarea"
                                name="medication"
                                onChange={this.handleChange}
                                value={this.state.form.medication}
                            />
                        </FormGroup>

                        <Button
                            className="submit-btn"
                            name="submit"
                            onClick={this.handleSubmit}> Add Info
                        </Button>
                    </Form>
                    {this.state.success && <Redirect to={"/myprofileindex"} />}
                </div>
            </>
        )
    }
}

export default UserProfileNew
