import React from 'react'
import TwitterIcon from "@material-ui/icons/Twitter"
import LinkedInIcon from "@material-ui/icons/LinkedIn"
import GitHubIcon from "@material-ui/icons/GitHub"
import "../styles/Home.css"


function Home() {
  return (
    <div className='home'>
        <div className='about'>
            <h2>Hi, My Name is Raju</h2>
            <div className='prompt'>
                <p>
                    A Software developer with a passion for Learning and Creating
                </p>
            
                <a href='https://twitter.com/Rajukommula0705' target="_blank" rel="noreferrer">
        <TwitterIcon /></a>


            <a href='https://www.linkedin.com/in/raju-kommula-b44024119/' target="_blank" rel="noreferrer">
        <LinkedInIcon /></a>

            <a href='https://github.com/raju1409' target="_blank" rel="noreferrer">
        <GitHubIcon /></a>
            </div>
        </div>
        <div className='skills'>
            <h1>Skills</h1>
            <ul className='list'>
                <li className='item'>
                    <h2>Front-end</h2>
                    <span>HTML CSS JavaScript React TailwindCSS  </span>
                </li>
                <li className='item'>
                    <h2>Back-end</h2>
                    <span>NodeJs MySQL </span>
                </li>
                <li className='item'>
                    <h2>Languages</h2>
                    <span> Java Python </span>
                </li>
            </ul>
        </div>
    </div>
  )
}

export default Home