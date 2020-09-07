import React from "react";

class DoubleForm extends React.Component {
    constructor(props) {
      super(props);
      this.state = {value: ''};
  
      this.handleChange = this.handleChange.bind(this);

    }
  
    handleChange(event) {
      this.setState({value: event.target.value});
    }
  

    render() {
      return (
        <form onSubmit={this.handleSubmit}>
          <label>
            Name:
            <input type="text" value={this.state.value} onChange={this.handleChange} />
            <input type="text" value={this.state.value} />
          </label>
          <input type="checkbox" />
        </form>
      );
    }
  }

  export default DoubleForm;