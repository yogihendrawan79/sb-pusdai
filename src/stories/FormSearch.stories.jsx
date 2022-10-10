import React from "react";
import { FormSearch } from "./Insertion/FormSearch";

export default {
  title: "Component/Insertion",
  component: FormSearch,
};

const Template = (args) => <FormSearch {...args} />;

export const FormCari = Template.bind({});
FormCari.args = {
  email: "farhankebab@gmail.com",
  kode: "qwerty12",
};
