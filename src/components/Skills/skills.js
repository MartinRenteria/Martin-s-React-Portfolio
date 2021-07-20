import React from 'react';
import { FaHtml5, FaCss3, FaJs, FaDatabase, FaNode, FaNpm, FaBootstrap, FaReact, FaAws, FaSlack } from 'react-icons/fa';
import "./skills.css" 

function Skills() {
  return (
      <div>
      <h1>Skills and Expertises</h1>
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
  )
}
export default Skills;