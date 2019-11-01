import React from "react"
import { Hidden, Drawer, Divider, List, ListItem, ListItemIcon, ListItemText, IconButton } from "@material-ui/core"
import { makeStyles, useTheme } from "@material-ui/core/styles"
import InboxIcon from "@material-ui/icons/MoveToInbox"
import MailIcon from "@material-ui/icons/Mail"
import MenuIcon from "@material-ui/icons/Menu"
import CalendarIcon from "@material-ui/icons/CalendarToday"
import FileIcon from "@material-ui/icons/InsertDriveFile"
import HomeIcon from "@material-ui/icons/Home"
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
    width: theme.drawerWidth,
    backgroundColor: theme.palette.darkGrey,
    color: "#fff"
  },
  listItemRoot: {
    "&:hover": {
      backgroundColor: "white",
      color: theme.palette.text.primary,
      "& $listIcon": {
        color: theme.palette.primary.main
      }
    }
  },
  listIcon: {
    color: "#fff"
  },
  listIconSelected: {
    color: theme.palette.primary.main
  },
  listItemSelected: {
    backgroundColor: ["#fff","!important"],
    color: theme.palette.text.primary,
    "&:after": {
      width: 4,
      height: '40%',
      content: "''",
      position: 'absolute',
      top: '50%',
      backgroundColor: theme.palette.primary.main,
      transform: 'translateY(-50%)',
      right: 0,
    }
  },
  toolbar: {
    ...theme.mixins.toolbar,
    display: "flex",
    justifyContent: "flex-end",
    alignItems: "center",
    backgroundColor: theme.palette.primary.dark,
    color: "#fff"
  }
}))


const DrawerComponent = ({ container, open, handleDrawerToggle }) => {
  const classes = useStyles()
  const theme = useTheme();
  
  const listItemClasses = {
    root: classes.listItemRoot,
    selected: classes.listItemSelected
  }

  const Item = ({ icon, label, selected = false }) => {
    return (
      <ListItem button selected={selected} classes={listItemClasses}>
        <ListItemIcon className={classnames(classes.listIcon, {
          [classes.listIconSelected]: selected
        })}>{icon}</ListItemIcon>
        <ListItemText primary={label} />
      </ListItem>
    )
  }

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
        <Item icon={<CalendarIcon />} label="Calendar" />
        <Item icon={<FileIcon />} label="Documentation" />
        <Item icon={<HomeIcon />} label="Dashboard" selected />
      </List>
      <Divider />
      <List className={classes.drawerList}>
        {['All mail', 'Trash', 'Spam'].map((text, index) => (
          <ListItem button key={text}>
            <ListItemIcon className={classes.listIcon}>{index % 2 === 0 ? <InboxIcon /> : <MailIcon />}</ListItemIcon>
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