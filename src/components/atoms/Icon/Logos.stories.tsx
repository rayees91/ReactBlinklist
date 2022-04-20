import React from "react";
import Logos from './Logos'
import { ComponentMeta, ComponentStory } from "@storybook/react";

import DropdownIcon from "../../../images/organisms/drop.png";
import Blinklist from "../../../images/organisms/Blinklist.svg";

export default{
    title: 'Atoms/Logos',
    component: Logos
} as ComponentMeta<typeof Logos>;

const Template: ComponentStory<typeof Logos> = args => (
    <Logos {...args} />
);
export const Search = Template.bind({});
Search.args = {
    image: Blinklist,
};
export const Drop = Template.bind({});
Drop.args = {
    image: DropdownIcon,
};
