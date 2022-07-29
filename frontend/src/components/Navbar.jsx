import React from "react";
import { useState } from 'react';
import { AppBar, Toolbar, Tabs, Tab, Stack, Typography } from "@mui/material";
import { Link } from "react-router-dom";

const Navbar = () => {
    const [tabvalue, setTab] = useState('0');
    const handleTabChange = (event, newValue) => {
        setTab(newValue)
    };
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
                position: 'static'
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
                position: 'static',
            }}>
                <Toolbar>
                    <Tabs value={tabvalue} onChange={handleTabChange} centered={true}
                        sx={{
                            width: '100%',
                        }}
                    >
                        {tabs.map((tab) => (
                            // <Link key={tab.value} style={{ textDecoration: 'none' }} to={tab.path}>
                            <Tab key={tab.value} component={Link} to={tab.path} label={tab.label} value={tab.value} sx={{
                                typography: {
                                    md: 'h6'
                                },
                                color: 'green'
                            }} />
                            // </Link>
                        )
                        )}

                    </Tabs>
                </Toolbar>
            </AppBar>
        </>
    )
}

export default Navbar