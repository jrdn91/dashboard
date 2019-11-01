import React, { useState } from "react"
import { makeStyles } from '@material-ui/core/styles';
import styles from "./styles"
import AppBar from "../AppBar";
import Drawer from "../Drawer";

const useStyles = makeStyles(styles);

function App() {
  const classes = useStyles();
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
    </div>
  );
}

export default App;
