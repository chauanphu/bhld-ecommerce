import { Admin, Resource } from 'react-admin'
import restProvider from 'ra-data-simple-rest'

import { CategoryList, CategoryCreate } from 'components/AdminComponents'
const url_link = 'http://localhost:8000'
const AdminPage = () => {
    return (
        <Admin basename="/admin" dataProvider={restProvider(url_link)}>
            <Resource name="categories" list={CategoryList} create={CategoryCreate} />
        </Admin>
    )
}

export default AdminPage