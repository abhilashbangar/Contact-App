import React, { useState, useEffect } from "react";
import { connect, useSelector } from "react-redux";
import { getContact, updateContact } from "../actions/index.js";
import { useHistory } from "react-router-dom";
import { useParams } from "react-router-dom";

const EditContact = (props) => {
  let history = useHistory();
  let { id } = useParams();

  const contact = useSelector((state) => state.contacts.matchForFilter);

  //save form data into state

  const [name, setName] = useState("");
  const [mobile, setMobile] = useState("");
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState("");

  const onUpdatehandler = (e) => {
    e.preventDefault();
    const newContact = Object.assign(contact, {
      contactName: name,
      mobile: mobile,
      email: email,
      status: status,
    });
    
    props.dispatch(updateContact(newContact));
    history.push("/");// on upadate redirect to homepage
  };

  useEffect(() => {
    if (contact !== null) {
      setName(contact.contactName);
      setMobile(contact.mobile);
      setEmail(contact.email);
      setStatus(contact.status);
    }
    props.dispatch(getContact(id));
  }, [contact]);

  return (
    <div className="row">
      <div className="col-md-6 mx-auto">
        <div className="card mt-5">
          <div className="card-header">Update Contact</div>
          <div className="card-body">
            <form onSubmit={onUpdatehandler}>
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
                <label htmlFor="contactEmail">Email ID :</label>
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
                Update Contact
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};


export default connect()(EditContact);
