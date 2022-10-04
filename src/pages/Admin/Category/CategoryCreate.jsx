import { Create, SimpleForm, TextInput, required, ArrayInput, SimpleFormIterator } from 'react-admin'

const CategoryCreate = (props) => {
    return <Create>
        <SimpleForm title='Tạo Category' {...props}>
            <TextInput label='Tên' source='name' validate={required()} />
            <TextInput label='Tên rút gọn' validate={required()} source='normed_name' />
            <ArrayInput label='Danh mục con' source="sub_items">
                <SimpleFormIterator inline>
                    <TextInput label='Tên' source='name' validate={required()} />
                    <TextInput label='Tên rút gọn' validate={required()} source='normed_name' />
                </SimpleFormIterator>
            </ArrayInput>
        </SimpleForm>
    </Create>
}

export default CategoryCreate