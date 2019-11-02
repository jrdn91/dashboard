import { makeStyles } from "@material-ui/core/styles"

export default makeStyles(theme => ({
  root: {
    display: "flex"
  },
  main: {
    marginTop: 56,
    marginLeft: 54,
    transition: theme.transitions.create(["margin-left"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen
    }),
    "@media (min-width:0px) and (orientation: landscape)": {
      marginTop: 48
    },
    "@media (min-width:600px)": {
      marginTop: 64
    }
  },
  mainDrawerOpen: {
    marginLeft: theme.drawerWidth,
    transition: theme.transitions.create(["margin-left"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen
    })
  }
}))
