import React from "react";
import { About } from "./Pages/About";

export default {
  title: "Component/Pages",
  component: About,
  argTypes: {
    title: { type: "string", defaultValue: "Why is type undefined?" },
  },
};

const Template = (args) => <About {...args} />;

export const AboutSection = Template.bind({});
AboutSection.args = {};
