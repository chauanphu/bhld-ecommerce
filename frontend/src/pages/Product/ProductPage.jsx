import {
    Breadcrumbs, Link, Typography, Container, Box, List, ListItem, ListItemText, ListItemButton, Divider, Button, TextField, Autocomplete
} from "@mui/material"
import { Routes, Route } from "react-router-dom"
import MenuIcon from '@mui/icons-material/Menu';
import SortIcon from '@mui/icons-material/Sort';

const ProductPage = () => {
    const categories = [
        { name: 'Đồng phục công nhân' },
        { name: 'Đồng phục công sở' },
        { name: 'Đồng phục công nhân' },
        { name: 'Đồng phục công nhân' },
        { name: 'Đồng phục công nhân' },
    ]
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
                <Box display="flex" flexDirection="row">
                    {/* Category */}
                    <Box sx={{
                        display: { xs: 'none', md: 'block' }
                    }} marginRight={5}>
                        <Box sx={{ backgroundColor: "green", display: "flex", justifyContent: 'center', padding: 2 }}>
                            <MenuIcon sx={{ mr: 1 }} />
                            <Typography>Danh mục sản phẩm</Typography>
                        </Box>
                        <List>
                            {categories.map((el, index) => {
                                return (
                                    <Box key={index}>
                                        <ListItem sx={{ padding: 0 }}>
                                            <ListItemButton >
                                                <ListItemText>{el.name}</ListItemText>
                                            </ListItemButton>
                                        </ListItem>
                                        <Divider />
                                    </Box>
                                )
                            })}

                        </List>
                    </Box>
                    <Box sx={{
                        width: {
                            xs: '100%',
                            md: '80%'
                        }
                    }}>
                        <Box display="flex" flexDirection="row" marginBottom={1} sx={{ justifyContent: { xs: "space-between", md: 'end' } }} >
                            <Button startIcon={<SortIcon />}>
                                Giá giảm dần
                            </Button>
                            <Autocomplete
                                freeSolo
                                id="free-solo-2-demo"
                                disableClearable
                                options={[]}
                                renderInput={(params) => (
                                    <TextField
                                        {...params}
                                        label="Tìm kiếm sản phẩm"
                                        InputProps={{
                                            ...params.InputProps,
                                            type: 'search',
                                        }}
                                    />
                                )}
                                sx={{
                                    ml: 2,
                                    minWidth: { xs: 150, md: 200 }
                                }}
                            />
                        </Box>
                        <Routes>
                            <Route path="/" element={<>Hello</>}></Route>
                        </Routes>
                    </Box>
                </Box>
            </Container>
        </>
    )
}

export default ProductPage