import { List, Datagrid, TextField, EditButton, DeleteButton, ArrayField, SingleFieldList, ChipField } from 'react-admin'

const CategoryList = (props) => {
    return <List {...props}>
        <Datagrid>
            <TextField label="Tên" source='name' />
            <TextField label="Tên rút gọn" source='normed_name' />
            <ArrayField source="sub_items">
                <SingleFieldList>
                    <ChipField source='name' />
                </SingleFieldList>
            </ArrayField>
            <EditButton basepath='/category' />
            <DeleteButton basepath='/category' />
        </Datagrid>
    </List>

}

export default CategoryList 