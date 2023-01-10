const Student = require("../models/StudentModel");

const createStudent = async (req, res) => {
  const newStudent = new Student({
    firstName: req.body.firstName,
    lastName: req.body.lastName,
    email: req.body.email,
  });
  try {
    const result = await newStudent.save();
    res.status(201).json({ result });
  } catch (err) {
    res.send(err);
  }
};
const getAllStudents = async (req, res) => {
  try {
    const student = await Student.find({});
    res.status(200).json({ student });
  } catch (err) {
    res.send(err);
  }
};
const getSingleStudent = async (req, res) => {
  try {
    const student = await Student.findById(req.params.id);
    res.status(200).json({ student });
  } catch (err) {
    res.send(err);
  }
};

const updateStudent = async (req, res) => {
  try {
    const student = await Student.findByIdAndUpdate(req.params.id);
    student.firstName = req.body.firstName;
    student.lastName = req.body.lastName;
    student.email = req.body.email;
    const result = await student.save();
    if (!student) {
      res.send("no student with this id");
    }

    res.status(200).json({ result });
  } catch (err) {
    res.send(err);
  }
};

const deleteStudent = async (req, res) => {
  try {
    const student = await Student.deleteById(req.params.id);
    res.status(200).json({ student });
  } catch (err) {
    res.send(err);
  }
};

module.exports = {
  createStudent,
  getAllStudents,
  getSingleStudent,
  updateStudent,
  deleteStudent,
};
