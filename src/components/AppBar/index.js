import React from "react"
import { AppBar, Toolbar, InputBase } from "@material-ui/core"
import SearchIcon from "@material-ui/icons/Search"
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
        <SearchIcon />
        <InputBase
          className={classes.searchInput}
          placeholder="Search..."
          inputProps={{ "aria-label": "search" }}
        />
      </Toolbar>
    </AppBar>
  )
}

export default AppBarComponent
