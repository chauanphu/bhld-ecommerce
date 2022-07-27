import React from 'react'
import Carousel from 'react-material-ui-carousel'
import { Box } from '@mui/material'

import carousel_1 from '../../assets/carousel-1.jpg'
import carousel_2 from '../../assets/carousel-2.jpg'
import carousel_3 from '../../assets/carousel-3.jpg'

const IntroCarousel = () => {
    var items = [
        {
            name: "Random Name #1",
            img: carousel_1
        },
        {
            name: "Random Name #2",
            img: carousel_2
        },
        {
            name: "Random Name #2",
            img: carousel_3
        }
    ]

    return (
        <Carousel interval={2000} animation='slide' sx={{
            width: '100vw',
            position: 'relative',
            left: 0
        }}>
            {
                items.map((item, i) => <Item key={i} item={item} />)
            }
        </Carousel>
    )
}

const Item = ({ item }) => {
    return (
        <Box
            component="img"
            sx={{
                height: {
                    xs: '50vh',
                    md: '80vh'
                },
                width: '100vw'
            }}
            alt={item.name}
            src={item.img}
        />
    )
}
export default IntroCarousel