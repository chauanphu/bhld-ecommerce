import CircularProgress from '@mui/material/CircularProgress';
import { Typography } from '@mui/material'

import { List, Datagrid, TextField, EditButton, DeleteButton } from 'react-admin'
import { useRecordContext, useGetMany, useGetOne } from 'react-admin';

const ChildrenField = ({ source }) => {
    const record = useRecordContext();
    if (record[source] === '' || !record[source]) return <></>
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const { data, isLoading, error } = useGetMany(
        'categories',
        { id: record[source] },
    );
    if (isLoading) { return <CircularProgress />; }
    if (error) { return <p>ERROR</p>; }
    return (
        <>
            {data.map(item => { return <>{item.id}</> })}
        </>
        // <MUIList>
        //     {data && data.map(item => (
        //         <ListItemText key={item.id}>{item.name}</ListItemText>
        //     ))}
        // </MUIList>
    )
};


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
            <ParentField label="Mục cha" source='parent' />
            <ChildrenField label="Mục Con" source='children' />
            <EditButton basepath='/category' />
            <DeleteButton basepath='/category' />
        </Datagrid>
    </List>

}

export default CategoryList 