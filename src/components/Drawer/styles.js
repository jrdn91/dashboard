import { makeStyles, useTheme } from "@material-ui/core/styles"

export default makeStyles(theme => ({
  menuButtonRoot: {
    padding: 15
  },
  drawer: {
    overflow: "hidden",
    display: "flex",
    flexDirection: "column",
    width: theme.drawerWidth,
    transition: theme.transitions.create(["width"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen
    })
  },
  drawerClosed: {
    width: 54,
    transition: theme.transitions.create(["width"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen
    })
  },
  drawerList: {
    width: theme.drawerWidth,
    backgroundColor: theme.palette.darkGrey,
    color: "#fff",
    paddingTop: theme.spacing(3),
    paddingBottom: theme.spacing(3)
  },
  listItemsWrapper: {
    overflow: "auto"
  },
  listItemRoot: {
    "&:hover": {
      backgroundColor: "white",
      color: theme.palette.text.primary,
      "& $listIcon": {
        color: theme.palette.primary.main
      }
    }
  },
  listIcon: {
    color: "#fff"
  },
  listIconSelected: {
    color: theme.palette.primary.main
  },
  listItemSelected: {
    backgroundColor: ["#fff", "!important"],
    color: theme.palette.text.primary,
    "&:after": {
      width: 4,
      height: "40%",
      content: "''",
      position: "absolute",
      top: "50%",
      backgroundColor: theme.palette.primary.main,
      transform: "translateY(-50%)",
      right: 0
    }
  },
  toolbar: {
    ...theme.mixins.toolbar,
    display: "flex",
    justifyContent: "flex-end",
    alignItems: "center",
    backgroundColor: theme.palette.primary.dark,
    color: "#fff"
  }
}))
