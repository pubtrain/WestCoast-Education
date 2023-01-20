import { useContext, useState } from 'react';

import AddCourse from './AddCourse';
import Modal from '../UI/Modal';
import AppContext from '../Store/app-context';
import { Link } from 'react-router-dom';

const CourseList = () => {
  const [showModal, setShowModal] = useState(false);

  const context = useContext(AppContext);

  return (
    <>
      <section className="container">
        <div className="btn-container">
          <button className="btn" onClick={() => setShowModal(true)}>
            Lägg till ny kurs
          </button>
        </div>
        <h2 className="page-title">Våra Kurser</h2>
        <ul>
          {context.courses.map(({ id, title, length, startingDate }) => (
            <li key={id}>
              <p>Kurstitel: {title}</p>
              <p>Kursnummer: {id}</p>
              <p>Kurslängd: {length}</p>
              Startar: {startingDate}
              <Link to={`/course/${id}`}>
                <button className="btn">Visa detaljer</button>
              </Link>
            </li>
          ))}
        </ul>
      </section>
      {showModal && (
        <Modal
          title={'Lägg till ny kurs'}
          closeModal={() => setShowModal(false)}
          onSave={() => console.log('on save')}
        >
          <AddCourse closeModal={(isOpen) => setShowModal(isOpen)} />
        </Modal>
      )}
    </>
  );
};

export default CourseList;
