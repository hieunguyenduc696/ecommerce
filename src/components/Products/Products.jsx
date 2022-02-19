import React, { useState } from 'react'
import { Grid, CssBaseline, Button } from '@material-ui/core'
import ChipInput from 'material-ui-chip-input'

import Product from './Product/Product'

import useStyles from './styles'

const Products = ({ products, handleAddToCart, onSearch }) => {
  const classes = useStyles()
  const [tags, setTags] = useState([])
  const handleAdd = (tag) => {
    setTags([...tags, tag])
  }
  const handleDelete = (tagToDelete) => setTags(tags.filter(tag => tag !== tagToDelete))
  return (
      <>
        <CssBaseline />
        <div className={classes.toolbar} />
        <div className={classes.search}>
          <ChipInput
            className={classes.chipInput}
            value={tags}
            onAdd={handleAdd}
            onDelete={handleDelete}
            label="Search Products"
            variant="outlined"
          />
          <Button className={classes.searchBtn} size='large' variant="contained" color="primary" onClick={() => onSearch(tags)}>Search</Button>
        </div>
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