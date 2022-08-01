
import { Box, Skeleton, Container, Typography, Stack, Rating, Chip, Button } from "@mui/material"
import PhoneIcon from '@mui/icons-material/Phone';
import Products from "../../components/Products";

const Header = () => {
    return (<Box sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        mt: 5,
        mb: 2,
        py: 5,
    }}>
        <Typography variant="h4">Sản phẩm liên quan</Typography>
    </Box>)
}
const ProductDetailPage = () => {
    return (<>
        <Container maxWidth="xl">
            <Box display="flex" sx={{
                flexDirection: { xs: 'column', md: 'row' },
            }}>
                <Box sx={{
                    alignSelf: { xs: 'center', md: 'start' }
                }}>
                    <Skeleton variant="rectangular" width={300} height={400}></Skeleton>
                </Box>
                <Box sx={{
                    mt: { xs: 5, md: 0 },
                    ml: { xs: 0, md: 5 }
                }}>
                    <Stack>
                        <Typography sx={{ typography: { xs: 'h5', md: 'h4' } }}>Lorem ipsum</Typography>
                        <Typography sx={{ color: 'green', mt: 2, typography: { xs: 'h6', md: 'h5' } }}>285.000đ</Typography>
                        <Rating sx={{ mt: 2, fontSize: "20px" }} name="half-rating" defaultValue={4.5} precision={0.5} readOnly={true} />
                        <Typography sx={{ mt: 2 }} variant="body1">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Omnis beatae explicabo eum magnam, dolore repellat commodi dignissimos perspiciatis, nostrum non natus facere sed amet inventore rem maiores repudiandae nam?</Typography>
                        <Box display="flex" flexDirection="row" alignItems="end">
                            <Typography sx={{ mt: 2 }} variant="h6">Size: </Typography>
                            <Chip label="XL" sx={{ mx: 2 }} />
                        </Box>
                        <Box display="flex" flexDirection="row" alignItems="end">
                            <Typography sx={{ mt: 2 }} variant="h6">Màu: </Typography>
                            <Chip label="Xanh Mint" sx={{ mx: 2 }} />
                        </Box>
                        <Box display="flex" flexDirection="row" alignItems="end">
                            <Typography sx={{ mt: 2 }} variant="h6">Chất liệu: </Typography>
                            <Chip label="Len" sx={{ mx: 2 }} />
                        </Box>
                        <Box sx={{ mt: 4, mx: { xs: "auto", md: '0' } }}>
                            <Button startIcon={<PhoneIcon />} variant="outlined" sx={{ color: 'green' }}>Lien he ngay</Button>
                        </Box>
                    </Stack>
                </Box>
            </Box>
            <Box>
                <Products header={<Header />}></Products>
            </Box>
        </Container>
    </>)
}

export default ProductDetailPage