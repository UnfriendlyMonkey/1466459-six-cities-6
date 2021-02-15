import React from 'react';
import {Link} from 'react-router-dom';

const Page404 = () => {

  return (

    <main className="page__main page__main--404">
      <section className="page__404 container">
        <h1>404</h1>
        <br />
        <h2>Unfortunately, we cannot find the page you were searching for</h2>
        <br />
        <div>Try to start from our <Link to="/">main page</Link></div>
      </section>
    </main>
  );
};

export default Page404;
