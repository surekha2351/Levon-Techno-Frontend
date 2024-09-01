import React, { useEffect, useState } from 'react';
import axios from 'axios';

function StudentList() {
  const [students, setStudents] = useState([]);

  useEffect(() => {
    const fetchStudents = async () => {
      try {
        const res = await axios.get('http://localhost:5000/api/students');
        setStudents(res.data);
      } catch (err) {
        console.error(err);
      }
    };
    fetchStudents();
  }, []);

  return (
    <div>
      <h2>Student List</h2>
      <ul>
        {students.map((student) => (
          <li key={student._id}>{student.name}</li>
        ))}
      </ul>
    </div>
  );
}

export default StudentList;
