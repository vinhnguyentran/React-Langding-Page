import React from "react";
import styled from "styled-components";
// Sections
import TopNavbar from "../components/Nav/TopNavbar";
import Header from "../components/Sections/Header";
import Services from "../components/Sections/Services";
import Projects from "../components/Sections/Projects";
import Blog from "../components/Sections/Blog";
import Pricing from "../components/Sections/Pricing";
import Contact from "../components/Sections/Contact";
import Footer from "../components/Sections/Footer";
import AboutMe from "../components/Sections/AboutMe";
import Education from "../components/Sections/Education";
import Exp from "../components/Sections/Exp";
export default function Landing() {
  return (
    <BodyBg>
      <TopNavbar />
      <Header />
      <AboutMe />
      <Education />
      <Exp/>
      <Projects />
      {/* <Blog /> */}
      {/* <Pricing /> */}
      <Contact />
      <Footer />
    </BodyBg>
  );
}

const BodyBg = styled.div`
 background-repeat: "no-repeat";
 background-size: "cover"
`

