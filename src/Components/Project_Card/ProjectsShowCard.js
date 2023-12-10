import React, { useRef } from "react";

import "./ProjectShowCard.css";
import { Link } from "react-router-dom";

const ProjectsShowCard = (props) => {
  const videoRef = useRef(null);

  const handleVideoInteraction = async (play) => {
    try {
      if (videoRef.current) {
        if (play) {
          await videoRef.current.play();
        } else {
          videoRef.current.pause();
        }
      }
    } catch (error) {
      // Handle the error, e.g., log or display a message
      console.error("Error during video interaction:", error.message);
    }
  };

  const handleMouseEnter = () => {
    handleVideoInteraction(true);
  };

  const handleMouseLeave = () => {
    handleVideoInteraction(false);
  };

  return (
    <div className="project_show_card">
      {/* <img
          className="project_show_card_img"
          src={props.Proj_Data.Proj_Img}
          alt="Card Img"
        /> */}
      <Link to={props.Proj_Data.Proj_path}>
        <div onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
          <video
            ref={videoRef}
            className="project_show_card_img"
            controls
            loop
            muted
          >
            <source src={props.Proj_Data.Proj_Img} type="video/mp4" />
          </video>
        </div>
        <div className="project_show_card_body">
          <h1 className="project_show_card_title">
            {props.Proj_Data.Proj_Title}
          </h1>
          <p className="project_show_card_text">{props.Proj_Data.Proj_Disc}</p>
          <p className="project_show_card_text_muted">
            <small>Click Me</small>
          </p>
        </div>
      </Link>
    </div>
  );
};

export default ProjectsShowCard;
