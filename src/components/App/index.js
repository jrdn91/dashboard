import React, { useState } from "react"
import { makeStyles } from '@material-ui/core/styles';
import styles from "./styles"
import AppBar from "../AppBar";
import Drawer from "../Drawer";

const useStyles = makeStyles(styles);

function App() {
  const classes = useStyles();
  const [mobileOpen, setMobileOpen] = useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen)
  }

  return (
    <div className={classes.root}>
      <AppBar />
      <Drawer open={mobileOpen} handleDrawerToggle={handleDrawerToggle} />
    </div>
  );
}

export default App;
