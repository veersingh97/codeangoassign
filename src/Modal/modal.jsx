import React from "react";
import "./modal.css";

const Modal = ({ close, webModal, photoModal, mobileModal }) => {
  console.log(photoModal, webModal, mobileModal);
  return (
    <div className="modal-section">
      {photoModal && (
        <div className="modal-content">
          <h1>Adobe Photoshop CC – Essentials Training Course</h1>
          <p>Updated September 2015</p>
          <p>14.5 total hoursAll LevelsSubtitles</p>
          <h3>
            This Adobe Photoshop Essentials course will teach you Photoshop
            Retouching as well as Photoshop for graphic design.
          </h3>
          <p>
            Create their own photoshop Programs <br /> Become an experienced
            editor
            <br />
            Programmer Parse the Web and Create their own Games
          </p>
          <button className="hero-btn" onClick={() => close(false)}>
            close
          </button>
        </div>
      )}
      {webModal && (
        <div className="modal-content">
          <h1>The Complete 2023 Web Development Bootcamp </h1>
          <p>Updated September 2015</p>
          <p>14.5 total hoursAll LevelsSubtitles</p>
          <h3>
            Become a Full-Stack Web Developer with just ONE course. HTML, CSS,
            Javascript, Node, React, MongoDB, Web3 and DApps
          </h3>
          <p>
            Build 16 web development projects for your portfolio, ready to apply
            for junior developer jobs.
            <br />
            Learn the latest technologies, including Javascript, React, Node and
            even Web3 development.<br></br> After the course you will be able to
            build ANY website you want.
          </p>
          <button className="hero-btn" onClick={() => close(false)}>
            close
          </button>
        </div>
      )}
      {mobileModal && (
        <div className="modal-content">
          <h1>Full Stack Web & Mobile App Development | Mern Stack Project</h1>
          <p>Updated September 2015</p>
          <p>14.5 total hoursAll LevelsSubtitles</p>
          <h3>
            Full Stack Web Development and Mobile App Development with React JS,
            React Native, NodeJS, MongoDB | MERN Stack Projects
          </h3>
          <p>
            Dive in Mern Stack Mobile App Development, Web App Development with
            React JS and React Native<br></br>
            Learn how to build single page applications with Full stack web
            development with React JS, NodeJS, MongoDB<br></br>
            Learn to connect to an external API with ReactJS
          </p>
          <button className="hero-btn" onClick={() => close(false)}>
            close
          </button>
        </div>
      )}
    </div>
  );
};

export default Modal;
