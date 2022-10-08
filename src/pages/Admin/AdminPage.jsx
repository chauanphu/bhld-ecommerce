import { Admin, Resource } from 'react-admin'
import { ProductList, ProductCreate, ProductEdit, CategoryList, CategoryEdit, CategoryCreate } from './'
import { GroupList, GroupCreate, GroupEdit } from './'
import ShoppingBasketIcon from '@mui/icons-material/ShoppingBasket';
import ArticleIcon from '@mui/icons-material/Article';
import WorkspacesIcon from '@mui/icons-material/Workspaces';
import LoginPage from "./LoginPage";
import axios from 'axios'

const apiUrl = 'http://localhost:8000/api'

const convertFileToBase64 = file =>
    new Promise((resolve, reject) => {
        const reader = new FileReader();
        reader.onload = () => resolve(reader.result);
        reader.onerror = reject;

        reader.readAsDataURL(file.rawFile);
    });

const customDataProvider = {
    getList: (resource, params) => {
        const { page, perPage } = params.pagination;
        const { field, order } = params.sort;
        const query = {
            sort: JSON.stringify([field, order]),
            range: JSON.stringify([(page - 1) * perPage, page * perPage - 1]),
            filter: JSON.stringify(params.filter),
        };
        const url = `${apiUrl}/${resource}?${JSON.stringify(query)}`;

        return axios.get(url).then(({ headers, data }) => ({
            data: data.map(resource => ({ ...resource, id: resource._id })),
            total: parseInt(headers['content-range'].split('/').pop(), 10),
        }));
    },
    getOne: (resource, params) =>
        axios.get(`${apiUrl}/${resource}/${params.id}`).then(({ data }) => ({
            data: { ...data, id: data._id },
        })),

    getMany: (resource, params) => {
        const query = {
            filter: JSON.stringify({ id: params.ids }),
        };
        const url = `${apiUrl}/${resource}?${JSON.stringify(query)}`;
        return axios(url).then(({ data }) => ({
            data: data.map(resource => ({ ...resource, id: resource._id })),
        }));
    },

    getManyReference: (resource, params) => {
        const { page, perPage } = params.pagination;
        const { field, order } = params.sort;
        const query = {
            sort: JSON.stringify([field, order]),
            range: JSON.stringify([(page - 1) * perPage, page * perPage - 1]),
            filter: JSON.stringify({
                ...params.filter,
                [params.target]: params.id,
            }),
        };
        const url = `${apiUrl}/${resource}?${JSON.stringify(query)}`;

        return axios(url).then(({ headers, data }) => ({
            data: data.map(resource => ({ ...resource, id: resource._id })),
            total: parseInt(headers.get('content-range').split('/').pop(), 10),
        }));
    },

    update: (resource, params) => {
        delete params.data._id
        /**
 * For posts update only, convert uploaded image in base 64 and attach it to
 * the `picture` sent property, with `src` and `title` attributes.
 */

        // Freshly dropped pictures are File objects and must be converted to base64 strings
        const newPictures = params.data.image

        return convertFileToBase64(newPictures)
            .then(base64Picture => {
                return {
                    src: base64Picture,
                    title: `${params.data.name}`
                }
            }
            )
            .then(transformedNewPicture => {
                params.data.image = transformedNewPicture
                return axios.put(`${apiUrl}/${resource}/${params.id}`, params.data)
                    .then(({ data }) => ({
                        data: {
                            ...data, id: data._id, image: data.image
                        },
                    }))
            });
    },

    updateMany: (resource, params) => {
        delete params.data._id
        const query = {
            filter: JSON.stringify({ id: params.data.ids }),
        };
        return axios.put(`${apiUrl}/${resource}?${JSON.stringify(query)}`, params.data).then(({ data }) => ({ data: data }));
    },

    create: (resource, params) => {
        const newPictures = params.data.image

        return convertFileToBase64(newPictures)
            .then(base64Picture => {
                return {
                    src: base64Picture,
                    title: `${params.data.name}`
                }
            }
            )
            .then(transformedNewPicture => {
                params.data.image = transformedNewPicture
                return axios.post(`${apiUrl}/${resource}`, params.data)
                    .then(({ data }) => ({
                        data: {
                            ...data, id: data._id, image: data.image
                        },
                    }))
            });
    },
    delete: (resource, params) =>
        axios(`${apiUrl}/${resource}/${params.id}`, {
            method: 'DELETE',
        }).then(({ data }) => ({
            data: { ...data, id: data._id },
        })),

    deleteMany: (resource, params) => {
        const query = {
            filter: JSON.stringify({ id: params.ids }),
        };
        return axios(`${apiUrl}/${resource}?${JSON.stringify(query)}`, {
            method: 'DELETE',
            body: JSON.stringify(params.data),
        }).then(({ data }) => ({ data: data }));
    }
};

const AdminPage = () => {
    return (
        <Admin loginPage={LoginPage} basename="/admin" dataProvider={customDataProvider}>
            <Resource icon={ShoppingBasketIcon} name="products" list={ProductList} create={ProductCreate} edit={ProductEdit} />
            <Resource icon={ArticleIcon} name="categories" list={CategoryList} create={CategoryCreate} edit={CategoryEdit} />
            <Resource icon={WorkspacesIcon} name="groups" list={GroupList} create={GroupCreate} edit={GroupEdit} />
        </Admin>
    )
}

export default AdminPage