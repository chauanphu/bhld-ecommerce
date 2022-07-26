import React from "react";
import { Card, CardMedia, CardContent, CardActions, Typography, IconButton } from "@mui/material";
import { AddShoppingCart } from "@mui/icons-material";

import useStyle from './style'

const Product = ({ product }) => {
  const classes = useStyle();

  return (
    <Card className={classes.root}>
      <CardMedia className={classes.media} component='img' image={product.image} title={product.name}></CardMedia>
      <CardContent>
        <div className={classes.cardContent}>
          <Typography variant="h5" gutterBottom={true}>
            {product.name}
          </Typography>
          <Typography variant="h5">
            ${product.price}
          </Typography>
        </div>
        <Typography variant="body2" color="textSecondary">
          {product.description}
        </Typography>
      </CardContent>
      <CardActions disableSpacing className={classes.cardActions}>
        <IconButton aria-label="Add to Cart">
          <AddShoppingCart></AddShoppingCart>
        </IconButton>
      </CardActions>
    </Card>
  );
};

export default Product;
