import React, { state, useState } from "react";
import {
  FormGroup,
  Row,
  Col,
  Input,
  Container,
  Button,
  Label,
  Collapse,
} from "reactstrap";

const initialState = {
  name: "",
  email: "",
  password: "",
  nameError: "",
  emailError: "",
  passwordError: ""
};


export default class ApplicantForm extends React.Component {

    state = initialState;
  
    handleChange = event => {
      const isCheckbox = event.target.type === "checkbox";
      this.setState({
        [event.target.name]: isCheckbox
          ? event.target.checked
          : event.target.value
      });
    };
  
    validate = () => {
      let nameError = "";
      let emailError = "";
      // let passwordError = "";
  
      if (!this.state.name) {
        nameError = "name cannot be blank";
      }
  
      if (!this.state.email.includes("@")) {
        emailError = "invalid email";
      }
  
      if (emailError || nameError) {
        this.setState({ emailError, nameError });
        return false;
      }
  
      return true;
    };

    handleSubmit = event => {
      event.preventDefault();
      const isValid = this.validate();
      if (isValid) {
        console.log(this.state);
        // clear form
        this.setState(initialState);
      }
    };
  
    render() {
      return (
    <div>
      <Container className="themed-container p-4">
        <form onSubmit={this.handleSubmit}>
          <Row className="pb-2" xs={1} md={2}>
            <Col>
              <FormGroup>
                <Label for="firstName">First Name</Label>
                <Input id="firstName" />
                <div>{this.state.nameError}</div>
              </FormGroup>

            </Col>
            <Col>
              <FormGroup>
                <Label for="lastName">Last Name</Label>
                <Input id="lastName" />
              </FormGroup>
            </Col>
          </Row>
          <Row className="pb-2" xs={1} md={2}>
            <Col>
              <FormGroup>
                <Label for="email">Email</Label>
                <Input id="email" />
              </FormGroup>
            </Col>
            <Col>
              <FormGroup>
                <Label for="phoneNumber">Phone Number</Label>
                <Input id="phoneNumber" />
              </FormGroup>
            </Col>
            <Col>
              <FormGroup>
                <Label for="ssn">SSN</Label>
                <Input id="ssn" />
              </FormGroup>
            </Col>
            <Col>
            <FormGroup>
                <Label for="exampleDate">Date</Label>
                <Input
                type="date"
                name="date"
                id="exampleDate"
                placeholder="date placeholder"
                />
            </FormGroup>
            </Col>
          </Row>

          <FormGroup>
            <Label for="exampleAddress">Address</Label>
            <Input
              type="text"
              name="address"
              id="exampleAddress"
              placeholder="1234 Main St"
            />
          </FormGroup>
          <FormGroup>
            <Label for="exampleAddress2">Address 2</Label>
            <Input
              type="text"
              name="address2"
              id="exampleAddress2"
              placeholder="Apartment, studio, or floor"
            />
          </FormGroup>

          <Row>
            <Col md={6}>
              <FormGroup>
                <Label for="exampleCity">City</Label>
                <Input type="text" name="city" id="exampleCity" />
              </FormGroup>
            </Col>
            <Col md={4}>
              <FormGroup>
                <Label for="exampleState">State</Label>
                <Input type="text" name="state" id="exampleState" />
              </FormGroup>
            </Col>
            <Col md={2}>
              <FormGroup>
                <Label for="exampleZip">Zip</Label>
                <Input type="text" name="zip" id="exampleZip" />
              </FormGroup>
            </Col>
          </Row>
          <Row>
            <FormGroup className="mx-auto m-4" check>
              <Label check>
                <Input type="checkbox" /> Mailing address is
                different than physical address
              </Label>
            </FormGroup>
          </Row>
          {/* mailing address is different form */}
          <Collapse>
            <FormGroup>
              <Label for="exampleAddress">Address</Label>
              <Input
                type="text"
                name="address"
                id="exampleAddress"
                placeholder="1234 Main St"
              />
            </FormGroup>
            <FormGroup>
              <Label for="exampleAddress2">Address 2</Label>
              <Input
                type="text"
                name="address2"
                id="exampleAddress2"
                placeholder="Apartment, studio, or floor"
              />
            </FormGroup>
            <Row xs={1} md={2}>
              <Col md={6}>
                <FormGroup>
                  <Label for="exampleCity">City</Label>
                  <Input type="text" name="city" id="exampleCity" />
                </FormGroup>
              </Col>
              <Col md={4}>
                <FormGroup>
                  <Label for="exampleState">State</Label>
                  <Input type="text" name="state" id="exampleState" />
                </FormGroup>
              </Col>
              <Col md={2}>
                <FormGroup>
                  <Label for="exampleZip">Zip</Label>
                  <Input type="text" name="zip" id="exampleZip" />
                </FormGroup>
              </Col>
            </Row>
          </Collapse>
          <Button className="float-right mt-4" type="submit" >
            Next
          </Button>
        </form>
      </Container>
    </div>
  );
};
}

