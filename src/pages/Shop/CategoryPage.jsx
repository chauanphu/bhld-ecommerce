///////// Import Custom Components /////////
import { Products } from "components";


///////// Import Material Components /////////
import SortIcon from '@mui/icons-material/Sort';
import {
    Box, Button, TextField, Autocomplete,
    Pagination
} from "@mui/material"
//

//////////////////// Import React ////////////////////
import { Routes, Route, useParams } from 'react-router-dom'
import { useState, useEffect, useCallback } from "react";

///////// Import State /////////
import Product from 'services/products';

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

const Bottom = ({ count = 0, onChange = (event, page) => { } }) => {
    const page = Math.ceil(count / 12)
    return (
        <>
            {
                (page > 1) &&
                <Pagination sx={{
                    '.MuiPagination-ul': {
                        display: 'flex',
                        justifyContent: 'center'
                    }
                }} count={page} onChange={onChange} />
            }
        </>
    )

}

// const EmptyPage = () => {
//     return (
//         <Box height="50vh" display="flex">
//             <Typography sx={{
//                 typography: { xs: "h4", md: "h3" },
//                 postion: 'absolute',
//                 top: 0,
//                 right: 0,
//                 bottom: 0,
//                 left: 0,
//                 margin: 'auto',
//                 textAlign: 'center'
//             }} color="gray">Chua cap nhat hang hoa</Typography>
//         </Box >)
// }

const CategoryPage = () => {
    //State
    const [products, setProduct] = useState([])
    const [count, setCount] = useState(0)
    const { id } = useParams()

    const updateData = useCallback((event, page) => {
        if (id === 'all') {
            Product.get_all(page)
                .then(res => {
                    const { total_count, data } = res
                    setCount(total_count)
                    return data
                })
                .then(data => {
                    setProduct(data)
                })
        } else {
            Product.get_by_category(id)
                .then(res => {
                    const { total_count, data } = res
                    setCount(total_count)
                    return data
                })
                .then(data => {
                    setProduct(data)
                })
        }
    }, [id])

    //Effects
    useEffect(() => {
        updateData()
    }, [updateData])
    return (
        <Box>
            <Routes>
                <Route path="/" element={<Products header={<Header />} showHeader={false} bottom={
                    <Bottom count={count} onChange={updateData} />
                } items={products} />}>
                </Route>
            </Routes>
        </Box>
    )
}

export default CategoryPage