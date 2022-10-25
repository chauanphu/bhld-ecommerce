import React from 'react'
import { Box, Divider, Grid, Pagination, Typography } from '@mui/material'
import ProductCard from "./Cards/ProductCard"
import { useState, useEffect, useCallback } from "react";

///////// Import State /////////
import Product from 'services/products';

/**
 * Custom Pagniation
 * @param {*} properties 
 * @returns 
 */
const CustomPag = ({ count = 0, onChange = (event, page) => { } }) => {
    const page = Math.ceil(count / 12)
    return (
        <>
            {
                (page > 1) &&
                <Pagination sx={{
                    '.MuiPagination-ul': {
                        display: 'flex',
                        justifyContent: 'center'
                    }
                }} count={page} onChange={onChange} />
            }
        </>
    )

}

const EmptyPage = () => {
    return (
        <Box height="50vh" display="flex">
            <Typography sx={{
                typography: { xs: "h4", md: "h3" },
                postion: 'absolute',
                top: 0,
                right: 0,
                bottom: 0,
                left: 0,
                margin: 'auto',
                textAlign: 'center'
            }} color="gray">Chưa cập nhật hàng hóa</Typography>
        </Box >)
}

const Products = ({ header, id: category, showHeader }) => {
    const [products, setProduct] = useState([])
    const [count, setCount] = useState(0)

    const updateData = useCallback((event, page) => {
        if (category === 'all') {
            Product.get_all(page)
                .then(res => {
                    const { total_count, data } = res
                    setCount(total_count)
                    return data
                })
                .then(data => {
                    setProduct(data)
                })
        } else {
            Product.get_by_category(category)
                .then(res => {
                    const { total_count, data } = res
                    setCount(total_count)
                    return data
                })
                .then(data => {
                    setProduct(data)
                })
        }
    }, [category])

    //Effects
    useEffect(() => {
        updateData()
    }, [updateData])

    return (
        <>
            {products.length > 0 ? <Box>
                {header}
                {header && <Divider sx={{ my: 3 }} />}
                <Grid container spacing={2} columns={{ xs: 2, md: 3, lg: 4 }} justifyContent={{ xs: "center", md: "start" }}>
                    {products.map((item, index) => {
                        return (
                            <ProductCard key={index} item={item}></ProductCard>
                        )
                    })}
                </Grid>
                <CustomPag count={count} />
            </Box>
                : <EmptyPage />}
        </>
    )
}

export default Products