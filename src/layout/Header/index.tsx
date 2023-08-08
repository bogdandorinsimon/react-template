import { AppBar, Box, Button, Toolbar, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";
import AppLogo from "assets/icons/svg/AppLogo";
import useThemeContext from "context/ThemeContextProvider/useThemeContext";
import { Page } from "models/layout";
import { ROUTER_PATH } from "routes/AppRoutes";
import sxStyles from "./styles";

const PAGES: Page[] = [
  {
    title: "Inventory",
    link: ROUTER_PATH.INVENTORY
  },
  {
    title: "Leads",
    link: ROUTER_PATH.LEADS
  },
  {
    title: "Customers",
    link: ROUTER_PATH.CUSTOMERS
  }
];

const Header = () => {
  const classes = sxStyles();
  const navigate = useNavigate();
  const { theme, setTheme } = useThemeContext();

  const handlePageClick = (page: Page) => {
    navigate(page.link);
  };

  const renderLogoTitle = () => (
    <>
      <AppLogo />
      <Typography
        variant="h6"
        noWrap
        component="a"
        onClick={() => {
          navigate(ROUTER_PATH.HOME);
        }}
        sx={classes.logoText}
      >
        react-query
      </Typography>
    </>
  );

  const renderPageItems = () =>
    PAGES.map((page) => (
      <Button
        key={page.title}
        onClick={() => handlePageClick(page)}
        sx={classes.pageButton}
      >
        {page.title}
      </Button>
    ));

  const renderThemeSwitch = () => (
    <Button
      onClick={() => {
        const newTheme = theme === "light" ? "dark" : "light";

        setTheme(newTheme);
      }}
      sx={classes.pageButton}
    >
      {theme}
    </Button>
  );

  return (
    <AppBar position="static">
      <Box sx={classes.container}>
        <Toolbar disableGutters>
          {renderLogoTitle()}
          {renderPageItems()}
          {renderThemeSwitch()}
        </Toolbar>
      </Box>
    </AppBar>
  );
};

export default Header;
