import { Create, SimpleForm, TextInput, required, ReferenceArrayInput, AutocompleteArrayInput } from 'react-admin'

const GroupCreate = (props) => {
    return <Create>
        <SimpleForm title='Tạo Category' {...props}>
            <TextInput label='Tên' source='name' validate={required()} />
            <TextInput label='Tên rút gọn' validate={required()} source='normed_name' />
            <ReferenceArrayInput
                label="Sản phẩm liên quan"
                reference="products"
                source="products"
            >
                <AutocompleteArrayInput optionText="name" />
            </ReferenceArrayInput>
        </SimpleForm>
    </Create>
}

export default GroupCreate