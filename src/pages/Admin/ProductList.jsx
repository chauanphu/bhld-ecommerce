import { List, Datagrid, TextField, EditButton, DeleteButton, NumberField } from 'react-admin'

const CategoryList = (props) => {
    return <List {...props}>
        <Datagrid>
            <TextField label="Tên" source='name' />
            <NumberField label="Giá" source='price' />
            <EditButton basepath='/category' />
            <DeleteButton basepath='/category' />
        </Datagrid>
    </List>

}

export default CategoryList 