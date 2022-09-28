import React from "react";
import { useState, useRef, useEffect } from "react";
import AOS from 'aos'

import styles from "./index.module.css"
import virus from "../../assets/virus.png"
import Image from "../Image"
import John from "../../assets/john.png"
import Caroline from "../../assets/caroline.png"
import Norbert from "../../assets/norbert.png"
import Bishal from "../../assets/bishal.png"
import Vivian from "../../assets/vivian.png"
import Subtitle from "../Subtitle"
import Title from "../Title";

const team = [[John, "John Pascual"], [Caroline, "Caroline Veloso"], [Norbert, "Norbert Majer"], [Bishal, "Bishal Rai"], [Vivian, "Vivian Chinweze"]];

const delay = 3000;

function Team() {
  AOS.init({
    duration: 2000
  })
  const [index, setIndex] = useState(0);
  const timeoutRef = useRef(null);

  function resetTimeout() {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
  }

  useEffect(() => {
    resetTimeout();
    timeoutRef.current = setTimeout(
      () =>
        setIndex((prevIndex) =>
          prevIndex === team.length - 1 ? 0 : prevIndex + 1
        ),
      delay
    );

    return () => {
      resetTimeout();
    };
  }, [index]);

  

  return (
    <>
    <div data-aos="fade-up">
      <Title title={"Meet the team"} cssClass={"team-title"}/>
    </div>
    <div className="team" data-aos="zoom-in">
        <div className="slideshow">
    <div
      className="slideshowSlider"
      style={{ transform: `translate3d(${-index * 100}%, 0, 0)` }}
    >
      {team.map((backgroundColor, index) => (
        <div
          className="slide"
          key={index}
          style={{ backgroundColor }}
        >
            <div className="slide-image-div">
                <Image image={backgroundColor[0]} altVal="article 2 image goes here" cssClass={"teamImg"}/>
                <Subtitle subtitle={backgroundColor[1]} cssClass="team-member"/>
            </div>
        </div>
      ))}
    </div>

    <div className="slideshowDots">
      {team.map((_, idx) => (
        <div
          key={idx}
          className={`slideshowDot${index === idx ? " active" : ""}`}
          onClick={() => {
            setIndex(idx);
          }}
        ></div>
      ))}
    </div>
  </div>
  </div>
  </>
  );
}

export default Team