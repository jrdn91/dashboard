import React from "react"
import { Drawer, Divider, List, ListItem, ListItemIcon, ListItemText, IconButton } from "@material-ui/core"
import InboxIcon from "@material-ui/icons/MoveToInbox"
import MailIcon from "@material-ui/icons/Mail"
import MenuIcon from "@material-ui/icons/Menu"
import CalendarIcon from "@material-ui/icons/CalendarToday"
import FileIcon from "@material-ui/icons/InsertDriveFile"
import HomeIcon from "@material-ui/icons/Home"
import classnames from "clsx"
import styles from "./styles"


const DrawerComponent = ({ container, open, handleDrawerToggle }) => {
  const classes = styles()
  
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