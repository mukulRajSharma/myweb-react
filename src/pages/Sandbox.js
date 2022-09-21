// material
import {
  Stack,
  Container,
  Typography,
  Grid,
} from '@mui/material';
// components
import Page from '../components/Page';
// import TagBox from '../components/myComponents/ReactSelect/TagBox.tsx';
import DropdownInput from '../components/myComponents/semanticUi/Dropdown/DropdownInput';
import MaterialUiSelect from '../components/myComponents/MaterialUiSelect/MaterialUiSelect';
import MaterialUiCheck from '../components/myComponents/MaterialUiCheck/MaterialUiCheck';
// ----------------------------------------------------------------------


export default function Sandbox() {

  return (
    <Page title="Education">
      <Container spacing={10}>
        <Stack direction="row" alignItems="center" justifyContent="space-between" mb={5}>
          <Typography variant="h4" gutterBottom>
            Sandbox
          </Typography>
        </Stack>
        <Grid container spacing = {3} my={1}>
          
          <Grid item xs={12} md={6}>
              <MaterialUiCheck/>
              <MaterialUiSelect/>
          </Grid>
          {/* <Grid item xs={12} md={6}>
            <TagBox/>
          </Grid> */}
          <Grid item xs={12} md={6}>
              <DropdownInput/>
          </Grid>
        </Grid>
      </Container>
    </Page>
  );

}
