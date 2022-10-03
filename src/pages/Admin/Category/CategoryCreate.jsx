import { Create, SimpleForm, TextInput, required } from 'react-admin'

const CategoryCreate = (props) => {
    return <Create>
        <SimpleForm title='Tạo Category' {...props}>
            <TextInput label='Tên' source='name' validate={required()} />
            <TextInput label='Tên rút gọn' validate={required()} source='normed_name' />
            <TextInput label='Đường dẫn' validate={required()} source='path' />
        </SimpleForm>
    </Create>
}

export default CategoryCreate