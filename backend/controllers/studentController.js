const Student = require('../models/Student');

exports.getAllStudents = async (req, res) => {
  try {
    const students = await Student.find();
    res.json(students);
  } catch (error) {
    res.status(500).json({ message: 'Server error' });
  }
};

exports.addStudent = async (req, res) => {
  const { name, age, grade } = req.body;
  try {
    const newStudent = new Student({ name, age, grade });
    await newStudent.save();
    res.json(newStudent);
  } catch (error) {
    res.status(500).json({ message: 'Server error' });
  }
};
