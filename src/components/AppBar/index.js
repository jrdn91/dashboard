import React from "react"
import { AppBar, Toolbar, IconButton, Typography } from "@material-ui/core"
import MenuIcon from "@material-ui/icons/Menu"
import styles from "./styles"

const useStyles = styles

export const AppBarComponent = ({ handleDrawerToggle }) => {
  const classes = useStyles()

  return (
    <AppBar position="fixed" className={classes.appBar}>
      <Toolbar>
        <IconButton
          color="inherit"
          aria-label="open drawer"
          edge="start"
          onClick={handleDrawerToggle}
          className={classes.menuButton}
        >
          <MenuIcon />
        </IconButton>
        <Typography variant="h6" noWrap>
          Responsive drawer
        </Typography>
      </Toolbar>
    </AppBar>
  )
}

export default AppBarComponent