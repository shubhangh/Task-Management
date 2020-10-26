import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import CssBaseline from '@material-ui/core/CssBaseline';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import List from '@material-ui/core/List';
// import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import MailIcon from '@material-ui/icons/Mail';
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';
import ArrowForwardSharpIcon from '@material-ui/icons/ArrowForwardSharp';

const drawerWidth = 200;

const styles = theme => ({
  root: {
    display: 'flex',
  },

  drawer: {
    // width: drawerWidth,
    // flexShrink: 0,
    // zIndex: -1,
    position: "relative",
    zIndex: 1301,
    backgroundColor: "red"
  },
  drawerPaper: {
    width: drawerWidth,
  },
  toolbar: theme.mixins.toolbar,
  content: {
    // flexGrow: 1,
    // backgroundColor: theme.palette.background.default,
    // padding: theme.spacing.unit * 1,
  },
});

function NavMenu(props) {
  const { classes } = props;

  return (
    <div className={classes.root}>
      <CssBaseline />
      <AppBar position="fixed" className={classes.appBar}>
       
      </AppBar>
      <Drawer
        className={classes.drawer}
        variant="permanent"
        classes={{
          paper: classes.drawerPaper,
        }}
        anchor="left"
      >
        <div className={classes.toolbar} />
        <Divider />
        <List>
          {['Projects'].map((text, index) => (
            <ListItem button key={text}>
                {/* <ArrowForwardIosIcon/> */}
                <ArrowForwardSharpIcon/>
              <ListItemText primary={text} />
            </ListItem>
          ))}
        </List>
        <Divider />
        <List>
          {['Tasks'].map((text, index) => (
            <ListItem button key={text}>
                <ArrowForwardSharpIcon/>
              <ListItemText primary={text} />
            </ListItem>
          ))}
        </List>
        <Divider />
        <List>
          {['Logout'].map((text, index) => (
            <ListItem button key={text}>
                <ArrowForwardSharpIcon/>
              <ListItemText primary={text} />
            </ListItem>
          ))}
        </List>
      </Drawer>
   
    </div>
  );
}

// PermanentDrawerLeft.propTypes = {
//   classes: PropTypes.object.isRequired,
// };

export default withStyles(styles)(NavMenu);
