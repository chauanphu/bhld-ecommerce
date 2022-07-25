import React from "react";
import { Card, CardMedia, CardContent, CardActions, Typography, IconButton } from "@mui/material";
import { AddShoppingCart } from "@mui/icons-material";

import useStyle from './style'

const Product = ({ product }) => {
  const classes = useStyle

  return (
    <div>
      <Card className={classes.root}>
        <CardMedia className={classes.media} image='' title={product.name}></CardMedia>
        <CardContent>
          <div className={classes.cardContent}>
            <Typography variant="h5" gutterButtom>
              {product.name}
            </Typography>
            <Typography variant="h5">
              ${product.price}
            </Typography>
            <Typography variant="body2" color="textSecondary">
              {product.description}
            </Typography>
          </div>
        </CardContent>
        <CardActions disableSpacing className={classes.cardActions}>
          <IconButton aria-label="Add to Cart">
            <AddShoppingCart></AddShoppingCart>
          </IconButton>
        </CardActions>
      </Card>
    </div>
  );
};

export default Product;
