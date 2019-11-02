import React from "react"
import { AppBar, Toolbar, IconButton, Typography } from "@material-ui/core"
import MenuIcon from "@material-ui/icons/Menu"
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
        <Typography variant="h6" noWrap>
          Responsive drawer
        </Typography>
      </Toolbar>
    </AppBar>
  )
}

export default AppBarComponent
