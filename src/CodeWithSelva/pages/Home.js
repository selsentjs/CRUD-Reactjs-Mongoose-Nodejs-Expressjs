import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import axios from "axios";

const Home = ({ data, setData }) => {
  useEffect(() => {
    getStudents();
  }, []);

  const getStudents = async () => {
    const response = await axios.get("http://localhost:3001/api/student");
    if (response.status === 200) {
      setData(response.data.student);
    }
    console.log("response.data.student:", response.data.student);
  };

  // delete Student

  const deleteStudent = async (id) => {
    if (window.confirm("Are you sure that you want to delete?")) {
      const response = await axios.delete(
        `http://localhost:3001/api/student/${id}`
      );
      if (response.status === 200) {
        getStudents();
      }
    }
  };

  return (
    <div className="container p-5">
      <table className="table">
        <thead>
          <tr>
            <th scope="col">Id</th>
            <th scope="col">First Name</th>
            <th scope="col">Last Name</th>
            <th scope="col">Email</th>
            <th scope="col">Actions</th>
          </tr>
        </thead>
        <tbody>
          {data.length > 0 ? (
            data?.map((item) => {
              return (
                <>
                  <tr key={item._id}>
                    <td>{item._id}</td>
                    <td>{item.firstName}</td>
                    <td>{item.lastName}</td>
                    <td>{item.email}</td>
                    <td>
                      <NavLink to={`/update/${item._id}`}>
                        <button className="btn btn-success me-2">Edit</button>
                      </NavLink>
                      <button
                        className="btn btn-warning me-2"
                        onClick={() => deleteStudent(item._id)}
                      >
                        Delete
                      </button>
                      <NavLink to={`/view/${item._id}`}>
                        <button className="btn btn-info me-2">View</button>
                      </NavLink>
                    </td>
                  </tr>
                </>
              );
            })
          ) : (
            <h3>No data available</h3>
          )}
        </tbody>
      </table>
    </div>
  );
};

export default Home;
