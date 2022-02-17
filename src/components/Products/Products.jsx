import React from 'react'
import { Grid } from '@material-ui/core'

import Product from './Product/Product'

import useStyles from './styles'

const DUMMY_PRODUCT = [
    {id: 'p1', name: 'Shoes', description: 'Running shoes', price: '$40', image:'https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/be6f4f03-835b-4ed7-89ef-b90b933cc29a/zoomx-vaporfly-next-2-mens-road-racing-shoes-84GBXb.png'},
    {id: 'p2', name: 'Macbook', description: 'Apple Macbook', price: '$800', image: 'https://www.apple.com/v/macbook-pro-14-and-16/b/images/meta/macbook-pro-14-and-16_overview__fz0lron5xyuu_og.png?202112130444'},
    {id: 'p3', name: 'Macbook', description: 'Apple Macbook', price: '$800', image: 'https://www.apple.com/v/macbook-pro-14-and-16/b/images/meta/macbook-pro-14-and-16_overview__fz0lron5xyuu_og.png?202112130444'},
    {id: 'p4', name: 'Macbook', description: 'Apple Macbook', price: '$800', image: 'https://www.apple.com/v/macbook-pro-14-and-16/b/images/meta/macbook-pro-14-and-16_overview__fz0lron5xyuu_og.png?202112130444'},
    {id: 'p5', name: 'Macbook', description: 'Apple Macbook', price: '$800', image: 'https://www.apple.com/v/macbook-pro-14-and-16/b/images/meta/macbook-pro-14-and-16_overview__fz0lron5xyuu_og.png?202112130444'},
    {id: 'p6', name: 'Macbook', description: 'Apple Macbook', price: '$800', image: 'https://www.apple.com/v/macbook-pro-14-and-16/b/images/meta/macbook-pro-14-and-16_overview__fz0lron5xyuu_og.png?202112130444'},
    {id: 'p7', name: 'Macbook', description: 'Apple Macbook', price: '$800', image: 'https://www.apple.com/v/macbook-pro-14-and-16/b/images/meta/macbook-pro-14-and-16_overview__fz0lron5xyuu_og.png?202112130444'},
    {id: 'p8', name: 'Macbook', description: 'Apple Macbook', price: '$800', image: 'https://www.apple.com/v/macbook-pro-14-and-16/b/images/meta/macbook-pro-14-and-16_overview__fz0lron5xyuu_og.png?202112130444'},
]

const Products = () => {
  const classes = useStyles()  
  return (
      <>
        <div className={classes.toolbar} />
        <Grid container style={{ width: '100%', margin: '0 auto' }} spacing={3} className={classes.productContainer}>
            {DUMMY_PRODUCT.map(product => (
                <Grid item xs={12} sm={6} md={4} lg={3} key={product.id}>
                    <Product product={product} />
                </Grid>
            ))}
        </Grid>
      </>
  )
}

export default Products