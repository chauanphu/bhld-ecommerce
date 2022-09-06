import { Create, SimpleForm, TextInput } from 'react-admin'

const ProductCreate = (props) => {
    return <Create>
        <SimpleForm title='Tạo Category' {...props}>
            <TextInput source='name' />
        </SimpleForm>
    </Create>
}

export default ProductCreate