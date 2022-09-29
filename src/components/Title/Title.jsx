import React from 'react'
import { Box, Typography } from '@mui/material'
import { orange } from '@mui/material/colors';
import customer_divider from './divider.svg'

const Title = ({ id, title, backgroundColor = orange[50] }) => {
    return (
        <>
            <Box id={id} sx={{
                display: "flex",
                flexDirection: 'column',
                alignItems: "center",
                justifyContent: "center",
                py: 5,
                backgroundColor: backgroundColor,
            }}>
                <Typography variant="h5" fontWeight="bold" fontFamily="Roboto">{title}</Typography>
                <Box component="img" src={customer_divider} width="100%" maxWidth={500} marginTop={1}></Box>
            </Box>
        </>
    );
}

export default Title