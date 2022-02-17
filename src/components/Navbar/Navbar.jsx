import React from 'react'
import { AppBar, Toolbar, IconButton, Typography, Badge } from '@material-ui/core'
import { ShoppingCart } from '@material-ui/icons'
import { Link, useLocation } from 'react-router-dom'

import commerce from '../../assets/commerce.png'
import useStyles from './styles'

const Navbar = ({ totalItems }) => {
  const classes = useStyles()
  const location = useLocation()
  return (
    <AppBar className={classes.appBar} color='inherit'>
      <Toolbar className={classes.toolbar}>
        <Typography component={Link} to="/" className={classes.logo} variant="h5">
          <div className={classes.imageWrapper}>
            <img src={commerce} alt="shopping cart" className={classes.image} />
          </div>
          Ecommerce.js
        </Typography>
        {location.pathname === '/' && <IconButton className={classes.iconButton}>
            <Badge component={Link} to="/cart" badgeContent={totalItems} color="secondary" className={classes.badge}>
              <ShoppingCart />
            </Badge>
        </IconButton>}
      </Toolbar>
    </AppBar>
  )
}

export default Navbar