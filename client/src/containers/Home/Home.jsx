import React from "react";
import "./Home.css";

const Home = () => {
  return (
    <div className="container ">
      <br></br>
      <br></br>
      <div className="notification is-dark homediv">
        <label className="label is-large">
          <i className="fas fa-book"></i> Book-my-Book
          </label>
        <p className="is-light is-medium">
          Have extra books lying around or want some new books to read? Our platform
          allows you to post your books and borrow from your college-mates!
          You post your books and are able to search through books posted in
          your college. You then create a social contract with the other user
          swapping books. Once communication begins you’re ready to enjoy your
          new books after pick up!
        </p>
        <br />
        <div className="buttons is-centered">
          <a className="button is-success is-medium" href="/login">Login</a>
          <a className="button is-success is-medium is-inverted is-outlined" id="signupbutton" href="/signup">Sign up</a>
        </div>
      </div>
    </div>
  );
};

export default Home;
