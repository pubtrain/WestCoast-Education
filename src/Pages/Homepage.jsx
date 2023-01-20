import React, { useEffect, useState, useContext } from 'react';
import AppContext from '../Components/Store/app-context';
const Homepage = () => {
  const context = useContext(AppContext);

  return (
    <section className="container">
      <div className="school-textinfo">
        <h2>Välkommen till framtiden</h2>
        <p className="long-text">
          Här kan du se vilka kurser vi har tillgängliga för studenter, samt
          navigera dig till kurslistan för att se fullständig information om
          kurserna, samt lägga till nya kurser.
          <br />
          <br />
          Du kan även navigera dig till lärarlistan för att se vilka lärare som
          arbetar hos oss, samt lägga till nyanställda lärare.
        </p>
      </div>
      <ul>
        {context.courses.map(({ id, title, startingDate }) => (
          <li key={id} className="list-container">
            {title}
            <br />
            Startar den: {startingDate}
          </li>
        ))}
      </ul>
    </section>
  );
};

export default Homepage;
