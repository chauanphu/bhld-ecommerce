import { List, Datagrid, TextField, EditButton, DeleteButton } from 'react-admin'

const CategoryList = (props) => {
    return <List {...props}>
        <Datagrid>
            <TextField label="Tên" source='username' />
            <TextField label="Vai trò" source='role' />
            <EditButton basepath='/users' />
            <DeleteButton basepath='/users' />
        </Datagrid>
    </List>

}

export default CategoryList 