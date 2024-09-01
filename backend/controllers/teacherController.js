const Teacher = require('../models/Teacher');

exports.getAllTeachers = async (req, res) => {
  try {
    const teachers = await Teacher.find();
    res.json(teachers);
  } catch (error) {
    res.status(500).json({ message: 'Server error' });
  }
};

exports.addTeacher = async (req, res) => {
  const { name, subject } = req.body;
  try {
    const newTeacher = new Teacher({ name, subject });
    await newTeacher.save();
    res.json(newTeacher);
  } catch (error) {
    res.status(500).json({ message: 'Server error' });
  }
};
