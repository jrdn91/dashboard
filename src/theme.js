import { createMuiTheme } from "@material-ui/core/styles"

const primary = {
  main: "#30b5e1",
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
      "@global": {
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
    },
    MuiButton: {
      root: {
        minWidth: 46,
        fontWeight: 300
      },
      contained: {
        boxShadow: "none",
        "&:hover": {
          boxShadow: "none"
        }
      },
      containedPrimary: {
        color: "#fff"
      },
      containedSizeSmall: {
        padding: "4px 10px",
        fontSize: "0.7125rem",
        lineHeight: 1.45,
        height: 26
      },
      outlinedSizeSmall: {
        padding: "4px 6px",
        fontSize: "0.7125rem",
        lineHeight: 1.25,
        height: 26
      },
      outlined: {
        borderColor: "#eeeeee",
        borderWidth: 2,
        color: "#bdbdbd"
      }
    }
  }
})
