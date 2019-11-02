import { makeStyles } from "@material-ui/core/styles"

export default makeStyles(theme => ({
  root: {
    display: "flex"
  },
  main: {
    marginTop: 56,
    marginLeft: 54,
    width: `calc(100% - ${54}px)`,
    transition: theme.transitions.create(["width", "margin-left"], {
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
    width: `calc(100% - ${theme.drawerWidth}px)`,
    transition: theme.transitions.create(["width", "margin-left"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen
    })
  },
  pageTitleWrapper: {
    display: "flex"
  },
  pageTitle: {
    flexGrow: 1
  },
  dashboardTitle: {
    fontSize: "2rem"
  },
  dashboardSubTitle: {
    fontSize: "0.8rem",
    color: theme.palette.grey[500]
  }
}))
