import Hero1 from "../components/Hero1";
import Hero2 from "../components/Hero2";
import React from "react";
import { ScrollToTopOnMount, SectionsContainer, Section } from "react-fullpage";
import Carousel from "../components/carousel";
import Newsletter from "../components/newsletter";

// <link rel="stylesheet" href="./test.css" />;
function Landing() {
  let options = {
    sectionClassName: "section",
    anchors: ["sectionOne", "sectionTwo", "sectionThree"],
    scrollBar: false,
    navigation: true,
    verticalAlign: false,
    sectionPaddingTop: "50px",
    sectionPaddingBottom: "50px",
    arrowNavigation: true,
  };
  return (
    <>
      <ScrollToTopOnMount />
      <SectionsContainer {...options}>
        <Section>
          teeeeeeeeeeeeeeeeeeeeeeeeeeeeeesy
          <Hero2 />
        </Section>
        <Section>
          <Hero1 />
        </Section>

        <Section>
          <Newsletter />
        </Section>
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
