import React, { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import { connect } from "react-redux";
import { addContact } from "../actions/index.js";
import { useHistory } from "react-router-dom";

const AddContact = (props) => {
  let history = useHistory();

  //save form data into state

  const [name, setName] = useState("");
  const [mobile, setMobile] = useState("");
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState("");

  const onSubmithandler = (e) => {
    e.preventDefault();
    console.log(name, mobile, email, status);
    const newContact = {
      id: uuidv4(),
      contactName: name,
      mobile: mobile,
      email: email,
      status: status,
    };

    //Not null validation before dispatching actions
    if (name !== "" && !mobile !== "" && !email !== "") {
      props.dispatch(addContact(newContact));
      history.push("/");
    } else {
      alert("Please Enter Contact Details");
    }
  };

  return (
    <div className="row">
      <div className="col-md-6 mx-auto">
        <div className="card mt-5">
          <div className="card-header">Add Contact</div>
          <div className="card-body">
            <form onSubmit={onSubmithandler}>
              <div className="form-group">
                <label htmlFor="contactName">Name:</label>
                <input
                  type="text"
                  refs="addContactInput"
                  className="form-control"
                  id="contactName"
                  name="contactName"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
              </div>
              <div className="form-group">
                <label htmlFor="contactNumber">Contact Number:</label>
                <input
                  type="number"
                  refs="addContactInput"
                  className="form-control"
                  id="contactNumber"
                  name="contactNumber"
                  value={mobile}
                  onChange={(e) => setMobile(e.target.value)}
                />
              </div>
              <div className="form-group">
                <label htmlFor="contactEmail">Email ID:</label>
                <input
                  type="email"
                  refs="addContactInput"
                  className="form-control"
                  id="contactEmail"
                  name="contactEmail"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
              <div className="form-group form-check">
                <label className="form-check-label">
                  <input
                    className="form-check-input"
                    type="checkbox"
                    name="remember"
                    checked={status}
                    onChange={(e) => setStatus(e.target.checked)}
                  />{" "}
                  is Active ?
                </label>
              </div>

              <button type="submit" className="btn btn-primary">
                Add Contact
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default connect()(AddContact);
