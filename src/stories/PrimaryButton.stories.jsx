import React from "react";
import { PrimaryButton } from "./Button/PrimaryButton";

export default {
  title: "Component/Button",
  component: PrimaryButton,
};

const Template = (args) => <PrimaryButton {...args} />;

export const PrimaryButtons1 = Template.bind({});
PrimaryButtons1.args = {
  label: "Daftar Tamu",
};

export const PrimaryButtons2 = Template.bind({});
PrimaryButtons2.args = {
  label: "Cek Status",
};
