import React from "react";
import './experience.css';
import "animate.css"

function Experience() {
    return (
<section>
<h1 className="#experience-title">Experiences</h1>
<div class="timeline"> 
  <div class="timeline__event  animated fadeInUp delay-3s timeline__event--type1">
    <div class="timeline__event__icon ">
    </div>
    <div class="timeline__event__date">
      09-18-2021
    </div>
    <div class="timeline__event__content ">
      <div class="timeline__event__title">
        Verizon Web Development Apprenticeship
      </div>
      <div class="timeline__event__description">
        <p>
        A 12 month software engineering apprenticeship with Verizon in partnership with Multiverse. 
        </p>
      </div>
    </div>
  </div>
  <div class="timeline__event animated fadeInUp delay-2s timeline__event--type2">
    <div class="timeline__event__icon">
    </div>
    <div class="timeline__event__date">
      06-15-2021
    </div>
    <div class="timeline__event__content">
      <div class="timeline__event__title">
        Generation USA
      </div>
      <div class="timeline__event__description">
        <p>
        A 3 month bootcamp in software development to learn the technical and soft skills needed to be successful in a career in software engineering.
        </p>
      </div>
    </div>
  </div>
  <div class="timeline__event animated fadeInUp delay-1s timeline__event--type3">
    <div class="timeline__event__icon">
    </div>
    <div class="timeline__event__date">
      10-5-2020
    </div>
    <div class="timeline__event__content">
      <div class="timeline__event__title">
        Univeristy of Washington Coding Bootcamp 
      </div>
      <div class="timeline__event__description">
        <p>
          Studied and practiced a curriculum based on HTML5, CSS3, JavaScript, jQuery, Express.js, React.js, Node.js, progressive web apps, agile methodology, computer science, database theory, MongoDB, MySQL, Git, and more.
          </p>
      </div>
    </div>
  </div>
</div>
</section>
        )
}

export default Experience;