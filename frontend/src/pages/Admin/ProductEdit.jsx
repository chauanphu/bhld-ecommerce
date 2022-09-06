import { Edit, SimpleForm, TextInput, SelectInput, required } from 'react-admin'

const ProductEdit = (props) => {
    return <Edit>
        <SimpleForm title='Sửa Category' {...props}>
            <TextInput source='name' validate={required()} />
            <SelectInput source='parent' choices={[]} />
        </SimpleForm>
    </Edit>
}

export default ProductEdit