import { createMuiTheme } from "@material-ui/core/styles"

const primary = {
  main: "#30b4e1",
  dark: "#1ea6d4"
}

export default createMuiTheme({
  palette: {
    primary,
    darkGrey: "#2a323e"
  },
  drawerWidth: 240,
  overrides: {
    MuiCssBaseline: {
      '@global': {
        body: {
          backgroundColor: "#f1f4f8"
        }
      }
    },
    MuiAppBar: {
      colorPrimary: {
        color: "#fff"
      }
    },
    MuiDrawer: {
      paperAnchorDockedLeft: {
        borderRight: "none"
      }
    }
  }
})
