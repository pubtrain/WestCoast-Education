import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';

const TeacherDetails = () => {
  const [teacher, setTeacher] = useState();
  const [loading, setLoading] = useState(true);
  const { id } = useParams();

  useEffect(() => {
    fetch(`http://localhost:3013/teachers`)
      .then((response) => response.json())
      .then((data) => {
        const teacher = data.find((teacher) => teacher.id === id);
        setTeacher(teacher);
        setLoading(false);
      });
  }, [id]);

  if (loading) return <div>loading</div>;

  return (
    <section className="container">
      <div className="btn-container">
        <Link to={`/teachers`}>
          <button>Gå tillbaka</button>
        </Link>
      </div>
      <div className="details-container">
        <h2 className="page-title">
          {teacher?.firstName} {teacher?.lastName}
        </h2>

        <p>Personnummer: {teacher?.socialSecurityNumber}</p>
        <p>Epost: {teacher?.email}</p>
        <p>Telefonnummer: {teacher?.phoneNumber}</p>
        <ul>
          Kompetensområden:
          {teacher?.areasOfExpertise.map((expertise) => (
            <li>{expertise}</li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default TeacherDetails;
