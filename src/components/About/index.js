import React from "react";

import Hero from "./Hero";
import Partners from "./Partners";
import YouTube from "./YouTube";
import Skills from "./Skills";

function index() {
  return (
    <div id="about">
      <Hero />
      <Partners />
      <YouTube />
      <Skills />
    </div>
  );
}

export default index;
