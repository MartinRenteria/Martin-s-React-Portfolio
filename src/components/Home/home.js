import React from "react";
import Typewriter from "typewriter-effect";


function Home() {
    return (
        <Typewriter
        options={{ delay: 50 }}
        onInit={(typewriter) => {
          typewriter.start()
            .typeString(`Hi there, I'm Martin Renteria.<br/>A JavaScript developer<br/>based in Bellevue, WA.`)
        }}
      />
    )
}

export default Home;