import { Box, Typography, Grid, Container, List, ListItem, ListItemText, ListItemIcon } from "@mui/material"
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
                    <Typography variant="h4">Công ty TNHH Thương mại Dệt may Trần Gia Phát</Typography>
                </Box>
                <Box sx={{
                    py: 3,
                    backgroundColor: grey[800]
                }}>
                    <Container>
                        <Grid container>
                            <Grid item md={4} backgroundColor="white">
                                <Box display="flex" alignItems="center" justifyContent="center" marginBottom={2} >
                                    <Typography variant="h5">Liên hệ</Typography>
                                </Box>
                                <List>
                                    <ListItem>
                                        <ListItemIcon><PhoneIcon /></ListItemIcon>
                                        <ListItemText variant="body1">
                                            0945 316 280
                                        </ListItemText>
                                    </ListItem>
                                    <ListItem>
                                        <ListItemIcon><PhoneIcon /></ListItemIcon>
                                        <ListItemText variant="body1">
                                            0945 316 280
                                        </ListItemText>
                                    </ListItem>
                                    <ListItem>
                                        <ListItemIcon><EmailIcon /></ListItemIcon>
                                        <ListItemText variant="body1">
                                            phuclinh@baoholaodong.com
                                        </ListItemText>
                                    </ListItem>
                                </List>
                            </Grid>
                            <Grid item md={8} backgroundColor="white">

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