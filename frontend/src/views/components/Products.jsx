import React from 'react'
import { Typography, Box, Divider, Button } from '@mui/material'
import Cards from './Cards/Cards'

const Products = () => {
    const categories = [
        { name: "Quan ao bao ho lao dong" },
        { name: "Dong phuc cong so" },
        { name: "Dong phuc benh vien" },
        { name: "Dong phuc khach sang" }
    ]

    return (
        <>
            {categories.map((item) => {
                return (
                    <Box key={item.name}>
                        <Box sx={{
                            display: "flex",
                            direction: "row",
                            alignItems: "center",
                            my: 3
                        }}>
                            <Typography variant="h5" sx={{
                                mr: 4
                            }}>{item.name}</Typography>
                            <Typography variant="body2">Xem them</Typography>
                        </Box>
                        <Divider sx={{ my: 3 }} />
                        <Cards></Cards>
                        <Box display="flex" justifyContent="center">
                            <Button sx={{ mt: 4, color: "green", borderColor: "green", fontWeight: "bold" }} variant="outlined">Xem them</Button>
                        </Box>
                    </Box>
                )
            })}
        </>
    )
}

export default Products