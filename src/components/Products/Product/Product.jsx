import React from 'react'
import { Typography, IconButton, Card, CardMedia, CardContent, CardActions } from '@material-ui/core'
import { ShoppingCart } from '@material-ui/icons'

import useStyles from './styles'

const Product = ({ product, handleAddToCart }) => {
  const classes = useStyles()
  return (
      <Card style={{ height: '100%' }}>
          <CardMedia className={classes.media} image={product.image.url} alt={product.name} />
          <CardContent className={classes.cardContent}>
              <div className={classes.info}>
                <Typography variant="h5" className={classes.title} gutterBottom>{product.name.length > 15 ? `${product.name.substring(0, 15)}...` : product.name}</Typography>
                <Typography variant="h5" className={classes.title} gutterBottom>{product.price.formatted_with_symbol}</Typography>
              </div>
              <Typography dangerouslySetInnerHTML={{__html: product.description}} variant="body2" color="textSecondary" />
          </CardContent>
          <CardActions className={classes.cardActions}>
              <IconButton onClick={() => handleAddToCart(product.id, 1)}>
                  <ShoppingCart />
              </IconButton>
          </CardActions>
      </Card>
  )
}

export default Product