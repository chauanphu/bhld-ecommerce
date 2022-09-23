import { Typography, Box, Button } from "@mui/material"
import PhoneIcon from '@mui/icons-material/Phone';
import { ZaloIcon } from "components";

import { green } from "@mui/material/colors"
import { Form } from "components"
const ContactPage = () => {
    return (
        <Box display="flex">
            <Box sx={{
                postion: 'absolute',
                top: 0,
                right: 0,
                bottom: 0,
                left: 0,
                margin: 'auto',
                textAlign: 'center',
                backgroundColor: green['300'],
                padding: 4,
                borderRadius: 4,
                display: 'flex',
                flexDirection: 'column'
            }}>
                <Typography sx={{ color: green[900], mb: 2 }} variant="h4">Thông tin liên lạc</Typography>
                <Form />
                <Typography sx={{ color: green[900], my: 2 }}>Hoặc</Typography>
                <Button startIcon={<PhoneIcon />} sx={{
                    fontSize: 18, fontWeight: 'bold', backgroundColor: 'red', py: 1.5, color: 'white', borderColor: "red", borderRadius: 7
                }} component='a' href='tel:0945316280'>
                    0945 316 280
                </Button>
                <Button startIcon={<ZaloIcon />} sx={{
                    fontSize: 18, fontWeight: 'bold', backgroundColor: 'purple', py: 1.5, color: 'white', borderColor: "purple", borderRadius: 7, mt: 2
                }} component='a' onClick={() => {
                    window.open("https://zalo.me/0945316280")
                }}>
                    0945 316 280
                </Button>
            </Box>
        </Box >)
}

export default ContactPage