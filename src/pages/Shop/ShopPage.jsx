import { Navbar, Footer } from "components";

import { Outlet } from "react-router-dom"

const ShopPage = () => {

    return (
        <>
            <Navbar></Navbar>
            <Outlet />
            <Footer />
        </>
    )
}

export default ShopPage