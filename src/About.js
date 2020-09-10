import React from "react";
import web from "../src/images/zx.png";
import Common from "./Common";

const About = (props) => {
  return (
    <>
      <Common
        name="Welcome to About Page"
        imgsrc={web}
        visit="/contact"
        btname="Contact Here"
      />
    </>
  );
};

export default About;

