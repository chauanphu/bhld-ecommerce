import React from 'react'
import { Box } from '@mui/system'
import { Typography, Container, Divider } from '@mui/material'
import { IntroCarousel, Products } from './components'

import { orange } from '@mui/material/colors';

const HomePage = () => {
    return (
        <>
            <Box fluid>
                <IntroCarousel></IntroCarousel>
            </Box>
            <Box sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                mt: 5,
                mb: 2,
                py: 5,
                backgroundColor: orange[50]
            }}>
                <Typography variant="h4">Danh Mục Sản Phẩm</Typography>
            </Box>
            <Container sx={{
                height: '100%'
            }} maxWidth="xl">
                <Products></Products>
            </Container>
            <Box>

            </Box>
        </>
    )
}

export default HomePage