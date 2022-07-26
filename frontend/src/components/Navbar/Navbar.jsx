import React from "react";
import { AppBar, Toolbar, IconButton, Badge, Typography } from "@mui/material";
import { ShoppingCart } from "@mui/icons-material";
import useStyle from './style'

const Navbar = () => {
    const classes = useStyle()

    return (
        <>
            <AppBar position="fixed" className="classess.appBar" color="inherit">
                <Toolbar>
                    <Typography variant="h6" className={classes.title} color="inherit">
                        <img src="" alt="CGP TECH" height='25px' className={classes.image} />
                        CGP TECH
                    </Typography>
                    <div className={classes.grow}></div>
                    <div className={classes.button}>
                        <IconButton aria-label="Show cart items" color="inherit">
                            <Badge badgeContent={2} color="secondary">
                                <ShoppingCart></ShoppingCart>
                            </Badge>
                        </IconButton>
                    </div>
                </Toolbar>
            </AppBar>
        </>
    )
}

export default Navbar