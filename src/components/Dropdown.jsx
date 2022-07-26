import { Box, List, ListItem, ListItemText, ListItemButton, Link, IconButton, Collapse } from '@mui/material'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import ExpandLessIcon from '@mui/icons-material/ExpandLess';

import { useState } from 'react';
import { grey } from '@mui/material/colors'

const Dropdown = ({ items, isSub = false, baseUrl }) => {
    const [open, setOpen] = useState(false)
    const handleExpand = () => {
        setOpen(!open)
    }
    return (
        <List sx={{
            ml: isSub ? 2 : 0
        }}>
            {items.map((el, index) => {
                return (
                    <Box key={index}>
                        <ListItem sx={{ padding: 0 }}>
                            <ListItemButton component={Link} to={el.url ? el.url : baseUrl + el.normed_name}>
                                <ListItemText sx={{ ...el.style }} disableTypography>{el.name}</ListItemText>
                            </ListItemButton>
                            {
                                (el.sub_items && el.sub_items.length > 0) ?
                                    (!open ?
                                        (<IconButton edge="end" onClick={handleExpand} sx={{ mr: 1, backgroundColor: grey[200] }}>
                                            <ExpandMoreIcon />
                                        </IconButton>) :
                                        (<IconButton edge="end" onClick={handleExpand} sx={{ mr: 1, backgroundColor: grey[200] }}>
                                            <ExpandLessIcon />
                                        </IconButton>)
                                    )
                                    :
                                    (<></>)
                            }
                        </ListItem>
                        {
                            el.sub_items ?
                                (<Collapse in={open}>
                                    <Dropdown items={el.sub_items} isSub={true} baseUrl={baseUrl} />
                                </Collapse>) :
                                (<></>)
                        }

                    </Box>
                )
            })}
        </List >
    )
}

export default Dropdown