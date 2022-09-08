import { Container, Box } from "@mui/material"
import { Navbar, Footer } from "components";

import { Outlet } from "react-router-dom"

const ShopPage = () => {

    return (
        <>
            <Navbar></Navbar>
            <Container maxWidth='xl'>
                <Box marginBottom={5}>
                </Box>
                <Outlet />
            </Container>
            <Footer />
        </>
    )
}

export default ShopPage