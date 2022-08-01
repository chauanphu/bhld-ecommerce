import { Typography, Box } from "@mui/material"

const NotFoundPage = () => {
    return (
        <Box height="50vh" display="flex">
            <Typography sx={{
                postion: 'absolute',
                top: 0,
                right: 0,
                bottom: 0,
                left: 0,
                margin: 'auto',
                textAlign: 'center'
            }} variant="h3" color="gray">404 Không tìm thấy</Typography>
        </Box >)
}

export default NotFoundPage