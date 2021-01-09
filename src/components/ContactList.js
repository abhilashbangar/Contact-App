import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { deleteContact } from "../actions/index.js";
import { useDispatch } from "react-redux";
import Avatar from "react-avatar";

const ContactList = (props) => {
  const dispatch = useDispatch();
  return props.contacts.length ? (
    <div className="row">
      <div className="col-md-12 mx-auto">
        <div className="table-responsive-lg mt-5">
          <table className="table border table-hover shadow  contactTable">
            <thead className="thead-light">
              <tr>
                <th>Name</th>
                <th>Number</th>
                <th>Email</th>
                <th>Status</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {props.contacts.map((contact) => (
                <tr key={contact.id} className="contactRow">
                  <td>
                    <Avatar
                      name={contact.contactName}
                      size="38"
                      round={true}
                      className="mr-2"
                    />
                    {contact.contactName}
                  </td>
                  <td>{contact.mobile}</td>
                  <td>{contact.email}</td>
                  <td className={contact.status ? "active" : "inactive"}>
                    <span className="status_indicator"></span>
                  </td>
                  <td>
                    <Link
                      to={`EditContact/${contact.id}`}
                      className="material-icons text-dark mr-3 icon_style light"
                    >
                      edit
                    </Link>
                    <span
                      onClick={() => dispatch(deleteContact(contact.id))}
                      className="material-icons text-danger icon_style red"
                    >
                      delete
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  ) : (
    <div className="pt-5">
      <div class="alert alert-danger mt-5 text-center mt-5">
      There are no contacts in your contact book !
    </div>
    </div>
  );
};

const mapStateToProps = (state) => ({
  contacts: state.contacts.data,
});

export default connect(mapStateToProps)(ContactList);
