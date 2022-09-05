import { Create, SimpleForm, TextInput, ImageField } from 'react-admin'

const CategoryCreate = (props) => {
    return <Create>
        <SimpleForm title='Create new Category' {...props}>
            <ImageField source="url" />
            <TextInput source='name' />
        </SimpleForm>
    </Create>
}

export default CategoryCreate