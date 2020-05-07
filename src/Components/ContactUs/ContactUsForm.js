import React, { Component } from "react";

class ContactUsForm extends Component {
  render() {
    return (
      <form onSubmit={this.submitHandler} style={{ paddingBottom: "5%" }}>
        <MDBInput
          id="firstName"
          name="firstName"
          type="text"
          label="First Name"
          onChange={this.changeHandler}
          value={this.state.firstName}
          required
        />
        <MDBInput
          id="lastName"
          name="lastName"
          type="text"
          label="Last Name"
          onChange={this.changeHandler}
          value={this.state.lastName}
        />
        <MDBInput
          id="email"
          name="email"
          type="text"
          label="Email"
          onChange={this.changeHandler}
          value={this.state.email}
          required
        />
        <MDBInput
          id="comment"
          name="comment"
          type="text"
          label="Comment"
          onChange={this.changeHandler}
          onChange={this.state.comment}
          required
        />
        <MDBBtn size="lg" color="primary" type="submit">
          Submit Form
        </MDBBtn>
      </form>
    );
  }
}

export default ContactUsForm;
