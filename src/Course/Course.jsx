import React, { useState } from "react";
import "./Course.css";
import Modal from "../Modal/modal";
import Photo1 from "../photo1.png";
import Photo2 from "../photo2.jpg";
import Photo3 from "../photo3.png";

const Course = () => {
  const [showModal, setShowModal] = useState(false);
  const [photoModal, setPhotoModal] = useState(false);
  const [webModal, setWebModal] = useState(false);
  const [mobileModal, setMobileModal] = useState(false);

  const photoModalHandler = () => {
    setShowModal(true);
    setPhotoModal(true);
    setMobileModal(false);
    setWebModal(false);
  };
  const webModalHandler = () => {
    setShowModal(true);
    setWebModal(true);
    setPhotoModal(false);
    setMobileModal(false);
  };
  const mobileModalHandler = () => {
    setShowModal(true);
    setMobileModal(true);
    setWebModal(false);
    setPhotoModal(false);
  };
  return (
    <section className="course-section">
      <div className={showModal ? "course active": ""}>
        <h2 className="course-title">Popular Courses</h2>
        <div className="course-grid">
          <div className="course-conatiner" onClick={photoModalHandler}>
            <img className=" course-img" src={Photo1} alt="photoshop"></img>
            <p className="category">Photoshop</p>
            <h4 className="course-name">
              Wordpress theme development from scratch
            </h4>
            <p className="enrolled">1000+ students</p>
            <p className="score">$29</p>
            <p className="rating">4.9 Rating (569)</p>
          </div>
          <div className="course-conatiner" onClick={webModalHandler}>
            <img className=" course-img" src={Photo2} alt="web"></img>
            <p className="category">Web Dev</p>
            <h4 className="course-name">
              Web Application design step by step from scratch
            </h4>
            <p className="enrolled">1500+ students</p>
            <p className="score">$69</p>
            <p className="rating">4.8 Rating (927)</p>
          </div>
          <div className="course-conatiner" onClick={mobileModalHandler}>
            <img className=" course-img" src={Photo3} alt="mobile"></img>
            <p className="category">Mobile Dev</p>
            <h4 className="course-name">
              Mobile App design step by step from scratch
            </h4>
            <p className="enrolled">2000+ students</p>
            <p className="score">$49</p>
            <p className="rating">4.3 Rating (173)</p>
          </div>
        </div>
        <div className="see-all">
          <a href="/">See All Courses &rarr;</a>
        </div>
      </div>
      {showModal && (
        <Modal
          show={showModal}
          close={setShowModal}
          webModal={webModal}
          photoModal={photoModal}
          mobileModal={mobileModal}
        />
      )}
    </section>
  );
};

export default Course;
