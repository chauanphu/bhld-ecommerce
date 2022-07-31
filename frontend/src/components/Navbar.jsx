import React from "react";
import { useState } from 'react';
import { AppBar, Toolbar, Tabs, Tab, Stack, Typography, Skeleton, IconButton, Drawer } from "@mui/material";
import { Link } from "react-router-dom";
import MenuIcon from '@mui/icons-material/Menu';

const Navbar = () => {
    const [tabvalue, setTab] = useState('0');
    const [drawer, setDrawer] = useState(false)
    const handleTabChange = (event, newValue) => {
        setDrawer(false)
        setTab(newValue)
    };
    const toggleDrawer = (event, newValue) => {
        setDrawer(newValue)
    }
    const tabs = [
        { label: 'Trang chu', path: '/', value: '0' },
        { label: 'San pham', path: '/products', value: '1' },
        { label: 'Lien lac', path: '/contact', value: '2' },
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
                height: "80px",
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
                <Skeleton sx={{
                    width: 100,
                    height: 70,
                    position: { xs: 'absolute', md: 'block' },
                    margin: { xs: 'auto', md: '0 0 0 50px' },
                    ml: 5,
                    left: 0,
                    right: 0,
                }}></Skeleton>
                <Toolbar sx={{
                    width: 'fit-content',
                    visibility: {
                        xs: 'hidden',
                        md: 'visible',
                    },
                    position: 'absolute',
                    margin: 'auto',
                    left: 0,
                    right: 0,
                }}>
                    <Tabs value={tabvalue} onChange={handleTabChange}>
                        {tabs.map((tab) => (
                            <Tab key={tab.value} component={Link} to={tab.path} label={tab.label} value={tab.value} sx={{
                                typography: {
                                    md: 'h6'
                                },
                                color: 'green'
                            }} />
                        )
                        )}
                    </Tabs>
                </Toolbar>
            </AppBar>
            <Drawer anchor='left' open={drawer} onClose={event => toggleDrawer(event, false)}>
                <Tabs value={tabvalue} orientation="vertical" onChange={handleTabChange}>
                    {tabs.map((tab) => (
                        <Tab key={tab.value} component={Link} to={tab.path} label={tab.label} value={tab.value} sx={{
                            typography: {
                                md: 'h6'
                            },
                            color: 'green'
                        }} />
                    )
                    )}
                </Tabs>
            </Drawer>
        </>
    )
}

export default Navbar