import Section from './Section'
import panel_img from 'assets/panel.webp'
import { Grid, Typography, Box } from '@mui/material'
import LocalShippingIcon from '@mui/icons-material/LocalShipping';
import StarIcon from '@mui/icons-material/Star';
import AttachMoneyIcon from '@mui/icons-material/AttachMoney';
import HeadsetMicIcon from '@mui/icons-material/HeadsetMic';
import { green, orange } from '@mui/material/colors'

import { Title, Products } from 'components';

const ProductHeader = ({ title }) => {
    return <Box display="flex">
        <Typography fontWeight="bold" className="product-header">
            {title}
        </Typography>
    </Box>
}
const HomePage = () => {
    const groups = [
        { name: 'Nón bảo hộ', category: 'non-bao-ho' },
        { name: 'Giày vải', category: 'giay' },
    ]
    return (
        <>
            <Section variant='screen'>
                <img src={panel_img} alt="Panel" className='img-panel' />
            </Section>
            <Title title='Lí do chọn chúng tôi' backgroundColor={orange[100]} />
            <Section variant='auto'>
                <Typography marginX='auto' marginBottom={4} textAlign='center' variant='h6' maxWidth='800px'>
                    Công ty Trần Gia Phát có
                    <Typography display='inline' variant='inherit' fontWeight='bold'> 10+ </Typography>
                    năm kinh nghiệm trong lĩnh vực kinh doanh thiết bị bảo hộ lao động và đồng phục. Là đối tượng
                    <Typography display='inline' variant='inherit' fontWeight='bold'> #1 </Typography>
                    của nhiều thương hiệu lớn.
                </Typography>
                <Grid id="hero" className='grid' container rowGap={2} justifyContent={{ xs: "center", md: "evenly" }}>
                    <Grid item className='item' xs={6} md={2}>
                        <LocalShippingIcon fontSize='large' />
                        <Typography>
                            Giao hàng nhanh
                        </Typography>
                    </Grid>
                    <Grid item className='item' xs={6} md={2}>
                        <StarIcon fontSize='large'></StarIcon>
                        <Typography>
                            Sản phẩm chất lượng cao
                        </Typography>
                    </Grid>
                    <Grid item className='item' xs={6} md={2}>
                        <AttachMoneyIcon fontSize='large' />
                        <Typography>
                            Giá cạnh tranh
                        </Typography>
                    </Grid>
                    <Grid item className='item' xs={6} md={2}>
                        <HeadsetMicIcon fontSize='large'></HeadsetMicIcon>
                        <Typography>
                            Hỗ trợ 24/7
                        </Typography>
                    </Grid>
                </Grid>
            </Section>

            <Title title='Danh mục sản phẩm' backgroundColor={green[100]} />
            <Section id="product-category" variant='auto'>
                {groups.map((group => <Box key={group.category}>
                    <Products id={group.category} header={<ProductHeader title={group.name} />} />
                </Box>))}
            </Section>
        </>
    )
}

export default HomePage