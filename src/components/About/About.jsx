import React from 'react'
import './About.css'
import about_img from '../../assets/about.png'
import play_icon from '../../assets/play-icon.png'

const About = ({setPlayState}) => {

  return (
    <div className='about'>
        <div className="about-left">
            <img src={about_img} alt="" className='about-img'/>
            <img src={play_icon} alt=""  className='play-icon' onClick={()=>{setPlayState(true )}}/>
        </div>
        <div className="about-right">
            <h3>ABOUT UNIVERSITY</h3>
            <h2>Nurturing Tomorrow's Leaders Today</h2>
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Exercitationem voluptate non quibusdam modi? Alias, eveniet cupiditate at rerum nulla accusamus quos maiores ad.</p>
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Laboriosam voluptatibus expedita rerum voluptatem, facilis, repellat, porro suscipit nihil molestiae nesciunt ipsum.</p>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex nostrum temporibus hic fuga qui magni aperiam nam explicabo impedit! Deserunt, doloremque soluta. Pariatur veritatis quibusdam vel fugiat, optio saepe ab deleniti quae.</p>
        </div>
    </div>
  )
}

export default About