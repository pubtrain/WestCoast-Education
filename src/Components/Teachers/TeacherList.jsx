import React, { useState, useContext } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import Modal from '../UI/Modal';
import AddTeacher from './AddTeacher';
import AppContext from '../Store/app-context';

const TeacherList = () => {
  const [showModal, setShowModal] = useState(false);

  const context = useContext(AppContext);

  return (
    <>
      <section className="container">
        <div className="btn-container">
          <button onClick={() => setShowModal(true)} className="btn">
            Lägg till ny lärare
          </button>
        </div>
        <h2 className="page-title">Våra lärare</h2>
        <ul>
          {context.teachers.map(
            ({
              id,
              firstName,
              lastName,
              socialSecurityNumber,
              email,
              phoneNumber,
            }) => (
              <li key={id}>
                <p className="teacher-name">
                  {firstName} {lastName}
                </p>
                <p>{socialSecurityNumber}</p>
                {email} - {phoneNumber}
                <Link to={`/teacher/${id}`}>
                  <button>Visa detaljer</button>
                </Link>
              </li>
            )
          )}
        </ul>
      </section>
      {showModal && (
        <Modal
          title={'Lägg till ny lärare'}
          closeModal={() => setShowModal(false)}
        >
          <AddTeacher closeModal={() => setShowModal(false)} />
        </Modal>
      )}
    </>
  );
};

export default TeacherList;
