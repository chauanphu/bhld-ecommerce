import { Card, CardHeader, CardContent, Box, Rating, Typography, Skeleton } from "@mui/material"

const ProductCard = ({ item }) => {
    return (<Card width="300px">
        <CardHeader title={item.name} />
        <Skeleton variant="rectangular" minwidth={300} height={300}></Skeleton>
        <CardContent>
            <Box display="flex" alignItems="center" justifyContent="space-between">
                <Typography variant="h5" marginRight={1}>{item.price}</Typography>
                <Rating name="half-rating" defaultValue={4.5} precision={0.5} readOnly={true} />
            </Box>
        </CardContent>
    </Card>)
}

export default ProductCard