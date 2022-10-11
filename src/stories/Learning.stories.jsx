import React from "react";
import { Learning } from "./Pages/Learning";

export default {
  title: "Component/Pages",
  component: Learning,
};

const Template = (args) => <Learning {...args} />;

export const LearningSection = Template.bind({});
LearningSection.args = {};
