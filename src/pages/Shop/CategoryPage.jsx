///////// Import Custom Components /////////
import { Products } from "components";

///////// Import Material Components /////////
import SortIcon from '@mui/icons-material/Sort';
import { Box, Button, TextField, Autocomplete, Container } from "@mui/material"
//

//////////////////// Import React ////////////////////
import { useParams } from 'react-router-dom'

const Header = () => {
    return (
        <Box display="flex" flexDirection="row" marginBottom={1} sx={{ justifyContent: { xs: "space-between", md: 'end' } }} >
            <Button startIcon={<SortIcon />}>
                Giá giảm dần
            </Button>
            <Autocomplete
                freeSolo
                id="free-solo-2-demo"
                disableClearable
                options={[]}
                renderInput={(params) => (
                    <TextField
                        {...params}
                        label="Tìm kiếm sản phẩm"
                        InputProps={{
                            ...params.InputProps,
                            type: 'search',
                        }}
                    />
                )}
                sx={{
                    ml: 2,
                    minWidth: { xs: 150, md: 200 }
                }}
            />
        </Box>
    )
}

const CategoryPage = () => {
    //State

    const { id } = useParams()

    return (
        <Container maxWidth="lg" sx={{ minHeight: '50vh', pt: '3em' }}>
            <Products id={id} header={<Header />} />
        </Container>
    )
}

export default CategoryPage