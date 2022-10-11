import React from "react";
import { Navbar } from "./Pages/Navbar";

export default {
  title: "Component/Pages",
  component: Navbar,
};

const Template = (args) => <Navbar {...args} />;

export const Header = Template.bind({});
Header.args = {};
