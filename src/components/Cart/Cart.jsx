import React from 'react'
import { Container, Typography, Button, Grid } from '@material-ui/core'
import CartItem from './CartItem/CartItem'
import { Link } from 'react-router-dom'

import useStyles from './styles'
const Cart = ({ cart, handleUpdateCartQty, handleRemoveFromCart, handleEmptyCart }) => {
  const classes = useStyles()

  const EmptyCart = () => (
      <Typography variant="subtitle1">You have no items in your shopping cart
        <Link to="/" className={classes.link}>, start adding some!</Link>
      </Typography>
  )

  const FilledCart = () => (
    <>
      <Grid container spacing={3}>
        {cart.line_items.map((item) => (
          <Grid item key={item.id} xs={12} sm={6} md={4} lg={3}>
            <CartItem item={item} onUpdateCartQty={handleUpdateCartQty} onRemoveFromCart={handleRemoveFromCart} />
          </Grid>
        ))}
      </Grid>
      <div className={classes.cardDetails}>
        <Typography variant="h4">Subtotal: {cart.subtotal.formatted_with_symbol}</Typography>
        <div>
          <Button className={classes.emptyButton} size='large' color='secondary' variant="contained" fullWidth onClick={handleEmptyCart}>EMPTY CART</Button>
          <Button component={Link} to="/checkout" size='large' color='primary' variant="contained">Checkout</Button>
        </div>
      </div>
    </>
  )
  return (
    <Container className={classes.container}>
      <div className={classes.toolbar} />
      <Typography variant="h4" gutterBottom>Your Shopping Cart</Typography>
      {!cart?.line_items?.length ? <EmptyCart /> : <FilledCart />}
    </Container>
  )
}

export default Cart