import React from 'react';
import { FaHtml5, FaCss3, FaJs, FaDatabase, FaNode, FaNpm, FaBootstrap, FaReact, FaAws, FaSlack } from 'react-icons/fa';
import "./skills.css" 

function Skills() {
  return (
      <section>
      <h1 className="skills-title">Skills and Expertises</h1>
      <div className="tools">
      <ul>
    <li> <FaHtml5 /> </li>
    <li> <FaCss3 /> </li>
    <li> <FaJs /> </li>
    <li> <FaDatabase /> </li>
    <li> <FaNpm /> </li>
    <li> <FaNode /> </li>
    <li> <FaBootstrap /> </li>
    <li> <FaReact /> </li>
    <li> <FaAws /> </li>
    <li> <FaSlack /> </li>

</ul>
</div>
</section>
  )
}
export default Skills;