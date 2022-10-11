import React from "react";
import { Agenda } from "./Pages/Agenda";

export default {
  title: "Component/Pages",
  component: Agenda,
};

const Template = (args) => <Agenda {...args} />;

export const AgendaSection = Template.bind({});
AgendaSection.args = {};
