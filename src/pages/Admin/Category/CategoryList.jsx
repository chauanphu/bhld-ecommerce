import { List, Datagrid, TextField, EditButton, DeleteButton } from 'react-admin'

const CategoryList = (props) => {
    return <List {...props}>
        <Datagrid>
            <TextField label="Tên" source='name' />
            <TextField label="Tên rút gọn" source='normed_name' />
            <TextField label="Đường dẫn" source='path' />
            <EditButton basepath='/category' />
            <DeleteButton basepath='/category' />
        </Datagrid>
    </List>

}

export default CategoryList 