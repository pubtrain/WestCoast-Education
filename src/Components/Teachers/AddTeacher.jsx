import { useContext, useRef, useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import AppContext from '../Store/app-context';

const AddTeacher = ({ closeModal }) => {
  const [areasOfExpertise, setAreasOfExpertise] = useState(['']);
  const firstNameInputRef = useRef();
  const lastNameInputRef = useRef();
  const socialSecurityNumberInputRef = useRef();
  const emailInputRef = useRef();
  const phoneNumberInputRef = useRef();
  const formResetRef = useRef();
  const context = useContext(AppContext);

  const onSubmitHandler = (e) => {
    e.preventDefault();

    const id = uuidv4();
    const firstName = firstNameInputRef.current.value;
    const lastName = lastNameInputRef.current.value;
    const socialSecurityNumber = socialSecurityNumberInputRef.current.value;
    const email = emailInputRef.current.value;
    const phoneNumber = phoneNumberInputRef.current.value;

    const body = {
      id,
      firstName,
      lastName,
      socialSecurityNumber,
      email,
      phoneNumber,
      areasOfExpertise,
    };

    context.addTeacher(body);
    formResetRef.current.reset();
    closeModal();
    window.location.reload();
  };

  const handleChange = (e, index) => {
    console.log('index', index);
    areasOfExpertise[index] = e.target.value;
    console.log('areasOfExpertise', areasOfExpertise);
    setAreasOfExpertise(areasOfExpertise);
  };

  return (
    <form onSubmit={onSubmitHandler} ref={formResetRef}>
      <h2>Lägg till ny lärare</h2>
      <div className="form-control">
        <label htmlFor="firstName"></label>
        <input
          type="text"
          id="firstName"
          placeholder="Förnamn"
          ref={firstNameInputRef}
        />
      </div>
      <div className="form-control">
        <label htmlFor="lastName"></label>
        <input
          type="text"
          id="lastName"
          placeholder="Efternamn"
          ref={lastNameInputRef}
        />
      </div>
      <div className="form-control">
        <label htmlFor="socialSecurityNumber"></label>
        <input
          type="number"
          id="socialSecurityNumber"
          placeholder="Personnummer"
          ref={socialSecurityNumberInputRef}
        />
      </div>
      <div className="form-control">
        <label htmlFor="email"></label>
        <input type="text" id="email" placeholder="Epost" ref={emailInputRef} />
      </div>
      <div className="form-control">
        <label htmlFor="phoneNumber"></label>
        <input
          type="text"
          id="phoneNumber"
          placeholder="Telefonnummer"
          ref={phoneNumberInputRef}
        />
      </div>

      {areasOfExpertise.map((_, index) => {
        return (
          <div className="form-control" key={index}>
            <label htmlFor="areasOfExpertise"></label>
            <input
              onChange={(e) => handleChange(e, index)}
              type="text"
              id={index}
              placeholder="Kompetensområden"
            />
          </div>
        );
      })}

      <input
        type="button"
        value="Lägg till kompetens"
        onClick={() => setAreasOfExpertise([...areasOfExpertise, ''])}
      />

      <input type="submit" value="Lägg till lärare" />
    </form>
  );
};

export default AddTeacher;
