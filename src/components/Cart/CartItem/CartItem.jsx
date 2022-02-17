import React from 'react'
import { Button, Card, CardContent, CardActions, CardMedia, Typography } from '@material-ui/core'

import useStyles from './styles'
const CartItem = ({ item, onUpdateCartQty, onRemoveFromCart }) => {
  const classes = useStyles()

  return (
      <Card>
        <CardMedia image={item.image.url} alt={item.name} className={classes.media} />
        <CardContent className={classes.content}>
            <Typography variant="h5" className={classes.title} gutterBottom>{item.name}</Typography>
            <Typography variant="h5" className={classes.title} gutterBottom>{item.price.formatted_with_symbol}</Typography>
        </CardContent>
        <CardActions className={classes.actions}>
            <div className={classes.button}>
                <Button size="small" type='button' onClick={() => onUpdateCartQty(item.id, item.quantity-1)}>-</Button>
                <Typography variant="body2" className={classes.quantity}>{item.quantity}</Typography>
                <Button size="small" type='button' onClick={() => onUpdateCartQty(item.id, item.quantity+1)}>+</Button>
            </div>
            <Button size='large' variant='contained' type='button' color='secondary' onClick={() => onRemoveFromCart(item.id)}>Remove</Button>
        </CardActions>
      </Card>
  )
}

export default CartItem