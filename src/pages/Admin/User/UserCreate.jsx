import { Create, SimpleForm, TextInput, required, PasswordInput, SelectInput } from 'react-admin'

const UserCreate = (props) => {
    const choices = [
        { value: 'admin', label: 'Admin' },
        { value: 'store-manager', label: 'Quản lý kho' },
    ];

    return <Create>
        <SimpleForm title='Tạo User' {...props}>
            <TextInput label='Tên' source='username' validate={required()} />
            <PasswordInput label='Password' validate={required()} source='password' />
            <SelectInput source="role" label='Vai trò' optionValue='value' optionText="label" validate={required()} choices={choices} />
        </SimpleForm>
    </Create>
}

export default UserCreate