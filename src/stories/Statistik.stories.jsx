import React from "react";
import { Statistik } from "./Pages/Statistik";

export default {
  title: "Component/Pages",
  component: Statistik,
};

const Template = (args) => <Statistik {...args} />;

export const StatisticSection = Template.bind({});
StatisticSection.args = {};
