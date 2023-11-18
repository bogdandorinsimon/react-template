import { Stack, Box, Button } from "@mui/material";
import { Meta, StoryFn } from "@storybook/react";
import { CustomSnackbar } from ".";
import { useSnackbar } from "../../context/SnackbarProvider/useSnackbar";

export default {
  component: CustomSnackbar,
  title: "components/CustomSnackbar",
  tags: ["autodocs"]
} as Meta;

const Template: StoryFn = () => {
  const { openSnackbar } = useSnackbar();

  const handleSuccessSnackbarClick = () => {
    openSnackbar({
      type: "success",
      title: "Title",
      message: "This is the success message."
    });
  };

  const handleErrorSnackbarClick = () => {
    openSnackbar({
      type: "error",
      title: "Title",
      message: "This is the error message."
    });
  };

  const handleWarningSnackbarClick = () => {
    openSnackbar({
      type: "warning",
      title: "Title",
      message: "This is the warning message."
    });
  };

  const handleInfoSnackbarClick = () => {
    openSnackbar({
      type: "info",
      title: "Title",
      message: "This is the info message."
    });
  };

  return (
    <Stack direction="row" height={200} gap={2}>
      <Box>
        <Button color="success" onClick={handleSuccessSnackbarClick}>
          Show Success Snackbar
        </Button>
      </Box>
      <Box>
        <Button color="error" onClick={handleErrorSnackbarClick}>
          Show Error Snackbar
        </Button>
      </Box>
      <Box>
        <Button color="warning" onClick={handleWarningSnackbarClick}>
          Show Warning Snackbar
        </Button>
      </Box>
      <Box>
        <Button color="info" onClick={handleInfoSnackbarClick}>
          Show Info Snackbar
        </Button>
      </Box>
    </Stack>
  );
};

export const Default = Template.bind({});
