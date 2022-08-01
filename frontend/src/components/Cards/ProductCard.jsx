import { Card, CardHeader, CardContent, Box, Rating, Typography, Skeleton } from "@mui/material"

const ProductCard = ({ item }) => {
    return (<Card sx={{ mb: 5, mx: 2 }}>
        <CardHeader title={
            <Typography sx={{ typography: { xs: 'h7', md: 'h5' } }}>{item.name}</Typography>
        } />
        <Skeleton variant="rectangular" sx={{
            width: { xs: 135, md: 250 },
            height: { xs: 170, md: 300 }
        }}></Skeleton>
        <CardContent>
            <Box display="flex" alignItems="center" flexDirection='column'>
                <Typography sx={{
                    typography: { xs: 'body2', md: 'h5' }
                }}>{item.price}</Typography>
                <Rating sx={{ mt: 1, fontSize: { xs: '12px', md: '20px' } }} name="half-rating" defaultValue={4.5} precision={0.5} readOnly={true} />
            </Box>
        </CardContent>
    </Card>)
}

export default ProductCard