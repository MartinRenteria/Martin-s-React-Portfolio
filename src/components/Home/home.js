import React from "react";
import "./home.css"
import Typewriter from "typewriter-effect";


function Home() {
    return (
    <main class="homeBackground">
      <section className="intro">

        <Typewriter
        options={{ delay: 50 }}
        onInit={(typewriter) => {
          typewriter.start()
            .typeString(`Hi there, I'm Martin Renteria.<br/>A JavaScript developer<br/>based in Bellevue, WA.<br/> Check out my work! =)`)
        }}
      />
</section>
    </main>
    )
}

export default Home;