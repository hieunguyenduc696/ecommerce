import React from 'react'
import { Typography, IconButton, Card, CardMedia, CardContent, CardActions } from '@material-ui/core'
import { ShoppingCart } from '@material-ui/icons'

import useStyles from './styles'

const Product = ({ product }) => {
  const classes = useStyles()
  return (
      <Card>
          <CardMedia className={classes.media} image={product.image} alt={product.name} />
          <CardContent className={classes.cardContent}>
              <div className={classes.info}>
                <Typography variant="h5" gutterBottom>{product.name}</Typography>
                <Typography variant="h5">{product.price}</Typography>
              </div>
              <Typography variant="body2" color="textSecondary">{product.description}</Typography>
          </CardContent>
          <CardActions className={classes.cardActions}>
              <IconButton>
                  <ShoppingCart />
              </IconButton>
          </CardActions>
      </Card>
  )
}

export default Product