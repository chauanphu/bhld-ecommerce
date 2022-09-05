import { List, Datagrid, TextField, EditButton, DeleteButton } from 'react-admin'

const CategoryList = (props) => {
    return <List {...props}>
        <Datagrid>
            <TextField source='name' />
            <TextField source='url' />
            <EditButton basePath='/category' />
            <DeleteButton basePath='/category' />
        </Datagrid>
    </List>

}

export default CategoryList