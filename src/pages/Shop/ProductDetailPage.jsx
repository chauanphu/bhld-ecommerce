//////// Import Material Components ////////
import { Box, Container, Typography, Stack, Button } from "@mui/material"
import PhoneIcon from '@mui/icons-material/Phone';

import Carousel from "components/Carousel";

import Product from "services/products";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Title, ZaloIcon } from "components";


const ProductDetailPage = () => {
    const [detail, setDetail] = useState({})

    const { id } = useParams()

    useEffect(() => {
        Product.get_by_id(id).then(data => {
            setDetail(data)
        })
    }, [id])

    return (<>
        <Container maxWidth="xl">
            <Box display="flex" sx={{
                flexDirection: { xs: 'column', md: 'row' },
                my: 5
            }}>
                <Box sx={{
                    alignSelf: { xs: 'center', md: 'start' }
                }}>
                    {
                        detail.image && <Box component="img" src={detail.image.src} alt={detail.image.title} sx={{
                            width: '100%',
                            height: "100%",
                            maxWidth: 400,
                            maxHeight: 400,
                        }} />
                    }
                </Box>
                <Box sx={{
                    mt: { xs: 5, md: 0 },
                    ml: { xs: 0, md: 5 }
                }}>
                    <Stack>
                        <Typography sx={{ typography: { xs: 'h5', md: 'h4' } }}>{detail.name}</Typography>
                        {/* <Typography sx={{ mt: 2, typography: { xs: 'h7', md: 'h6' } }}>Mã sản phẩm: {detail.code}</Typography> */}
                        <Typography sx={{ color: 'green', mt: 2, typography: { xs: 'h6', md: 'h5' } }}>Giá: {detail.price ? detail.price + 'đ' : 'Xin liên hệ'}</Typography>
                        {/* <Rating sx={{ mt: 2, fontSize: "20px" }} name="half-rating" defaultValue={4.5} precision={detail.rating} /> */}
                        {detail.description && <Typography sx={{ mt: 2 }} variant="body1">{detail.description}</Typography>}
                        {detail.features && detail.features.map(
                            feature => <Box key={feature.type} display="flex" flexDirection="row" alignItems="center" sx={{ mt: 2 }}>
                                <Typography sx={{ fontWeight: 'bold', fontSize: { xs: '18px', md: '20px' } }}>{feature.type}: </Typography>
                                <Typography sx={{ mx: 1, typography: { xs: 'h7', md: 'h6' } }}>{feature.value}</Typography>
                            </Box>
                        )
                        }
                        <Box sx={{ mt: 4, mx: { xs: "auto", md: '0' } }}>
                            <Button startIcon={<PhoneIcon />} variant="outlined" sx={{ color: 'green' }} component='a' href='tel:0945316280'>
                                Điện thoại
                            </Button>
                            <Button startIcon={<ZaloIcon />} variant="outlined" sx={{ color: 'blue', ml: 1 }} component='a' onClick={() => {
                                window.open("https://zalo.me/0945316280")
                            }}>
                                Zalo
                            </Button>
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