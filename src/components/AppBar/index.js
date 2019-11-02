import React from "react"
import { AppBar, Toolbar, InputBase, Avatar, Button } from "@material-ui/core"
import SearchIcon from "@material-ui/icons/Search"
import KeyboardArrowDownIcon from "@material-ui/icons/KeyboardArrowDown"
import styles from "./styles"
import classnames from "clsx"

const useStyles = styles

export const AppBarComponent = ({ handleDrawerToggle, drawerOpen }) => {
  const classes = useStyles()

  return (
    <AppBar
      position="fixed"
      className={classnames(classes.appBar, {
        [classes.appBarDrawerOpen]: drawerOpen
      })}
    >
      <Toolbar>
        <div style={{ flex: 1 }}>
          <SearchIcon />
          <InputBase
            className={classes.searchInput}
            placeholder="Search..."
            inputProps={{ "aria-label": "search" }}
          />
        </div>
        <Button>
          <Avatar alt="Some Name" className={classes.avatar}>
            SN
          </Avatar>
          <KeyboardArrowDownIcon className={classes.dropDownArrowIcon} />
        </Button>
      </Toolbar>
    </AppBar>
  )
}

export default AppBarComponent
