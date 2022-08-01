import {
    Breadcrumbs, Link, Typography, Container,
} from "@mui/material"
import { Outlet } from "react-router-dom"

const ProductPage = () => {

    return (
        <>
            <Container maxWidth='xl'>
                <Breadcrumbs aria-label="breadcrumb" sx={{ my: 3 }} separator=">">
                    <Link underline="hover" color="inherit" href="/">
                        MUI
                    </Link>
                    <Link
                        underline="hover"
                        color="inherit"
                        href="/material-ui/getting-started/installation/"
                    >
                        Core
                    </Link>
                    <Typography color="text.primary">Breadcrumbs</Typography>
                </Breadcrumbs>
                <Outlet />
            </Container>
        </>
    )
}

export default ProductPage