import React from "react";

const EditStudent = () => {
  return (
    <div className="container">
      <form>
        <h1 className="text-center">Edit Student</h1>
        <div className="mb-3">
          <label htmlFor="firstname" className="form-label">
            First Name:
          </label>
          <input type="text" className="form-control" id="firstname" />
        </div>
        <div className="mb-3">
          <label htmlFor="lastname" className="form-label">
            Last Name:
          </label>
          <input type="text" className="form-control" id="lastname" />
        </div>
        <div className="mb-3">
          <label for="exampleInputEmail1" className="form-label">
            Email address
          </label>
          <input
            type="email"
            className="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
          />
        </div>

        <div>
          <button type="submit" className="btn btn-primary">
            Edit Student
          </button>
        </div>
      </form>
    </div>
  );
};

export default EditStudent;
