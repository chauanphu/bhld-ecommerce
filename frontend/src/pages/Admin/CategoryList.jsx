import { List, Datagrid, TextField, EditButton, DeleteButton } from 'react-admin'
import { List as MUIList, ListItemText } from '@mui/material'
import { useRecordContext } from 'react-admin';

const TagsField = ({ source }) => {
    const record = useRecordContext();
    return (
        <MUIList>
            {record && record[source].map(item => (
                <ListItemText key={item}>{item}</ListItemText>
            ))}
        </MUIList>
    );
};

const CategoryList = (props) => {
    return <List {...props}>
        <Datagrid>
            <TextField label="Tên" source='name' />
            <TextField label="Mục cha" source='parent' />
            <TagsField source='children' />
            <EditButton basepath='/category' />
            <DeleteButton basepath='/category' />
        </Datagrid>
    </List>

}

export default CategoryList 