import React from "react";
import ReactDOM from "react-dom";
import "./index.css"
import pic1 from "./images/anastasiya-pavlova-IcLqFMC3h08-unsplash.jpg"
import pic2 from "./images/anastasiya-pavlova-SW9sp2asIX8-unsplash.jpg"
import pic3 from "./images/andreas-dress-IxiCibeZC10-unsplash.jpg"

//addinf props
const Person = ({ img, name, job, children }) => {
  // using template litrals
  // const url = `https://randomuser.me/api/portraits/thumb/men/${img}.jpg`;
  return (
    <article className = "person">
      {/* <img src={url}></img> */}
      <h4>{name}</h4>
      <h4>{job}</h4>
      {children}
    </article>
  );
};

//now to create a cpmponent
const PersonList = () => {
  return (
    <div>
      <section className="person-list">
        <Person img="34" name="Elorm" job="Biomedical Engineer/Web Developer">
          <img src={pic1} alt=""></img>
        </Person>
        <Person img="22" name="Richard" job="Computer engineer">
          <img src={pic2} alt=""></img>
        </Person>
        <Person img="56" name="Chris" job="Doctor">
          {" "}
          <p>iiiuuijhygh</p> <img src={pic3} alt=""></img>{" "}
        </Person>
      </section>
      <section className="person-list">
        <Person img="34" name="Elorm" job="Biomedical Engineer/Web Developer">
          <img src={pic1} alt=""></img>
        </Person>
        <Person img="22" name="Richard" job="Computer engineer">
          <img src={pic2} alt=""></img>
        </Person>
        <Person img="56" name="Chris" job="Doctor">
          {" "}
          <p>iiiuuijhygh</p> <img src={pic3} alt=""></img>{" "}
        </Person>
      </section>

      <section className="person-list">
        <Person img="34" name="Elorm" job="Biomedical Engineer/Web Developer">
          <img src={pic1} alt=""></img>
        </Person>
        <Person img="22" name="Richard" job="Computer engineer">
          <img src={pic2} alt=""></img>
        </Person>
        <Person img="56" name="Chris" job="Doctor">
          {" "}
          <p>iiiuuijhygh</p> <img src={pic3} alt=""></img>{" "}
        </Person>
      </section>
      <section className="person-list">
        <Person img="34" name="Elorm" job="Biomedical Engineer/Web Developer">
          <img src={pic1} alt=""></img>
        </Person>
        <Person img="22" name="Richard" job="Computer engineer">
          <img src={pic2} alt=""></img>
        </Person>
        <Person img="56" name="Chris" job="Doctor">
          {" "}
          <p>iiiuuijhygh</p> <img src={pic3} alt=""></img>{" "}
        </Person>
      </section>
    </div>
  );
};

ReactDOM.render(<PersonList></PersonList>, document.getElementById("root"));