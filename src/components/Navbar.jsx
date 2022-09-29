import { useState } from 'react';
import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';

import { AppBar, Toolbar, Tabs, Tab, Stack, Typography, Box, IconButton, Drawer } from "@mui/material";
import { Link } from "react-router-dom";
import MenuIcon from '@mui/icons-material/Menu';

import Dropdown from './Dropdown';
//Import State
import Category from '../services/category'
import { useEffect } from 'react';
import logo from 'assets/logo.png'

const Navbar = () => {
    const [tabvalue, setTab] = useState('0');
    const [drawer, setDrawer] = useState(false)
    const [categories, setCategory] = useState([])

    const theme = useTheme();
    const pc = useMediaQuery(theme.breakpoints.up('md'));

    const handleTabChange = (event, newValue) => {
        setDrawer(false)
        setTab(newValue)
    };
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
            name: 'TRANG CHỦ', url: '/', value: '0', style: style, sub_items: categories
        },
        {
            name: 'SẢN PHẨM', url: '/products', value: '1', style: style, sub_items: categories
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
                justifyContent: 'center'
            }}>
                {/* Logo */}
                <IconButton size="large" onClick={event => toggleDrawer(event, true)} sx={{
                    display: { md: 'none' },
                    position: 'absolute',
                }}>
                    <MenuIcon />
                </IconButton>
                <a href={tabs[0].url}><Box component="img" src={logo} alt="Logo" sx={{
                    width: 100,
                    height: 100,
                    position: { xs: 'absolute', xl: 'block' },
                    margin: { xs: '-50px auto auto auto', /*xl: '-50px 0 0 50px',*/ md: '-50px 0 0 50px' }, /*I don't see effect of xl on pc nor mobile*/
                    left: 0,
                    right: 0,
                }} /></a>
                {pc && (<Toolbar sx={{
                    width: 'fit-content',
                    display: {
                        xs: 'none',
                        md: 'block',
                    },
                    position: 'absolute',
                    margin: 'auto',
                    left: 0,
                    right: 0,
                }}>
                    <Tabs value={tabvalue} onChange={handleTabChange}>
                        {tabs.map((tab) => (
                            <Tab key={tab.value} component={Link} to={tab.url} label={tab.name} value={tab.value} sx={{
                                typography: {
                                    md: 'h6'
                                },
                                color: 'green'
                            }} />
                        )
                        )}
                    </Tabs>
                </Toolbar>)}
            </AppBar>
            <Drawer anchor='left' open={drawer} onClose={event => toggleDrawer(event, false)} sx={{ px: 2 }}>
                <Dropdown items={tabs} />
            </Drawer>
        </>
    )
}

export default Navbar