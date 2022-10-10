import React from "react";
import { CardKonfirmasi } from "./Output/CardKonfirmasi";

export default {
  title: "Component/Output",
  component: CardKonfirmasi,
};

const Template = (args) => <CardKonfirmasi {...args} />;

export const CardConfirm = Template.bind({});
CardConfirm.args = {};
