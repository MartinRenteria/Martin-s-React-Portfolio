import React from "react";
import './experience.css';

function Experience() {
    return (
<section>
<h1 className="skills-title">Experiences</h1>
<div class="timeline"> 
  <div class="timeline__event  animated fadeInUp delay-3s timeline__event--type1">
    <div class="timeline__event__icon ">
      <i class="lni-cake"></i>

    </div>
    <div class="timeline__event__date">
      09-18-2021
    </div>
    <div class="timeline__event__content ">
      <div class="timeline__event__title">
        Verizon Web Development Apprenticeship
      </div>
      <div class="timeline__event__description">
        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Vel, nam! Nam eveniet ut aliquam ab asperiores, accusamus iure veniam corporis incidunt reprehenderit accusantium id aut architecto harum quidem dolorem in!</p>
      </div>
    </div>
  </div>
  <div class="timeline__event animated fadeInUp delay-2s timeline__event--type2">
    <div class="timeline__event__icon">
      <i class="lni-burger"></i>

    </div>
    <div class="timeline__event__date">
      06-15-2021
    </div>
    <div class="timeline__event__content">
      <div class="timeline__event__title">
        Generation USA
      </div>
      <div class="timeline__event__description">
        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Vel, nam! Nam eveniet ut aliquam ab asperiores, accusamus iure veniam corporis incidunt reprehenderit accusantium id aut architecto harum quidem dolorem in!</p>
      </div>
    </div>
  </div>
  <div class="timeline__event animated fadeInUp delay-1s timeline__event--type3">
    <div class="timeline__event__icon">
      <i class="lni-slim"></i>

    </div>
    <div class="timeline__event__date">
      10-5-2020
    </div>
    <div class="timeline__event__content">
      <div class="timeline__event__title">
        Univeristy of Washington Coding Bootcamp 
      </div>
      <div class="timeline__event__description">
        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Vel, nam! Nam eveniet ut aliquam ab asperiores, accusamus iure veniam corporis incidunt reprehenderit accusantium id aut architecto harum quidem dolorem in!</p>
      </div>

    </div>
  </div>
</div>  
</section>
        )
}

export default Experience;