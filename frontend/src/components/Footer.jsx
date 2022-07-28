import { Box, Typography, Grid, Container, List, ListItem, ListItemText, ListItemIcon, Skeleton } from "@mui/material"
import PhoneIcon from '@mui/icons-material/Phone';
import EmailIcon from '@mui/icons-material/Email';
import {
    green, grey, blueGrey
} from "@mui/material/colors"

const Footer = () => {
    return (
        <footer >
            <Box>
                <Box sx={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    mt: 5,
                    py: 5,
                    backgroundColor: green[800]
                }}>
                    <Typography textAlign="center" variant="h4">Công ty TNHH Thương mại Dệt may Trần Gia Phát</Typography>
                </Box>
                <Box sx={{
                    py: 3,
                    backgroundColor: grey[900]
                }}>
                    <Container maxWidth='lg'>
                        <Grid container>
                            <Grid sx={{ color: "white" }} item lg={3}>
                                <Typography sx={{
                                    mt: 2,
                                    color: 'green'
                                }} variant="h5">Liên hệ</Typography>
                                <List>
                                    <ListItem>
                                        <ListItemIcon sx={{ color: "white" }}><PhoneIcon /></ListItemIcon>
                                        <ListItemText variant="body1">
                                            0945 316 280
                                        </ListItemText>
                                    </ListItem>
                                    <ListItem>
                                        <ListItemIcon sx={{ color: "white" }}><PhoneIcon /></ListItemIcon>
                                        <ListItemText variant="body1">
                                            0945 316 280
                                        </ListItemText>
                                    </ListItem>
                                    <ListItem>
                                        <ListItemIcon sx={{ color: "white" }}><EmailIcon /></ListItemIcon>
                                        <ListItemText variant="body1">
                                            phuclinh@baoholaodong.com
                                        </ListItemText>
                                    </ListItem>
                                </List>
                            </Grid>
                            <Grid sx={{ color: "white", mt: 2, ml: 2 }} item lg={4}>
                                <Typography sx={{ color: 'green' }} variant="h5">Cửa hàng</Typography>
                                <List>
                                    <ListItemText >
                                        48/5 Thái Thị Giữ xã Bà Điểm, Hóc
                                        Môn, TP HCM
                                    </ListItemText>
                                    <ListItemText sx={{ my: 2 }}>
                                        Mở cửa: 7:00 - 18:00 | Thứ 2 - 7
                                    </ListItemText>
                                    <ListItemText sx={{ color: 'red' }}>
                                        CN nghỉ
                                    </ListItemText>
                                </List>
                            </Grid>
                            <Grid sx={{ color: "white", mt: 2, my: 2 }} item lg={3}>
                                <Skeleton variant="rectangular" sx={{
                                    minWidth: 350,
                                }} height={200}></Skeleton>
                            </Grid>
                        </Grid>
                    </Container>
                </Box>
            </Box>
            <Box sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                py: 3,
                backgroundColor: blueGrey
                [900]
            }}>
                <Typography color="white">Bản quyền thuộc CTY TNHH Thương mại Dệt may Trần Gia Phát || thiết kế bởi CGP</Typography>
            </Box>
        </footer>
    )
}

export default Footer