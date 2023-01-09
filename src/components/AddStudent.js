import React, { useState } from "react";
//import { useNavigate } from "react-router-dom";
//import axios from "axios";
import { NavLink } from "react-router-dom";

const AddStudent = ({ data, setData }) => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");

  const AddStudents = (e) => {
    e.preventDefault();
    const newStudent = {
      id: new Date().getTime().toString(),
      firstName,
      lastName,
      email,
    };
    setData([...data, newStudent]);
    console.log("data:", data);
    console.log("newStudent:", newStudent);
    console.log("setData:", setData);
    setFirstName("");
    setLastName("");
    setEmail("");
  };
  return (
    <div className="container">
      <form onSubmit={AddStudents}>
        <h1 className="text-center">Add Students</h1>
        <div className="mb-3">
          <label htmlFor="firstname" className="form-label">
            First Name:
          </label>
          <input
            type="text"
            className="form-control"
            id="firstname"
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="lastname" className="form-label">
            Last Name:
          </label>
          <input
            type="text"
            className="form-control"
            id="lastname"
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="exampleInputEmail1" className="form-label">
            Email address
          </label>
          <input
            type="email"
            className="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>

        <div>
          <button type="submit" className="btn btn-primary me-4">
            Add Student
          </button>
          <NavLink to="/">
            <button type="submit" className="btn btn-primary">
              Go Back
            </button>
          </NavLink>
        </div>
      </form>
    </div>
  );
};

export default AddStudent;
