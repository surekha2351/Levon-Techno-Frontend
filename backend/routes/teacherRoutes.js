const express = require('express');
const { getAllTeachers, addTeacher } = require('../controllers/teacherController');
const router = express.Router();

router.get('/', getAllTeachers);
router.post('/', addTeacher);

module.exports = router;
