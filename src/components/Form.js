import React from "react";
import { employee, positions, states } from "./data.js";
import { RequiredRule, EmailRule, AsyncRule } from "devextreme-react/validator";
import Form, { SimpleItem, GroupItem } from "devextreme-react/form";
import "devextreme-react/text-area";
import { CheckBox } from 'devextreme-react/check-box';

class FormPage extends React.Component {
  constructor(props) {
    super(props);
    this.birthDateOptions = {};
    this.positionOptions = {
      items: positions,
      value: "",
    };
    this.stateOptions = {
      items: states,
    };
    this.phoneOptions = { mask: "+1 (000) 000-0000" };
    this.notesOptions = { height: 140 };
    this.SSNOptions = { mask: "000-00-0000" };
    //this.DateOptions = { mask: '00/00/0000' };
  }
  render() {
    return (
      <div className="form-wrapper">
      <Form formData={employee}>
        <GroupItem >
          <SimpleItem render={avatarRender}></SimpleItem>
          <GroupItem colSpan={3}>
            <SimpleItem dataField="FirstName" />
            <SimpleItem dataField="SocialSecurityNumber" />
            <SimpleItem
              dataField="BirthDate"
              //editorType="dxDateBox"
              editorOptions={this.birthDateOptions}
              //editorOptions={this.DateOptions}
            />
          </GroupItem>
        </GroupItem>
        <GroupItem colCount={2}>
          <GroupItem>
            <SimpleItem dataField="Address" />
            <SimpleItem dataField="City" />
            <SimpleItem dataField="ZipCode" />
            <SimpleItem
              dataField="State"
              editorType="dxSelectBox"
              editorOptions={this.stateOptions}
            />
          </GroupItem>
          <GroupItem>
            <SimpleItem dataField="Address" />
            <SimpleItem dataField="City" />
            <SimpleItem dataField="ZipCode" />
            <SimpleItem
              dataField="State"
              editorType="dxSelectBox"
              editorOptions={this.stateOptions}
            />
          </GroupItem>
          
        </GroupItem>
        <GroupItem>
            
            <SimpleItem
              dataField="Position"
              editorType="dxSelectBox"
              editorOptions={this.positionOptions}
            />
              <RequiredRule message="Email is required" />
              <EmailRule message="Email is invalid" />
              <AsyncRule
                message="Email is already registered"
                validationCallback={asyncValidation}
              />
          
            <SimpleItem dataField="SSN" editorOptions={this.SSNOptions} />
          </GroupItem> 
      </Form>
      <div className="dx-field">
            <div className="dx-field-label">Unchecked</div>
            <div className="dx-field-value">
              <CheckBox defaultValue={false} />
            </div>
          </div>
      </div>
    );
  }
}

function avatarRender() {
  return <div className="form-avatar"></div>;
}

function sendRequest(value) {
  const validEmail = "test@dx-email.com";
  return new Promise((resolve) => {
    setTimeout(function () {
      resolve(value === validEmail);
    }, 1000);
  });
}

function asyncValidation(params) {
  return sendRequest(params.value);
}

export default FormPage;
