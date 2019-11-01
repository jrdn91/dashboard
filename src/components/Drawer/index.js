import React from "react"
import { Drawer, Divider, List, ListItem, ListItemIcon, ListItemText, IconButton } from "@material-ui/core"
import InboxIcon from "@material-ui/icons/MoveToInbox"
import MailIcon from "@material-ui/icons/Mail"
import MenuIcon from "@material-ui/icons/Menu"
import CalendarIcon from "@material-ui/icons/CalendarToday"
import FileIcon from "@material-ui/icons/InsertDriveFile"
import HomeIcon from "@material-ui/icons/Home"
import CheckBoxIcon from "@material-ui/icons/CheckBox"
import WebIcon from "@material-ui/icons/Web"
import BarChartIcon from "@material-ui/icons/BarChart"
import ShoppingBasketIcon from "@material-ui/icons/ShoppingBasket"
import SettingsIcon from "@material-ui/icons/Settings"
import Icon from '@mdi/react'
import { mdiFire, mdiDiamondStone, mdiClipboard } from '@mdi/js';
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
      <List className={classes.drawerList}>
        <Item icon={<CalendarIcon />} label="Calendar" />
        <Item icon={<FileIcon />} label="Documentation" />
        <Item icon={<HomeIcon />} label="Dashboard" selected />
      </List>
      <List className={classes.drawerList}>
        <Item icon={<Icon path={mdiFire} size={1} color="white" />} label="Admin Plugins" />
        <Item icon={<CheckBoxIcon />} label="Admin Forms" />
        <Item icon={<WebIcon />} label="Admin Layouts" />
      </List>
      <List className={classes.drawerList}>
        <Item icon={<BarChartIcon />} label="Information Panels" />
        <Item icon={<ShoppingBasketIcon />} label="Ecommerce" />
      </List>
      <List className={classes.drawerList}>
        <Item icon={<Icon path={mdiDiamondStone} size={1} color="white" />} label="UI Elements" />
        <Item icon={<MenuIcon />} label="Form Elements" />
        <Item icon={<SettingsIcon />} label="Plugins" />
        <Item icon={<Icon path={mdiClipboard} size={1} color="white" />} label="Pages" />
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