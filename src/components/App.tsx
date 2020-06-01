import React, { useState } from 'react';
import {
  BrowserRouter as Router, Link, Route, Switch,
} from 'react-router-dom';
import {
  CssBaseline,
  Divider,
  Fade,
  IconButton,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  ThemeProvider,
  Toolbar,
  useMediaQuery,
} from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';
import { makeStyles } from '@material-ui/core/styles';
import theme from '../theme';
import DrawerMenu from './DrawerMenu';
import { drawerWidth, tabs } from '../Constants';
import Logo from './Logo';
import Shift from './Shift';

const useStyles = makeStyles({
  content: {
    padding: theme.spacing(3),
    height: `${90}vh`,
  },
  logo: {
    paddingRight: theme.spacing(2),
    fontFamily: 'Shrikhand, Roboto',
  },
});


const App: React.FC = () => {
  const [drawerOpen, handleDrawerOpen] = useState<boolean>(false); // drawer State
  const classes = useStyles();
  const isXsDevice = useMediaQuery(theme.breakpoints.down('xs')); // if device screen with is

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Router>
        <DrawerMenu drawerOpen={drawerOpen} handleDrawerClose={() => handleDrawerOpen(false)}>
          <List>
            {tabs.map((tab) => (
              <ListItem key={tab.path} button component={Link} to={tab.path}>
                <ListItemIcon>
                  <tab.icon />
                </ListItemIcon>
                <ListItemText primary={tab.label} />
              </ListItem>
            ))}
          </List>
        </DrawerMenu>
        <Shift
          on={isXsDevice ? false : drawerOpen}
          method="margin"
          amount={{ x: `${drawerWidth}` }}
          direction="right"
        >
          <header>
            <Toolbar>
              <Fade in={!drawerOpen}>
                <IconButton
                  color="inherit"
                  aria-label="open drawer"
                  onClick={() => handleDrawerOpen(true)}
                >
                  <MenuIcon />
                </IconButton>
              </Fade>
              <Shift
                on={isXsDevice ? false : drawerOpen}
                method="transform"
                amount={{ x: `${-36}px` }}
                direction="horizontal"
              >
                <Logo className={classes.logo}>
                  Portfolio
                </Logo>
              </Shift>
            </Toolbar>
          </header>
          <Divider />
          <main
            className={classes.content}
          >
            <Switch>
              {
                  tabs.map((tab) => (
                    <Route
                      path={tab.path}
                      key={tab.path}
                      exact
                      component={tab.component}
                    />
                  ))
                }
            </Switch>
          </main>
        </Shift>
      </Router>
    </ThemeProvider>
  );
};


export default App;
