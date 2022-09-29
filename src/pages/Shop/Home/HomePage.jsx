import Section from './Section'
import panel_img from 'assets/panel.webp'
import { Grid, Typography } from '@mui/material'
import LocalShippingIcon from '@mui/icons-material/LocalShipping';
import StarIcon from '@mui/icons-material/Star';
import AttachMoneyIcon from '@mui/icons-material/AttachMoney';
import HeadsetMicIcon from '@mui/icons-material/HeadsetMic';

import { Title } from 'components';
const HomePage = () => {
    return (
        <>
            <Section variant='screen'>
                <img src={panel_img} alt="Panel" className='img-panel' />
            </Section>
            <Title title='Lí do chọn chúng tôi' backgroundColor='white' />
            <Section variant='auto'>
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

            <Title title='Danh mục sản phẩm' backgroundColor='white' />
        </>
    )
}

export default HomePage