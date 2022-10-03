import { useState } from 'react';
import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';

import { AppBar, Toolbar, Button, Stack, Typography, Box, IconButton, Drawer } from "@mui/material";
import { Link } from "react-router-dom";
import MenuIcon from '@mui/icons-material/Menu';

import Dropdown from '../Dropdown';

//Import State
import Category from '../../services/category'
import { useEffect } from 'react';
import logo from 'assets/logo.png'

// Import style
import './index.sass'

const DropdownMenu = ({ items = [] }) => {
    return (
        <Box className="dropdown-content">
            {items.map(el => <Box className='category'>
                <Button key={el.normed_name} component={Link} to={'categories/' + el.normed_name}>{el.name}</Button>
            </Box>
            )}
        </Box>
    )
}
const Navbar = () => {
    const [drawer, setDrawer] = useState(false)
    const [categories, setCategory] = useState([])

    const theme = useTheme();
    const pc = useMediaQuery(theme.breakpoints.up('md'));

    const toggleDrawer = (event, newValue) => {
        setDrawer(newValue)
    }
    const style = {
        typography: 'h6',
        color: 'green',
        py: 0.5,
    }

    useEffect(() => {
        Category.get_all()
            .then(res => {
                return res.json()
            })
            .then(data => {
                setCategory(data)
            })
    }, [])
    const tabs = [
        {
            name: 'TRANG CHỦ', url: '/', value: '0', style: style
        },
        {
            name: 'SẢN PHẨM', url: '/categories/all', value: '1', style: style, sub_items: categories
        },
        // { label: 'San pham', url: '/products', value: '1' },
        {
            name: 'LIÊN HỆ', url: '/contact', value: '2', style: style
        },
    ]
    return (
        <>
            <AppBar sx={{
                height: "30px",
                backgroundColor: 'gray',
                position: 'static',
            }}>
                <Stack direction="row" spacing={2} sx={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                }}>
                    <Typography variant="body2">SĐT: 0945 316 280</Typography>
                    <Typography variant="body2">Mở cửa từ 7:00 - 17:00 từ T2 - T6</Typography>
                </Stack>
            </AppBar>
            {/* Navbar */}
            <AppBar sx={{
                height: 100,
                backgroundColor: 'white',
                position: 'relative',
                display: 'flex',
                justifyContent: 'center',
            }}>
                {/* Logo */}
                <IconButton size="large" onClick={event => toggleDrawer(event, true)} sx={{
                    display: { md: 'none' },
                    position: 'absolute',
                }}>
                    <MenuIcon />
                </IconButton>
                <a href={tabs[0].url}><Box component="img" src={logo} alt="Logo" sx={{
                    width: 69,
                    height: 69,
                    position: { xs: 'absolute', xl: 'block' },
                    margin: { xs: '-35px auto auto auto', /*xl: '-50px 0 0 50px',*/ md: '-35px 0 0 50px' }, /*I don't see effect of xl on pc nor mobile*/
                    left: 0,
                    right: 0,
                }} /></a>
                {pc && (<Toolbar sx={{
                    width: 'fit-content',
                    display: {
                        xs: 'none',
                        md: 'flex',
                    },
                    position: 'absolute',
                    margin: 'auto',
                    left: 0,
                    right: 0,
                }}>
                    <Button className='link' component={Link} to={tabs[0].url}>{tabs[0].name}</Button>
                    <Box className='dropdown'>
                        <Button className='link' component={Link} to={tabs[1].url}>{tabs[1].name}</Button>
                        <DropdownMenu className='dropdown-content' items={categories}></DropdownMenu>
                    </Box>
                    <Button className='link' component={Link} to={tabs[2].url}>{tabs[2].name}</Button>
                </Toolbar>)}
            </AppBar>
            {/* Drawer */}
            <Drawer anchor='left' open={drawer} onClose={event => toggleDrawer(event, false)} sx={{ px: 2 }}>
                <Typography variant='h6' fontWeight='bold' textAlign='center' color='white' sx={{ width: '100%', height: '40px', backgroundColor: 'green' }}>
                    DANH MỤC
                </Typography>
                <Dropdown items={tabs} />
            </Drawer>
        </>
    )
}

export default Navbar