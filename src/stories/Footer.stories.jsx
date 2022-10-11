import React from "react";
import { Footer } from "./Pages/Footer";

export default {
  title: "Component/Pages",
  component: Footer,
};

const Template = (args) => <Footer {...args} />;

export const FooterSection = Template.bind({});
FooterSection.args = {};
