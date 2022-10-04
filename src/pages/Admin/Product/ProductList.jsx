import { List, Datagrid, TextField, EditButton, DeleteButton, NumberField } from 'react-admin'

const CategoryList = (props) => {
    return <List {...props}>
        <Datagrid>
            <TextField label="Tên" source='name' />
            <TextField label="Tên rút gọn" source='normed_name' />
            <TextField label="Đường dẫn cha" source='parent_path' />
            <NumberField label="Giá" source='price' />
            <EditButton basepath='/category' />
            <DeleteButton basepath='/category' />
        </Datagrid>
    </List>

}

export default CategoryList 