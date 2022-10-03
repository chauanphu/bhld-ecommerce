import { Edit, required } from 'react-admin'
import { SimpleForm, TextInput, ArrayInput, SimpleFormIterator } from 'react-admin'

const CategoryEdit = (props) => {
    return <Edit>
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
    </Edit>
}

export default CategoryEdit