import React from 'react'
import { Box, Divider, Grid } from '@mui/material'
import ProductCard from "./Cards/ProductCard"

const Products = ({ header, bottom }) => {
    const categories = [
        { name: "Quan ao bao ho lao dong" },
        // { name: "Dong phuc cong so" },
        // { name: "Dong phuc benh vien" },
        // { name: "Dong phuc khach san" }
    ]
    const items = [
        { name: '#Name1', img: '', price: "289,000" },
        { name: '#Name2', img: '', price: "289,000" },
        { name: '#Name3', img: '', price: "289,000" },
        { name: '#Name4', img: '', price: "289,000" },
        // { name: '#Name5', img: '', price: "289,000" },
    ]
    // const display = (showHeader) ? 'flex' : 'none'
    return (
        <>
            {categories.map((item) => {
                return (
                    <Box key={item.name}>
                        {header}
                        {/* <Box sx={{
                            display: { display },
                            direction: "row",
                            alignItems: "center",
                            my: 3,
                            visibility: 'hidden'
                        }}>
                            <Typography variant="h5" sx={{
                                mr: 4
                            }}>{item.name}</Typography>
                            <Typography variant="body2">Xem tat ca</Typography>
                        </Box> */}
                        <Divider sx={{ my: 3 }} />
                        <Grid container spacing={2} columns={{ xs: 2, md: 3, lg: 4 }} justifyContent={{ xs: "center", md: "space-between" }}>
                            {items.map((item) => {
                                return (
                                    <ProductCard key={item.name} item={item}></ProductCard>
                                )
                            })}
                        </Grid>

                        {bottom}
                        {/* <Box display="flex" justifyContent="center">
                            <Button sx={{ mt: 4, color: "green", borderColor: "green", fontWeight: "bold" }} variant="outlined">Xem them</Button>
                        </Box> */}
                    </Box>
                )
            })}
        </>
    )
}

export default Products