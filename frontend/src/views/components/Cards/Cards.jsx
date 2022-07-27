import { Grid, Card, CardHeader, CardContent, Typography, Skeleton, Rating, Box } from "@mui/material"
const Cards = () => {
    const items = [
        { name: '#Name1', img: '', price: "289,000" },
        { name: '#Name2', img: '', price: "289,000" },
        { name: '#Name3', img: '', price: "289,000" },
        { name: '#Name4', img: '', price: "289,000" },
        { name: '#Name5', img: '', price: "289,000" },
    ]

    return (
        <Grid container spacing={2} columns={{ xs: 1, md: 3, lg: 4 }} justifyContent={{ xs: "center", md: "space-between" }}>
            {items.map((item) => {
                return (
                    <Grid key={item.name} item>
                        <Card width="300px">
                            <CardHeader title={item.name} />
                            <Skeleton variant="rectangular" minwidth={300} height={300}></Skeleton>
                            <CardContent>
                                <Box display="flex" alignItems="center" justifyContent="space-between">
                                    <Typography variant="h5" marginRight={1}>{item.price}</Typography>
                                    <Rating name="half-rating" defaultValue={4.5} precision={0.5} readOnly={true} />
                                </Box>
                            </CardContent>
                        </Card>
                    </Grid>
                )
            })}
        </Grid>
    )
}

export default Cards