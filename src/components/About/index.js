import { useState, useEffect } from 'react';
import AnimatedLetters from '../AnimatedLetters'
import './index.scss'
import React from 'react'
import Snowfall from 'react-snowfall';
import logo from './logo.svg';
import resume from '../../assets/images/DennisHickoxResume.pdf';
import AWS from '../../assets/images/awsTraining.pdf';
import GT from '../../assets/images/Hickox.pdf';

const About = () => {
  
  const [letterClass, setLetterClass] = useState('text-animate');
  

  useEffect(() => {
      const timer = setTimeout(() => {
          setLetterClass('text-animate-hover');
      }, 3000);

      return () => {
          clearTimeout(timer);
      }
  });

  useEffect(() => {
     
  }, []);
  

  return (
    <>
      <div className="container about-page">
        <div className="text-zone">
          <h1>
            <AnimatedLetters
              letterClass={letterClass}
              strArray={['A', 'b', 'o', 'u', 't', ' ', 'm', 'e']}
              idx={15}
            />
          </h1>
          <p>
          <a href={resume} target="_blank"
            rel="noreferrer">Resume</a><span>  </span><a href={AWS} target="_blank"
            rel="noreferrer">Amazon</a> <span>   </span><a href={GT} target="_blank"
            rel="noreferrer">Georgia Tech</a>    </p>
          <p>
          Enthusiastic, detail oriented Junior Software Engineer looking to break into the tech industry. Excited and passionate about collaborating in a fast-paced, cutting-edge agile work environment that can fully utilize my experience working with React.js, Node.js, SQL, and Javascript in a cloud based environment like Amazon Web Services. 
          </p>
          <p align="LEFT">
          Quick learner, highly adaptable when developing new and emerging technologies using agile methodology with an end to end understanding of business use cases.
          </p>
          <h1>
            <AnimatedLetters
              letterClass={letterClass}
              strArray={['S', 'k', 'i', 'l', 'l', 's', ' ', '&', ' ', 'E', 'x', 'p', 'e', 'r', 'i', 'e', 'n', 'c', 'e']}
              idx={20}
            />
          </h1>
          <div>
         <p>Front end programming languages HTML, Javascript, React, SASS and CSS</p> 
         <p>Version control systems, Git and GitHub</p> 
         <p>APIs like REST and SOAP as well as protocol like HTTP</p> 
         <p>Database storage solutions like JSON, SQL, and NoSQL</p> 
         <p>Graphic design and visual communications skills</p> 
         <p>Troubleshoot user and system issues, providing training, assistance, and solutions for end users</p> 
         <p>Deep functional understanding of business process on the Salesforce platform that can assist users with functional
            issues and requests</p> 
         <p>Creating and maintaining Reports, Dashboards, fields, assignment rules, validation rules, page layouts, flows and
            process builder</p> 
         <p>Setting up new users, profiles, permission sets and roles, Ensuring data integrity and security</p> 
         <p>Configure customized solutions within the SFDC platform to support critical business functions and meet project
            objectives and client requirements.</p> 
          </div>
          
        </div>
        </div>
        <div className="">
        <Snowfall color="#7cc5d9" style={{opacity: '.4' }} snowflakeCount={100}/>

        
          <div className="App-logo">
          <div><img src={logo} className="App-logo" alt="logo" /></div>
            
          </div>
        </div>
      
    </>
  )
}

export default About;
