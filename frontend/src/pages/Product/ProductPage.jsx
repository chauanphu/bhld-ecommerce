import { Breadcrumbs, Link, Typography, Container, Box } from "@mui/material"
import { Routes, Route } from "react-router-dom"
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
                <Box display="flex" flexDirection="column">

                    <Routes>
                        <Route path="/" element={<>Hello</>}></Route>
                    </Routes>
                </Box>
            </Container>
        </>
    )
}

export default ProductPage