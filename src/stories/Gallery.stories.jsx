import React from "react";
import { Gallery } from "./Pages/Gallery";

export default {
  title: "Component/Pages",
  component: Gallery,
};

const Template = (args) => <Gallery {...args} />;

export const GallerySection = Template.bind({});
GallerySection.args = {};
