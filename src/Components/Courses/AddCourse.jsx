import { useRef, useContext } from 'react';
import { v4 as uuidv4 } from 'uuid';
import AppContext from '../Store/app-context';

const AddCourse = ({ closeModal }) => {
  const courseTitleInputRef = useRef();
  const courseLengthInputRef = useRef();
  const courseDescriptionInputRef = useRef();
  const courseStartingDateInputRef = useRef();
  const formResetRef = useRef();
  const context = useContext(AppContext);

  const onSubmitHandler = (e) => {
    e.preventDefault();

    const title = courseTitleInputRef.current.value;
    const length = courseLengthInputRef.current.value;
    const description = courseDescriptionInputRef.current.value;
    const startingDate = courseStartingDateInputRef.current.value;

    const body = {
      id: uuidv4(),
      title,
      length,
      description,
      startingDate,
    };

    context.addCourse(body);
    formResetRef.current.reset();

    closeModal(!true);
    window.location.reload();
  };

  return (
    <form onSubmit={onSubmitHandler} ref={formResetRef}>
      <h2>Lägg till ny kurs</h2>
      <div className="form-control">
        <label htmlFor="courseTitle"></label>
        <input
          type="text"
          id="courseTitle"
          placeholder="Kurstitel"
          ref={courseTitleInputRef}
        />
      </div>
      <div className="form-control">
        <label htmlFor="courseLength"></label>
        <input
          type="text"
          id="courseLength"
          placeholder="Kurslängd"
          ref={courseLengthInputRef}
        />
      </div>
      <div className="form-control">
        <label htmlFor="courseDescription"></label>
        <textarea
          id="courseDescription"
          placeholder="Kursbeskrivning"
          ref={courseDescriptionInputRef}
        />
      </div>
      <div className="form-control">
        <label htmlFor="courseStartingDate"></label>
        <input
          type="text"
          id="courseStartingDate"
          placeholder="Kursen startar"
          ref={courseStartingDateInputRef}
        />
      </div>
      <button>Lägg till kurs</button>
    </form>
  );
};

export default AddCourse;
