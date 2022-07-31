import { Routes, Route } from "react-router-dom"
const ProductPage = () => {
    return (
        <>
            Product
            <Routes>
                <Route path="all" element={<>Hello</>}></Route>
            </Routes>
        </>
    )
}

export default ProductPage