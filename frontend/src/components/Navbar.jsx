import React from "react";
import { useState } from 'react';
import { AppBar, Toolbar, Tabs, Tab, Stack, Typography } from "@mui/material";

const Navbar = () => {
    const [tabvalue, setTab] = useState('1');
    const handleTabChange = (event, newValue) => {
        setTab(newValue)
    };
    const tabs = [
        { label: 'Trang chu', value: '1' },
        { label: 'San pham', value: '2' },
        { label: 'Lien lac', value: '3' },
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
                        {tabs.map((tab) => <Tab key={tab.value} label={tab.label} value={tab.value} sx={{
                            typography: {
                                md: 'h6'
                            },
                            color: 'green'
                        }} />)}

                    </Tabs>
                </Toolbar>
            </AppBar>
        </>
    )
}

export default Navbar