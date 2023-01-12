import React, { useState, useEffect } from "react";
import { NavLink, useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import { v4 as uuid } from "uuid";

const AddEdit = ({ data, setData }) => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  let [message, setMessage] = useState("");

    
  const navigate = useNavigate();

  // submit form
  const AddStudents = (e) => {
    e.preventDefault();
  };
  const submitStudent = async () => {
    message = "new data added successfully";

    await axios
      .post("http://localhost:3001/api/student", {
        id: uuid(),
        firstName,
        lastName,
        email,
      })
      .then((response) => {
        console.log("response:", response.data);
        if (!firstName || !lastName || !email) {
          window.confirm("please provide all the fields");
        } else {
          setData(response.data);
          setMessage(message);
          setFirstName("");
          setLastName("");
          setEmail("");

          navigate("/");
        }
      });
  };

  //edit - get existing record
  const { id } = useParams();
  useEffect(() => {
    if (id) {
      getSingleStudent(id);
    }
  }, [id]);

  const getSingleStudent = async(id) => {
    const response = await axios
      .get(`http://localhost:3001/api/student/${id}`)
      
        console.log("get single response:", response);
        console.log("get single response1:", response.data);
        console.log("get single response2:", response.data.student);

        setData(response.data);
    
  };

  return (
    <div className="container">
      <form onSubmit={AddStudents}>
        <h5 className="text-center">{message}</h5>
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
            Email
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
          <NavLink to="/">
            {id ? (
              <button className="btn btn-primary">Update Student</button>
            ) : (
              <button className="btn btn-primary me-5" onClick={submitStudent}>
                Add Student
              </button>
            )}
          </NavLink>
          <NavLink to="/">
            <button type="submit" className="btn btn-primary ms-5">
              Go Back
            </button>
          </NavLink>
        </div>
      </form>
    </div>
  );
};

export default AddEdit;
