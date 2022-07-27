import React from 'react'
import { Box, Container } from '@mui/system'
import IntroCarousel from '../components/Carousel/Carousel'
const HomePage = () => {
    return (
        <>
            <Container fluid>
                <IntroCarousel></IntroCarousel>
            </Container>
            <Box>
                Products
            </Box>
            <Box>
                Blog
            </Box>
        </>
    )
}

export default HomePage