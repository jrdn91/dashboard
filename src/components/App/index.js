import React, { useState } from "react"
import {
  Grid,
  Card,
  Typography,
  FormControl,
  InputLabel,
  Select,
  MenuItem
} from "@material-ui/core"
import styles from "./styles"
import AppBar from "../AppBar"
import Drawer from "../Drawer"
import classnames from "clsx"

function App() {
  const classes = styles()
  let defaultOpenValue = true
  if (window.innerWidth < 1200) {
    defaultOpenValue = false
  }
  const [mobileOpen, setMobileOpen] = useState(defaultOpenValue)

  window.addEventListener("resize", () => {
    if (window.innerWidth < 1200 && mobileOpen) {
      setMobileOpen(false)
    }
  })

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen)
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
              <FormControl className={classes.formControl}>
                <InputLabel id="demo-simple-select-label">Age</InputLabel>
                <Select>
                  <MenuItem value={10}>Ten</MenuItem>
                  <MenuItem value={20}>Twenty</MenuItem>
                  <MenuItem value={30}>Thirty</MenuItem>
                </Select>
              </FormControl>
            </div>
          </div>
          <Card />
        </Grid>
      </Grid>
    </div>
  )
}

export default App
