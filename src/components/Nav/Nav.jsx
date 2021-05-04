import React, {useState} from 'react';
import { Link } from 'react-router-dom';
import { MdClose } from "react-icons/md"
import { FiMenu } from "react-icons/fi"
import LogOutButton from '../LogOutButton/LogOutButton';
import './Nav.css';
import {useSelector} from 'react-redux';

import clsx from 'clsx';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import CssBaseline from '@material-ui/core/CssBaseline';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import List from '@material-ui/core/List';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import MailIcon from '@material-ui/icons/Mail';
import HomeIcon from '@material-ui/icons/Home';
import StarsIcon from '@material-ui/icons/Stars';
import InfoIcon from '@material-ui/icons/Info';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';


// function Nav() {




  const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
  },
  appBar: {
    transition: theme.transitions.create(['margin', 'width'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
  },
  appBarShift: {
    width: `calc(100% - ${drawerWidth}px)`,
    marginLeft: drawerWidth,
    transition: theme.transitions.create(['margin', 'width'], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  hide: {
    display: 'none',
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
  },
  drawerPaper: {
    width: drawerWidth,
  },
  drawerHeader: {
    display: 'flex',
    alignItems: 'center',
    padding: theme.spacing(0, 1),
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
    justifyContent: 'flex-end',
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    marginLeft: -drawerWidth,
  },
  contentShift: {
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
    marginLeft: 0,
  },
}));

const PersistentDrawerLeft = () => {
  const classes = useStyles();
  const theme = useTheme();
  const [open, setOpen] = React.useState(false);

  const user = useSelector((store) => store.user);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };
  let loginLinkData = {
    path: '/login',
    text: 'Login / Register',
  };

  if (user.id != null) {
    loginLinkData.path = '/user';
    loginLinkData.text = 'Home';
  }

    

  return (
    <div className={classes.root}>
      <CssBaseline />
      <AppBar
        position="fixed"
        className={clsx(classes.appBar, {
          [classes.appBarShift]: open,
        })}
        
      > 
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            edge="start"
            className={clsx(classes.menuButton, open && classes.hide)}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" noWrap>
            
            <Link to={loginLinkData.path} >
          {/* {loginLinkData.text} */}
          <h2 className="traxNav">Trax</h2>
        </Link>

          </Typography>
        </Toolbar>
      </AppBar>
      <Drawer
        className={classes.drawer}
        variant="persistent"
        anchor="left"
        open={open}
        classes={{
          paper: classes.drawerPaper,
        }}
      > 
        <p className="userNav">Welcome: {user.username} </p>
        <div className={classes.drawerHeader}>
        
          <IconButton onClick={handleDrawerClose}>
            {theme.direction === 'ltr' ? <ChevronLeftIcon /> : <ChevronRightIcon />}
          </IconButton>
        </div>
        <Divider />
        <List className="homeNav">
          
            <ListItem button  onClick={handleDrawerClose}>
              <HomeIcon className="homeIcon"></HomeIcon>
              <Link to={loginLinkData.path} >
                {/* {loginLinkData.text} */}
                <h3 className ="homeNav">Home</h3>
              </Link>
                
              <ListItemText  />
            </ListItem>
          
        </List>
        <Divider />
        <List>
        <Link  to="/favorites" onClick={handleDrawerClose}>
          
            <ListItem button > 
            <StarsIcon className="favIcon"></StarsIcon>
            {user.id && (
              <>
                {/* <LogOutButton className="navLink" /> */}
              </>
            )} <h3 className ="favNav">Favorites</h3>
              <ListItemText  />
            </ListItem>
          
          </Link>
        </List>
        <Divider />
        <List>
        <Link to="/edit" onClick={handleDrawerClose}>
        
          {/* {['About'].map((text, index) => ( */}
            <ListItem button > 
            <InfoIcon className="aboutIcon"></InfoIcon>
            {user.id && (
              <>
                {/* <LogOutButton className="navLink" /> */}
              </>
            )} <h3 className ="aboutNav">Edit Info</h3>
              <ListItemText  />
            </ListItem>
          {/* ))} */}
          </Link>
        </List>
        <Divider />
        <List>
        <Link to="/about" onClick={handleDrawerClose}>
        
          {/* {['About'].map((text, index) => ( */}
            <ListItem button > 
            <InfoIcon className="aboutIcon"></InfoIcon>
            {user.id && (
              <>
                {/* <LogOutButton className="navLink" /> */}
              </>
            )} <h3 className ="aboutNav">About</h3>
              <ListItemText  />
            </ListItem>
          {/* ))} */}
          </Link>
        </List>
        <Divider />
        <List>
          <Link  onClick={handleDrawerClose}>
            <ExitToAppIcon></ExitToAppIcon>
            <LogOutButton />
          </Link>
        </List>
      </Drawer>
    </div>
  );
}
// }

export default PersistentDrawerLeft;
