import React from "react";
import { FormPendataan } from "./Insertion/FormPendataan";

export default {
  title: "Component/Insertion",
  component: FormPendataan,
};

const Template = (args) => <FormPendataan {...args} />;

export const FormData = Template.bind({});
FormData.args = {};
