import React from "react"
import { Hidden, Drawer, Divider, List, ListItem, ListItemIcon, ListItemText, IconButton } from "@material-ui/core"
import { makeStyles, useTheme } from "@material-ui/core/styles"
import InboxIcon from "@material-ui/icons/MoveToInbox"
import MailIcon from "@material-ui/icons/Mail"
import MenuIcon from "@material-ui/icons/Menu"
import classnames from "clsx"

const useStyles = makeStyles(theme => ({
  menuButtonRoot: {
    padding: 15
  },
  drawer: {
    width: theme.drawerWidth,
    transition: theme.transitions.create(["width"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen
    })
  },
  drawerClosed: {
    width: 54,
    transition: theme.transitions.create(["width"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen
    })
  },
  drawerList: {
    width: theme.drawerWidth
  },
  toolbar: {
    ...theme.mixins.toolbar,
    display: "flex",
    justifyContent: "flex-end",
    alignItems: "center"
  }
}))

const DrawerComponent = ({ container, open, handleDrawerToggle }) => {
  const classes = useStyles()
  const theme = useTheme();

  const drawerContent = (
    <div className={classnames(classes.drawer, {
      [classes.drawerClosed]: !open
    })}>
      <div className={classes.toolbar}>
        <IconButton
          color="inherit"
          aria-label="open drawer"
          onClick={handleDrawerToggle}
          className={classes.menuButtonRoot}
        >
          <MenuIcon />
        </IconButton>
      </div>
      <Divider />
      <List className={classes.drawerList}>
        {['Inbox', 'Starred', 'Send email', 'Drafts'].map((text, index) => (
          <ListItem button key={text}>
            <ListItemIcon>{index % 2 === 0 ? <InboxIcon /> : <MailIcon />}</ListItemIcon>
            <ListItemText primary={text} />
          </ListItem>
        ))}
      </List>
      <Divider />
      <List className={classes.drawerList}>
        {['All mail', 'Trash', 'Spam'].map((text, index) => (
          <ListItem button key={text}>
            <ListItemIcon>{index % 2 === 0 ? <InboxIcon /> : <MailIcon />}</ListItemIcon>
            <ListItemText primary={text} />
          </ListItem>
        ))}
      </List>
    </div>
  );

  return (
    <nav aria-label="mailbox folders">
      {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
      <Drawer
        variant="permanent"
        open
      >
        {drawerContent}
      </Drawer>
    </nav>
  )
}

export default DrawerComponent