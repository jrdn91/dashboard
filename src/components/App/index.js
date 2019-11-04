import React, { Fragment, useState } from "react"
import {
  Grid,
  Card,
  CardContent,
  Typography,
  Button,
  Menu,
  MenuItem,
  LinearProgress
} from "@material-ui/core"
import styles from "./styles"
import AppBar from "../AppBar"
import Drawer from "../Drawer"
import classnames from "clsx"
import KeyboardArrowDownIcon from "@material-ui/icons/KeyboardArrowDown"
import { useTheme } from "@material-ui/core/styles"
import { isEmpty } from "lodash"
import { formatMoney } from "accounting"

function App() {
  const classes = styles()
  const theme = useTheme()
  let defaultOpenValue = true
  if (window.innerWidth < 1200) {
    defaultOpenValue = false
  }
  const [mobileOpen, setMobileOpen] = useState(defaultOpenValue)
  const [anchorEl, setAnchorEl] = useState(null)
  const [revenueAnchorEl, setRevenueAnchorEl] = useState(null)
  const [totals, setTotals] = useState({})
  fetch("http://www.mocky.io/v2/5dc04c03310000d1d3be4023")
    .then(response => response.json())
    .then(data => {
      setTotals(data.Totals)
    })

  window.addEventListener("resize", () => {
    if (window.innerWidth < 1200 && mobileOpen) {
      setMobileOpen(false)
    }
  })

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen)
  }

  const handleClick = event => {
    setAnchorEl(event.currentTarget)
  }

  const handleClose = () => {
    setAnchorEl(null)
  }

  const handleRevenueClick = event => {
    setRevenueAnchorEl(event.currentTarget)
  }

  const handleRevenueClose = () => {
    setRevenueAnchorEl(null)
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
              <Button
                aria-controls="simple-menu"
                aria-haspopup="true"
                onClick={handleClick}
                color="primary"
                variant="contained"
              >
                17 January 2016 - 15 February 2016{" "}
                <KeyboardArrowDownIcon
                  style={{ fontSize: 14, marginLeft: theme.spacing(1) }}
                />
              </Button>
              <Menu
                id="simple-menu"
                anchorEl={anchorEl}
                keepMounted
                open={Boolean(anchorEl)}
                onClose={handleClose}
              >
                <MenuItem onClick={handleClose}>Profile</MenuItem>
                <MenuItem onClick={handleClose}>My account</MenuItem>
                <MenuItem onClick={handleClose}>Logout</MenuItem>
              </Menu>
            </div>
          </div>
          <Card>
            <CardContent>
              {isEmpty(totals) && <LinearProgress />}
              {!isEmpty(totals) && (
                <Fragment>
                  <Grid
                    container
                    spacing={4}
                    style={{
                      marginTop: theme.spacing(1) * -1
                    }}
                  >
                    <Grid item xs={12}>
                      <Typography variant="h2" className={classes.totalsTitle}>
                        Totals
                      </Typography>
                      <Typography className={classes.totalsDate}>
                        Last Week
                      </Typography>
                    </Grid>
                  </Grid>
                  <Grid
                    container
                    spacing={4}
                    style={{
                      borderBottom: `2px solid ${theme.palette.grey[100]}`
                    }}
                  >
                    <Grid
                      item
                      sm={12}
                      md={6}
                      lg={3}
                      className={classes.totalsItem}
                    >
                      <Typography variant="h3" className={classes.totalsNumber}>
                        {totals.newFeedbacks}
                      </Typography>
                      <Typography className={classes.totalsSubtitle}>
                        New Feedbacks
                      </Typography>
                    </Grid>
                    <Grid
                      item
                      sm={12}
                      md={6}
                      lg={3}
                      className={classes.totalsItem}
                    >
                      <Typography variant="h3" className={classes.totalsNumber}>
                        {formatMoney(totals.totalProfit, "$", 0)}
                      </Typography>
                      <Typography className={classes.totalsSubtitle}>
                        Total Profit
                      </Typography>
                    </Grid>
                    <Grid
                      item
                      sm={12}
                      md={6}
                      lg={3}
                      className={classes.totalsItem}
                    >
                      <Typography variant="h3" className={classes.totalsNumber}>
                        {totals.newOrders}
                      </Typography>
                      <Typography className={classes.totalsSubtitle}>
                        New Orders
                      </Typography>
                    </Grid>
                    <Grid
                      item
                      sm={12}
                      md={6}
                      lg={3}
                      className={classes.totalsItem}
                    >
                      <Typography variant="h3" className={classes.totalsNumber}>
                        {totals.BrandPopularity}%
                      </Typography>
                      <Typography className={classes.totalsSubtitle}>
                        Brand Popularity
                      </Typography>
                    </Grid>
                  </Grid>
                </Fragment>
              )}
              <Grid container spacing={4} className={classes.chartArea}>
                <Grid item sm={12} md={6}>
                  <div className={classes.chartControls}>
                    <div className={classes.chartControlsText}>
                      <Typography variant="h2" className={classes.totalsTitle}>
                        Site Visits
                      </Typography>
                      <Typography className={classes.totalsDate}>
                        Weekly Stats
                      </Typography>
                    </div>
                    <Button
                      variant="contained"
                      size="small"
                      className={classes.newButton}
                    >
                      New
                    </Button>
                    <Button variant="outlined" size="small">
                      Returning
                    </Button>
                  </div>
                  <div className={classes.chart}>
                    <img
                      className={classes.chartImage}
                      src={process.env.PUBLIC_URL + "/area-chart.png"}
                    />
                  </div>
                </Grid>
                <Grid item sm={12} md={6}>
                  <div className={classes.chartControls}>
                    <div className={classes.chartControlsText}>
                      <Typography variant="h2" className={classes.totalsTitle}>
                        Revenue
                      </Typography>
                      <Typography className={classes.totalsDate}>
                        Monthly Stats
                      </Typography>
                    </div>
                    <Button
                      aria-controls="simple-menu"
                      aria-haspopup="true"
                      onClick={handleRevenueClick}
                      color="primary"
                      variant="contained"
                      size="small"
                    >
                      Fitler Range
                      <KeyboardArrowDownIcon
                        style={{ fontSize: 14, marginLeft: theme.spacing(1) }}
                      />
                    </Button>
                    <Menu
                      id="simple-menu"
                      anchorEl={revenueAnchorEl}
                      keepMounted
                      open={Boolean(revenueAnchorEl)}
                      onClose={handleRevenueClose}
                    >
                      <MenuItem onClick={handleRevenueClose}>test</MenuItem>
                      <MenuItem onClick={handleRevenueClose}>
                        My account
                      </MenuItem>
                      <MenuItem onClick={handleRevenueClose}>Logout</MenuItem>
                    </Menu>
                  </div>
                  <div className={classes.chart}>
                    <img
                      className={classes.chartImage}
                      src={process.env.PUBLIC_URL + "/line-chart.png"}
                    />
                  </div>
                </Grid>
              </Grid>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </div>
  )
}

export default App
