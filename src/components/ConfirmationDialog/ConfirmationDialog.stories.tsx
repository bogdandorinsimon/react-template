import { Box, Button, Stack } from "@mui/material";
import { Meta, StoryFn } from "@storybook/react";
import { useConfirmationDialog } from "context/ConfirmationDialogProvider/useConfirmationDialog";
import { ConfirmationDialog } from ".";

export default {
  component: ConfirmationDialog,
  title: "components/ConfirmationDialog",
  tags: ["autodocs"]
} as Meta;

const Template: StoryFn = () => {
  const { getConfirmation } = useConfirmationDialog();

  const handleOpenConfirmationClick = () => {
    getConfirmation({
      title: "Delete X",
      description: "Are you sure you want to delete X?"
    });
  };

  return (
    <Stack direction="row" height={200} gap={2}>
      <Box>
        <Button onClick={handleOpenConfirmationClick}>
          Open confirmation dialog
        </Button>
      </Box>
    </Stack>
  );
};

export const Default = Template.bind({});
