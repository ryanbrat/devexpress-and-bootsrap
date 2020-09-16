import React from "react";

class DoubleForm extends React.Component {
    render() {
      return (
        <form onSubmit={this.handleSubmit}>
          double form
        </form>
      );
    }
  }

  export default DoubleForm;