// material
import {
  Stack,
  Container,
  Typography,
  Grid,
} from '@mui/material';
// components
import Page from '../components/Page';
import TagBox from '../components/myComponents/TagBox.tsx';
// ----------------------------------------------------------------------


export default function Gorilla() {

  return (
    <Page title="Education">
      <Container spacing={10}>
        <Stack direction="row" alignItems="center" justifyContent="space-between" mb={5}>
          <Typography variant="h4" gutterBottom>
            Gorilla
          </Typography>
        </Stack>
        <Grid container spacing = {3} my={1}>
          <Grid item xs={12} md={6}>
            <TagBox/>
          </Grid>
        </Grid>
      </Container>
    </Page>
  );

}
