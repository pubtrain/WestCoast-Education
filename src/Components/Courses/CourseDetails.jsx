import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';

const CourseDetails = () => {
  const [course, setCourse] = useState();
  const [loading, setLoading] = useState(true);
  const { id } = useParams();

  useEffect(() => {
    fetch(`http://localhost:3013/courses`)
      .then((response) => response.json())
      .then((data) => {
        const course = data.find((course) => course.id === id);
        setCourse(course);
        setLoading(false);
      });
  }, [id]);

  if (loading) return <div>loading</div>;

  return (
    <section className="container">
      <div className="btn-container">
        <Link to={`/courses`}>
          <button>Gå tillbaka</button>
        </Link>
      </div>
      <div className="details-container">
        <h2 className="page-title">{course?.title}</h2>
        <p>Kursnummer: {course?.id}</p>
        <p>Kursens längd: {course?.length}</p>
        <p>Kursen startar: {course?.startingDate}</p>
        <p>Beskrivning: {course?.description}</p>
      </div>
    </section>
  );
};

export default CourseDetails;
