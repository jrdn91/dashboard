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
    display: "flex",
    marginBottom: theme.spacing(3)
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
  },
  totalsTitle: {
    fontSize: "1.3rem",
    fontWeight: 500,
    display: "inline",
    paddingRight: theme.spacing(2)
  },
  totalsDate: {
    display: "inline",
    fontSize: "0.8rem",
    color: theme.palette.grey[500]
  },
  totalsItem: {
    textAlign: "center",
    position: "relative",
    "&:not(:last-of-type)": {
      "&:after": {
        content: "''",
        borderRight: `2px solid ${theme.palette.grey[100]}`,
        position: "absolute",
        right: -1,
        width: 2,
        height: 66,
        top: "50%",
        transform: "translateY(-50%)"
      }
    }
  },
  totalsNumber: {
    fontSize: "2.4rem",
    paddingBottom: theme.spacing(1)
  },
  totalsSubtitle: {
    fontSize: "0.8rem",
    color: theme.palette.grey[500]
  },
  chartArea: {
    marginTop: theme.spacing(6)
  },
  newButton: {
    backgroundColor: "#03ce8e",
    color: "#fff",
    marginRight: theme.spacing(1)
  },
  chartControls: {
    display: "flex"
  },
  chartControlsText: {
    flexGrow: 1
  },
  chartImage: {
    width: "100%"
  }
}))
