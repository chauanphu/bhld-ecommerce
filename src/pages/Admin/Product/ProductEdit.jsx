import { Edit, required } from 'react-admin'
import { NumberInput, SimpleForm, TextInput, ImageInput, ArrayInput, SimpleFormIterator } from 'react-admin'
import { RichTextInput } from 'ra-input-rich-text';

const ProductEdit = (props) => {
    return <Edit>
        <SimpleForm title='Tạo Category' {...props}>
            <ImageInput label='Hình ảnh sản phẩm' source='image' />
            <TextInput label='Tên' source='name' validate={required()} />
            <TextInput label='Tên rút gọn' validate={required()} source='normed_name' />
            <TextInput label='Danh mục cha' validate={required()} source='parent_path' />
            <NumberInput label='Giá' source='price' validate={required()} step={1} />
            <ArrayInput label='Thông số kỹ thuật' source="features">
                <SimpleFormIterator inline>
                    <TextInput source="type" helperText={false} />
                    <TextInput source="value" helperText={false} />
                </SimpleFormIterator>
            </ArrayInput>
            <RichTextInput label='Miêu tả sản phẩm' source="description" />
        </SimpleForm>
    </Edit>
}

export default ProductEdit