import { Meta, StoryObj } from "@storybook/react";
import { LoadingIndicator } from ".";

export default {
  component: LoadingIndicator,
  title: "components/LoadingIndicator",
  tags: ["autodocs"]
} as Meta;

type DefaultStory = StoryObj<typeof LoadingIndicator>;

export const DefaultState: DefaultStory = {
  args: {}
};
