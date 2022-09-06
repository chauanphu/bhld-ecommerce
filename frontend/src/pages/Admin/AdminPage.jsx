import { Admin, Resource } from 'react-admin'
import restProvider from 'ra-data-simple-rest'

import { ProductList, ProductCreate, ProductEdit } from './'
import ShoppingBasketIcon from '@mui/icons-material/ShoppingBasket';
import LoginPage from "./LoginPage";

const url_link = 'http://localhost:8000'

const AdminPage = () => {
    return (
        <Admin loginPage={LoginPage} basename="/admin" dataProvider={restProvider(url_link)}>
            <Resource icon={ShoppingBasketIcon} name="products" list={ProductList} create={ProductCreate} edit={ProductEdit} />
        </Admin>
    )
}

export default AdminPage