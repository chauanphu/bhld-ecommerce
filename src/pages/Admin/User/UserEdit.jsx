import { Edit, required } from 'react-admin'
import { SimpleForm, TextInput, PasswordInput, SelectInput } from 'react-admin'

const UserEdit = (props) => {
    const choices = [
        { value: 'admin', label: 'Admin' },
        { value: 'store-manager', label: 'Quản lý kho' },
    ];

    return <Edit>
        <SimpleForm title='Tạo User' {...props}>
            <TextInput label='Tên' source='username' validate={required()} />
            <PasswordInput label='Password' validate={required()} source='password' />
            <SelectInput source="role" label='Vai trò' optionValue='value' optionText="label" choices={choices} />
        </SimpleForm>
    </Edit>
}

export default UserEdit