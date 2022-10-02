import { Create, NumberInput, SimpleForm, TextInput, ImageInput, ArrayInput, SimpleFormIterator } from 'react-admin'
import { RichTextInput } from 'ra-input-rich-text';

const ProductCreate = (props) => {
    return <Create>
        <SimpleForm title='Tạo Category' {...props}>
            <ImageInput label='Hình ảnh sản phẩm' source='image' />
            <TextInput label='Tên' source='name' />
            <TextInput label='Tên rút gọn' source='normed_name' />
            <TextInput label='Danh mục cha' source='parent_path' />
            <NumberInput label='Giá' source='price' step={1} />
            <ArrayInput label='Thông số kỹ thuật' source="features">
                <SimpleFormIterator inline>
                    <TextInput source="type" helperText={false} />
                    <TextInput source="value" helperText={false} />
                </SimpleFormIterator>
            </ArrayInput>
            <RichTextInput label='Miêu tả sản phẩm' source="description" />
        </SimpleForm>
    </Create>
}

export default ProductCreate