import React from 'react'
import { Grid } from '@material-ui/core'

import Product from './Product/Product'

import useStyles from './styles'

const Products = ({ products, handleAddToCart }) => {
  const classes = useStyles()  
  return (
      <>
        <div className={classes.toolbar} />
        <Grid container style={{ width: '100%', margin: '0 auto' }} spacing={3} className={classes.productContainer}>
            {products.map(product => (
                <Grid item xs={12} sm={6} md={4} lg={3} key={product.id}>
                    <Product product={product} handleAddToCart={handleAddToCart} />
                </Grid>
            ))}
        </Grid>
      </>
  )
}

export default Products