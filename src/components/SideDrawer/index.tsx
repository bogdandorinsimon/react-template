import { Box, Drawer, IconButton, Stack, Typography } from "@mui/material";
import { CloseIcon } from "assets/icons/svg/common";
import { CustomIcon } from "components/CustomIcon";
import { SideDrawerOptions } from "models/components";
import { sxStyles } from "./styles";

export type Props = SideDrawerOptions & {
  open: boolean;
  onClose: () => void;
};

export const SideDrawer = ({ open, onClose, content, title }: Props) => {
  const classes = sxStyles();

  const renderHeader = () => (
    <Stack sx={classes.header}>
      <Typography variant="h2">{title}</Typography>
      <IconButton onClick={onClose} size="small">
        <CustomIcon component={CloseIcon} color="black" />
      </IconButton>
    </Stack>
  );

  return (
    <Drawer anchor="right" open={open} onClose={onClose}>
      <Stack sx={classes.drawerContainer}>
        {renderHeader()}
        <Box sx={classes.content}>{content}</Box>
      </Stack>
    </Drawer>
  );
};
