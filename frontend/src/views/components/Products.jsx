import React from 'react'
import { Typography, Box, Divider, Button } from '@mui/material'
import Cards from './Cards/Cards'

const Products = () => {
    return (
        <>
            <Box sx={{
                display: "flex",
                direction: "row",
                alignItems: "center",
                my: 3
            }}>
                <Typography variant="h5" sx={{
                    mr: 4
                }}>Quan ao bao ho</Typography>
                <Typography variant="body2">Xem them</Typography>
            </Box>
            <Divider sx={{ my: 3 }} />
            <Cards></Cards>
            <Box display="flex" justifyContent="center">
                <Button sx={{ mt: 4, color: "green", borderColor: "green", fontWeight: "bold" }} variant="outlined">Xem them</Button>
            </Box>
        </>
    )
}

export default Products