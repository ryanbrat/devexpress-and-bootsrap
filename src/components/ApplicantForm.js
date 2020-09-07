import React, { useState } from "react";
import { useForm } from "react-hook-form";
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

const ApplicantForm = () => {
  const { handleSubmit } = useForm();

  const onSubmit = (data) => {
    console.log(data);
  };

  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <div>
      <Container className="themed-container p-4">
        <form onSubmit={handleSubmit(onSubmit)}>
          <Row className="pb-2" xs={1} md={2}>
            <Col>
              <FormGroup>
                <Label for="firstName">First Name</Label>
                <Input id="firstName" />
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
                <Input onClick={toggle} type="checkbox" /> Mailing address is
                different than physical address
              </Label>
            </FormGroup>
          </Row>
          {/* mailing address is different form */}
          <Collapse isOpen={isOpen}>
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
          <Button className="float-right mt-4" type="submit"  onSubmit={handleSubmit}>
            Next
          </Button>
        </form>
      </Container>
    </div>
  );
};

export default ApplicantForm;
