import Hero from "../components/Hero";
import HeroTow from "../components/HeroTow";
import Team from "../components/Team";
import React from "react";
import {
  ScrollToTopOnMount,
  SectionsContainer,
  Section,
  Header,
} from "react-fullpage";
import Carousel from "../components/carousel";
import Newsletter from "../components/Newsl";
import Navbar from "./../components/Navbar";

// <link rel="stylesheet" href="./test.css" />;
function Landing() {
  let options = {
    sectionClassName: "section",
    anchors: ["sectionOne", "sectionTwo", "sectionThree", "sectionFour"],
    scrollBar: false,
    navigation: true,
    verticalAlign: false,
    sectionPaddingTop: "0px",
    sectionPaddingBottom: "50px",
    arrowNavigation: true,
    ScrollToTopOnMount: true,
  };
  return (
    <>
      <Header>{<Navbar />}</Header>
      <ScrollToTopOnMount />
      <SectionsContainer {...options}>
        <Section>{<HeroTow />}</Section>
        <Section>{<Hero />}</Section>
        <Section>{<Team />}</Section>
        <Section>{<Newsletter />}</Section>
      </SectionsContainer>
    </>
  );
}

export default Landing;
{
  /*     //to fixed header and footer
      <Header>
        <a href="#sectionOne">Section One</a>
        <a href="#sectionTwo">Section Two</a>
        <a href="#sectionThree">Section Three</a>
      </Header>
      <Footer>
        <a href="">Dcoumentation</a>
        <a href="">Example Source</a>
        <a href="">About</a>
</Footer> */
}
