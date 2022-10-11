import React from "react";
import { Hero } from "./Pages/Hero";

export default {
  title: "Component/Pages",
  component: Hero,
};

const Template = (args) => <Hero {...args} />;

export const HeroSection = Template.bind({});
HeroSection.args = {};
