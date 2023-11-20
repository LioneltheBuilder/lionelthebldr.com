import React from "react";
import {
  AboutSection,
  ArticlesSection,
  ContactSection,
  HeroSection,
  InterestsSection,
  Page,
  ProjectsSection,
  Seo,
} from "gatsby-theme-portfolio-minimal";

export default function IndexPage() {
  return (
    <>
      <Seo title="Lionel The Builder" />
      <Page useSplashScreenAnimation>
        <HeroSection sectionId="hero" />
        <AboutSection sectionId="about" heading="About" />
        <InterestsSection sectionId="details" heading="Details" />
        <ProjectsSection sectionId="Projects" heading="Projects I've Built" />
        <ContactSection sectionId="github" heading="Contact/Follow Me ^.^" />
      </Page>
    </>
  );
}
