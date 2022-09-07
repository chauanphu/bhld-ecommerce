import { Card, CardHeader, CardContent, CardActionArea, Box, Typography, Skeleton } from "@mui/material"
// import {Rating} from '@mui/material'
import { Link } from 'react-router-dom'

const ProductCard = ({ item }) => {
    return (
        <CardActionArea sx={{ mb: 5, mx: 2, maxWidth: { md: 250, xs: 200 } }} LinkComponent={Link} to={"/product/" + item.id}>
            <Card>
                <CardHeader title={
                    <Typography textAlign="center" sx={{ fontSize: { xs: '1em', md: '1.2em' }, height: '58px', textOverflow: 'ellipsis' }}>
                        {item.name}
                    </Typography>
                } />
                <Skeleton variant="rectangular" sx={{
                    width: { xs: 200, md: 250 },
                    height: { xs: 200, md: 250 }
                }}></Skeleton>
                <CardContent>
                    <Box display="flex" alignItems="center" flexDirection='column'>
                        <Typography sx={{
                            color: 'green',
                            fontSize: { xs: '1.2em', md: '1.5em' }
                        }}>{item.price} đ</Typography>
                        {/* <Rating sx={{ mt: 1, fontSize: { xs: '12px', md: '20px' } }} name="half-rating" defaultValue={4.5} precision={0.5} readOnly={true} /> */}
                    </Box>
                </CardContent>
            </Card>
        </CardActionArea>
    )
}

export default ProductCard