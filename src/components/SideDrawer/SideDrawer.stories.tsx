import { Box, Button, Stack, Typography } from "@mui/material";
import { Meta, StoryFn } from "@storybook/react";
import { useSideDrawer } from "context/SideDrawerProvider/useSideDrawer";
import { SideDrawer } from ".";

export default {
  component: SideDrawer,
  title: "components/CustomDrawer",
  tags: ["autodocs"]
} as Meta;

const Template: StoryFn = () => {
  const { openSideDrawer, closeSideDrawer } = useSideDrawer();

  const handleOpenSideDrawer = () => {
    openSideDrawer({
      title: "Some title",
      content: (
        <Box p={16}>
          <Typography variant="h1">This is an empty Drawer.</Typography>
        </Box>
      )
    });
  };

  return (
    <Stack>
      <Button onClick={handleOpenSideDrawer}>Open Drawer</Button>
      <Button onClick={closeSideDrawer}>Close Drawer</Button>
    </Stack>
  );
};

export const Default = Template.bind({});
