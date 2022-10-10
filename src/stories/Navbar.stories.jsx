import React from "react";
import { Navbar } from "./Pages/Navbar";

export default {
  title: "Component/Pages",
  component: Navbar,
};

const Template = (args) => <Navbar {...args} />;

export const NavBar = Template.bind({});
NavBar.args = {};
