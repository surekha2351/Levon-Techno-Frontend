import React, { useEffect, useState } from 'react';
import axios from 'axios';

function TeacherList() {
  const [teachers, setTeachers] = useState([]);

  useEffect(() => {
    const fetchTeachers = async () => {
      try {
        const res = await axios.get('http://localhost:5000/api/teachers');
        setTeachers(res.data);
      } catch (err) {
        console.error(err);
      }
    };
    fetchTeachers();
  }, []);

  return (
    <div>
      <h2>Teacher List</h2>
      <ul>
        {teachers.map((teacher) => (
          <li key={teacher._id}>{teacher.name}</li>
        ))}
      </ul>
    </div>
  );
}

export default TeacherList;
