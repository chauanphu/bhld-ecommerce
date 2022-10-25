import { List, Datagrid, TextField, EditButton, DeleteButton, ReferenceArrayField, SingleFieldList, ChipField } from 'react-admin'

const GroupList = (props) => {
    return <List {...props}>
        <Datagrid>
            <TextField label="Tên" source='name' />
            <ReferenceArrayField label='Sản phẩm' reference='products' source="products">
                <SingleFieldList>
                    <ChipField source='name' />
                </SingleFieldList>
            </ReferenceArrayField>
            <EditButton basepath='/category' />
            <DeleteButton basepath='/category' />
        </Datagrid>
    </List>

}

export default GroupList 