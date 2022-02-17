import React from 'react'
import { Container, Typography, Button, Grid } from '@material-ui/core'
import CartItem from './CartItem/CartItem'

import useStyles from './styles'
const Cart = ({ cart }) => {
  const classes = useStyles()

  const EmptyCart = () => (
    <Typography variant="subtitle1">You have no items in your shopping cart, start adding some!</Typography>
  )

  const FilledCart = () => (
    <Container>
      <div className={classes.toolbar} />
      <Typography variant="h4" gutterBottom>Your Shopping Cart</Typography>
      <Grid container spacing={3}>
        {cart.line_items.map((item) => (
          <Grid item key={item.id} xs={12} sm={6} md={4} lg={3}>
            <CartItem item={item} />
          </Grid>
        ))}
      </Grid>
      <div className={classes.cardDetails}>
        <Typography variant="h4">Subtotal: {cart.subtotal.formatted_with_symbol}</Typography>
        <div>
          <Button className={classes.emptyButton} size='large' color='secondary' variant="contained">EMPTY CART</Button>
          <Button size='large' color='primary' variant="contained">EMPTY CART</Button>
        </div>
      </div>
    </Container>
  )
  return (
    <>
      {!cart.line_items.length ? <EmptyCart /> : <FilledCart />}
    </>
  )
}

export default Cart