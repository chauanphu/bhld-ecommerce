import CircularProgress from '@mui/material/CircularProgress';
import { Typography } from '@mui/material'

import { List, Datagrid, TextField, EditButton, DeleteButton, NumberField } from 'react-admin'
import { useRecordContext, useGetOne } from 'react-admin';


const ParentField = ({ source }) => {
    const record = useRecordContext();
    if (record[source] === '' || !record[source]) return <></>
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const { data, isLoading, error } = useGetOne(
        'categories',
        { id: record[source] }
    );
    if (isLoading) { return <CircularProgress />; }
    if (error) { return <p>Không tìm thấy</p>; }
    return <Typography>{data.name}</Typography>
};

const CategoryList = (props) => {
    return <List {...props}>
        <Datagrid>
            <TextField label="Tên" source='name' />
            <NumberField label="Giá" source='price' />
            <ParentField label="Danh mục" source='parent' />
            <EditButton basepath='/category' />
            <DeleteButton basepath='/category' />
        </Datagrid>
    </List>

}

export default CategoryList 