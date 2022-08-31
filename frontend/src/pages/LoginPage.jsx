import { Typography, Box, FormControl, TextField, Divider, Button } from "@mui/material"
import { green } from '@mui/material/colors'
const LoginPage = () => {
    return (
        <Box height="50vh" display="flex" alignItems="center" justifyContent="center">
            <Box padding={5} border={2} borderColor={green[300]} borderRadius={2}>
                <Typography variant="h4" textAlign="center">
                    Log In
                </Typography>
                <Divider sx={{ my: 2 }} />
                <FormControl variant="standard">
                    <TextField label="Tai khoan" />
                    <TextField margin="normal" label="Mat khau" />
                    <Divider sx={{ my: 2 }} />

                    <Button variant="outlined" sx={{ py: 1.5, color: 'blue', borderColor: "blue" }}>Dang nhap</Button>
                </FormControl>
            </Box>
        </Box >)
}

export default LoginPage