import React, { useState } from "react";
export default function UserForm(props) {
  function submitHandler() {}
  const config = {};
  const changeHandler = () => {};

  // TODO validate form input

  // company drop down menu
  // Email
  // Password
  // Name
  // Get UUID on account creation

  return (
    <div className="row">
      <div className="col-6">
        <h2>Request configuration:</h2>
        <form onSubmit={submitHandler}>
          <div className="form-group">
            <label htmlFor="url">Remote URL:</label>
            <input
              type="url"
              className="form-control"
              id="url"
              name="url"
              value={config.url}
              onChange={changeHandler}
            />
          </div>
          <div className="form-group">
            <label htmlFor="method">Method</label>
            <select
              className="form-control"
              id="method"
              name="method"
              value={config.method}
              onChange={changeHandler}
            >
              <option>GET</option>
              <option>POST</option>
              <option>PUT</option>
              <option>DELETE</option>
            </select>
          </div>

          <button type="submit" className="btn btn-primary">
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}
