import React, { useState, useEffect } from 'react';

const AppContext = React.createContext({
  teachers: [],
  courses: [],
  addCourse: () => {},
  addTeacher: () => {},
});

export const AppContextProvider = (props) => {
  const [teachers, setTeachers] = useState([]);
  const [courses, setCourses] = useState([]);

  useEffect(() => {
    const teacherList = async () => {
      const response = await fetch('http://localhost:3013/teachers');
      const data = await response.json();
      setTeachers(data);
    };
    const courseList = async () => {
      const response = await fetch('http://localhost:3013/courses');
      const data = await response.json();
      setCourses(data);
    };
    teacherList();
    courseList();
  }, []);

  const addCourse = (body) => {
    fetch('http://localhost:3013/courses', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(body),
    });
  };
  const addTeacher = (body) => {
    fetch('http://localhost:3013/teachers', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(body),
    });
  };

  return (
    <AppContext.Provider
      value={{
        teachers,
        courses,
        addCourse,
        addTeacher,
      }}
    >
      {props.children}
    </AppContext.Provider>
  );
};

export default AppContext;
