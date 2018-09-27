import React, { Component } from "react";

export default class CreateProject extends Component {
  state = {
    title: "",
    content: ""
  };

  handleChange = e => {
    this.setState({
      [e.target.id]: e.target.value
    });
  };
  handleSubmit = e => {
    e.preventDefault();
  };
  render() {
    return (
      <div className="container">
        <form onSubmit={this.handleSubmit} className="white">
          <h3 className="grey-text text-darken-3">Sign In</h3>
          <div className="input-field">
            <label htmlFor="title">title</label>
            <input type="text" id="title" onChange={this.handleChange} />
          </div>

          <div className="input-field">
            <label htmlFor="password">Content</label>
            <textarea
              name=""
              id="content"
              className="materialize-textarea"
              onChange={this.handleChange}
            />
          </div>

          <div className="input-field">
            <button className="btn pink lighten-1 z-depth-0">Login</button>
          </div>
        </form>
      </div>
    );
  }
}
