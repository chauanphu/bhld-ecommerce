///////// Import Custom Components /////////
import Products from "../../components/Products";
import Dropdown from "../../components/Dropdown";


///////// Import Material Components /////////
import MenuIcon from '@mui/icons-material/Menu';
import SortIcon from '@mui/icons-material/Sort';
import {
    Box, Button, TextField, Autocomplete,
    Pagination, Typography
} from "@mui/material"
//

//////////////////// Import React ////////////////////
import { Routes, Route } from 'react-router-dom'
import { useState, useEffect } from "react";

///////// Import State /////////
import Category from '../../services/category';
import Product from '../../services/products';

const Header = () => {
    return (
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
    )
}

const Bottom = () => {
    return (
        <Pagination sx={{
            '.MuiPagination-ul': {
                display: 'flex',
                justifyContent: 'center'
            }
        }} count={12} />)

}

const CategoryPage = () => {
    //State
    const [categories, setCategory] = useState([])
    const [products, setProduct] = useState([])
    //Effects
    useEffect(() => {
        Category.get_all()
            .then(res => {
                return res.json()
            })
            .then(data => {
                setCategory(data)
            })
        Product.get_all()
            .then(res => {
                return res.json()
            })
            .then(data => {
                setProduct(data)
            })
    }, [])

    return (<Box display="flex" flexDirection="row">
        {/* Category */}
        <Box sx={{
            display: { xs: 'none', md: 'block' }
        }} marginRight={5}>
            <Box sx={{ backgroundColor: "green", display: "flex", justifyContent: 'center', padding: 2 }}>
                <MenuIcon sx={{ mr: 1 }} />
                <Typography>Danh mục sản phẩm</Typography>
            </Box>
            <Dropdown items={categories} />
        </Box>
        {/* Main Content */}
        <Box sx={{
            width: {
                xs: '100%',
                md: '80%'
            }
        }}>
            <Routes>
                <Route path="/" element={<Products header={<Header />} showHeader={false} bottom={<Bottom />} items={products} />}></Route>
            </Routes>
        </Box>
    </Box>)
}

export default CategoryPage