import { makeStyles } from "@material-ui/core/styles"

export default makeStyles(theme => ({
  appBar: {
    width: `calc(100% - ${54}px)`,
    marginLeft: 54,
    transition: theme.transitions.create(["width", "margin-left"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen
    })
  },
  appBarDrawerOpen: {
    width: `calc(100% - ${theme.drawerWidth}px)`,
    marginLeft: theme.drawerWidth,
    transition: theme.transitions.create(["width", "margin-left"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen
    })
  },
  searchInput: {
    marginLeft: theme.spacing(1),
    flex: 1,
    color: "#fff"
  },
  dropDownArrowIcon: {
    color: "#fff",
    fontSize: 17,
    marginLeft: theme.spacing(2)
  }
}))
