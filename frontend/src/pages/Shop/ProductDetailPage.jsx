//////// Import Material Components ////////
import { Box, Container, Typography, Stack, Chip, Button } from "@mui/material"
import PhoneIcon from '@mui/icons-material/Phone';
import Carousel from "components/Carousel";

import Product from "services/products";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Title } from "components";

const ProductDetailPage = () => {
    const [detail, setDetail] = useState({})

    const { id } = useParams()

    useEffect(() => {
        Product.get_by_id(id).then(data => setDetail(data))
    }, [id])

    return (<>
        <Container maxWidth="xl">
            <Box display="flex" sx={{
                flexDirection: { xs: 'column', md: 'row' },
                mb: 10
            }}>
                <Box sx={{
                    alignSelf: { xs: 'center', md: 'start' }
                }}>
                    <Box component="img" src={detail.img} alt="San pham" sx={{
                        width: 300,
                        height: 400
                    }} />
                </Box>
                <Box sx={{
                    mt: { xs: 5, md: 0 },
                    ml: { xs: 0, md: 5 }
                }}>
                    <Stack>
                        <Typography sx={{ typography: { xs: 'h5', md: 'h4' } }}>{detail.name}</Typography>
                        <Typography sx={{ mt: 2, typography: { xs: 'h6', md: 'h5' } }}>Mã sản phẩm: {detail.code}</Typography>
                        <Typography sx={{ color: 'green', mt: 2, typography: { xs: 'h6', md: 'h5' } }}>{detail.price}đ</Typography>
                        {/* <Rating sx={{ mt: 2, fontSize: "20px" }} name="half-rating" defaultValue={4.5} precision={detail.rating} /> */}
                        {detail.description && <Typography sx={{ mt: 2 }} variant="body1">{detail.description}</Typography>}
                        {detail.sizes && <Box display="flex" flexDirection="row" alignItems="end">
                            <Typography sx={{ mt: 2 }} variant="h6">Size: </Typography>
                            {detail.sizes.map(size => <Chip key={size} label={size} sx={{ mx: 1 }} />)}
                        </Box>}
                        {detail.colors && <Box display="flex" flexDirection="row" alignItems="end">
                            <Typography sx={{ mt: 2 }} variant="h6">Màu: </Typography>
                            {detail.colors.map(color => <Chip key={color} label={color} sx={{ mx: 1 }} />)}
                        </Box>}
                        {detail.materials && <Box display="flex" flexDirection="row" alignItems="end">
                            <Typography sx={{ mt: 2 }} variant="h6">Chất liệu: </Typography>
                            {detail.materials.map(material => <Chip key={material} label={material} sx={{ mx: 1 }} />)}
                        </Box>}
                        <Box sx={{ mt: 4, mx: { xs: "auto", md: '0' } }}>
                            <Button startIcon={<PhoneIcon />} variant="outlined" sx={{ color: 'green' }}>Lien he ngay</Button>
                        </Box>
                    </Stack>
                </Box>
            </Box>
            {detail.related_products && <>
                <Title title='SẢN PHẨM LIÊN QUAN' backgroundColor='white' />
                <Carousel items={detail.related_products}></Carousel>
            </>}
        </Container>
    </>)
}

export default ProductDetailPage