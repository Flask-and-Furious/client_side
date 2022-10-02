import { useNavigate } from "react-router-dom";
import React, { useState, useContext, useEffect } from "react";

import { Context } from "../../Context";
import AOS from 'aos'

import { Button, Image, Subtitle, Title, HR, Team } from "../../components";
import home from "../../assets/home.jpg";
import article1 from "../../assets/article1.jpg"
import snippet1 from "../../assets/snippet1.png"
import coding_girl from "../../assets/coding_girl.jpg"
import virus from "../../assets/virus.png"


function Home() {
  AOS.init({
    duration: 2000
  })
  const { storedSessionUser, setStoredSessionUser } = useContext(Context);
  const navigateTo = useNavigate()
  const { user } = useContext(Context);

  function handleNavigation() {
    if (user) {

      navigateTo('/dashboard')
    }
    else {
      navigateTo('/login')
    }
  }
 
  return (
    <>
      <div className="home-title-container">
        <div className="left-title">
          <div data-aos="zoom-in">
            <div className="mobile-div">
              <Image image={virus} altVal="bug" cssClass={"mobileImg"}/>
            </div>
            <Title cssClass={"title-h1"} title="Bug Basher" />

            {/* This below is just an extra space */}
            <div style={{height: '30px', opacity: '0'}}>P</div>
            
            <Subtitle subtitle="Develop your coding skills" />
            <Subtitle subtitle="via debugging!" />
            <div className="btn-div">

            <Button text="Start learning" cssClass={"play"} handleClickEvent={(user)=> {handleNavigation(user)}}/>
            </div>
          </div>
        </div>
        <div className="right-title" data-aos="zoom-in-left">
          <Image image={home} altVal="hero image goes here" cssClass={"rightImg"}/>
        </div>
      </div>
      <div className="article1-container">
        <div data-aos="zoom-in-right">
          <Image image={article1} altVal="article 1 image goes here" cssClass={"rightImg"} />
        </div>
        <div className="mobile">
        <div data-aos="zoom-in">
          <Subtitle subtitle="Innovative way of learning" />
          <p><br/>There are several options to learn how to code. <br/><br/>Bug Basher<sup>&copy;</sup> offers a unique learning method for evolving your skills.</p>
        </div>
        </div>
      </div>
      <div><HR /></div>
      <div className="article2-container">
    
        <div data-aos="fade-up" >

          <Subtitle subtitle="Write vs. read" />
          <p>Do you know the basics of Python or JavaScript?<br/>Are you comfortable with solving basic or complicated problems by writing your codes from scratch? Take a look at this code snippet.<br/> How quickly could you find and fix the bugs in this code?</p>
        </div>
        <div data-aos="zoom-in-left">
          <Image image={snippet1} altVal="article 2 image goes here" cssClass={"snippets"}/>
        </div>
    
      </div>
      <div><HR /></div>
      <div className="article1-container">
        
        <div data-aos="zoom-in-right">
          <Image image={coding_girl} altVal="article 1 image goes here" cssClass={"snippets"} />
        </div>
        <div data-aos="fade-up" >
          <Subtitle subtitle="Different mindset" />
          <p>Writing code from scratch and debugging existing code requires different approach and mindset.<br/>Many developers are amending and debugging existing codes on daily basis. Bug Basher<sup>&copy;</sup> will help you to master this skill.</p>
        </div>
      </div>
      <div><HR /></div>
      <Team />
      <div><HR /></div>
    </>
  );
}

export default Home;
