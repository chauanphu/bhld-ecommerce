import React from "react";
import Grid from "@mui/material/Grid";

import Product from "./Product/Product";

const products = [
  {
    id: 1,
    name: "Shoes",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores, nulla?",
    price: 5
  },
  {
    id: 2,
    name: "Shoes",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores, nulla?",
    price: 10
  },
  {
    id: 3,
    name: "Shoes",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores, nulla?",
    price: 15
  }
];

const Products = () => {
  return (
    <main>
      Products
      <Grid container justify="center" spacing={4}>
        {products.map((product) => (
          <Grid item key={product.id} xs={12} sm={6} md={4} lg={3}>
            1
            <Product product={product}></Product>
          </Grid>
        ))}
      </Grid>
    </main>
  );
};

export default Products;
