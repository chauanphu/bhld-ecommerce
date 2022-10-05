import { Edit, required } from 'react-admin'
import { SimpleForm, TextInput, ReferenceArrayInput, AutocompleteArrayInput } from 'react-admin'

const GroupEdit = (props) => {
    return <Edit>
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
    </Edit>
}

export default GroupEdit