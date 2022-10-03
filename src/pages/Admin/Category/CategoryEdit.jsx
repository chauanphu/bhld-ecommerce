import { Edit, required } from 'react-admin'
import { SimpleForm, TextInput, } from 'react-admin'

const CategoryEdit = (props) => {
    return <Edit>
        <SimpleForm title='Tạo Category' {...props}>
            <TextInput label='Tên' source='name' validate={required()} />
            <TextInput label='Tên rút gọn' validate={required()} source='normed_name' />
            <TextInput label='Đường dẫn' validate={required()} source='path' />
        </SimpleForm>
    </Edit>
}

export default CategoryEdit