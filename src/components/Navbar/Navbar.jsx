import React from 'react'
import { AppBar, Toolbar, IconButton, Typography, Badge } from '@material-ui/core'
import { ShoppingCart } from '@material-ui/icons'

import commerce from '../../assets/commerce.png'
import useStyles from './styles'

const Navbar = ({ totalItems }) => {
  const classes = useStyles()
  return (
    <AppBar className={classes.appBar}>
      <Toolbar className={classes.toolbar}>
        <Typography className={classes.logo} variant="h5">
          <div className={classes.imageWrapper}>
            <img src={commerce} alt="shopping cart" className={classes.image} />
          </div>
          Ecommerce.js
        </Typography>
        <IconButton className={classes.iconButton}>
          <Badge badgeContent={totalItems} color="secondary">
            <ShoppingCart />
          </Badge>
        </IconButton>
      </Toolbar>
    </AppBar>
  )
}

export default Navbar