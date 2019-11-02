import React, { useState } from "react"
import {
  Grid,
  Card,
  Typography,
  Button,
  Menu,
  MenuItem
} from "@material-ui/core"
import styles from "./styles"
import AppBar from "../AppBar"
import Drawer from "../Drawer"
import classnames from "clsx"
import KeyboardArrowDownIcon from "@material-ui/icons/KeyboardArrowDown"
import { useTheme } from "@material-ui/core/styles"

function App() {
  const classes = styles()
  const theme = useTheme()
  let defaultOpenValue = true
  if (window.innerWidth < 1200) {
    defaultOpenValue = false
  }
  const [mobileOpen, setMobileOpen] = useState(defaultOpenValue)
  const [anchorEl, setAnchorEl] = useState(null)

  window.addEventListener("resize", () => {
    if (window.innerWidth < 1200 && mobileOpen) {
      setMobileOpen(false)
    }
  })

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen)
  }

  const handleClick = event => {
    setAnchorEl(event.currentTarget)
  }

  const handleClose = () => {
    setAnchorEl(null)
  }

  return (
    <div className={classes.root}>
      <AppBar drawerOpen={mobileOpen} />
      <Drawer open={mobileOpen} handleDrawerToggle={handleDrawerToggle} />
      <Grid
        container
        spacing={4}
        className={classnames(classes.main, {
          [classes.mainDrawerOpen]: mobileOpen
        })}
      >
        <Grid item xs={12}>
          <div className={classes.pageTitleWrapper}>
            <div className={classes.pageTitle}>
              <Typography variant="h1" className={classes.dashboardTitle}>
                Dashboard
              </Typography>
              <Typography className={classes.dashboardSubTitle}>
                dashboard & statistics
              </Typography>
            </div>
            <div className={classes.dateSelect}>
              <Button
                aria-controls="simple-menu"
                aria-haspopup="true"
                onClick={handleClick}
                color="primary"
                variant="contained"
              >
                17 January 2016 - 15 February 2016{" "}
                <KeyboardArrowDownIcon
                  style={{ fontSize: 14, marginLeft: theme.spacing(1) }}
                />
              </Button>
              <Menu
                id="simple-menu"
                anchorEl={anchorEl}
                keepMounted
                open={Boolean(anchorEl)}
                onClose={handleClose}
              >
                <MenuItem onClick={handleClose}>Profile</MenuItem>
                <MenuItem onClick={handleClose}>My account</MenuItem>
                <MenuItem onClick={handleClose}>Logout</MenuItem>
              </Menu>
            </div>
          </div>
          <Card />
        </Grid>
      </Grid>
    </div>
  )
}

export default App
