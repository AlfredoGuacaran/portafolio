import React from 'react';
import { Container, Grow, Grid } from '@material-ui/core';
import Heading from '../../components/Heading/Heading';
export default function Home() {
  return (
    <Grow in>
      <Container maxwidth='xl'>
        <Grid container>
          <Heading />
          <Grid item xs={12}>
            SKILL SECCION
          </Grid>
          <Grid item xs={12}>
            PROYECTOS SECCION
          </Grid>
          <Grid item xs={12}>
            CONTACTO
          </Grid>
        </Grid>
      </Container>
    </Grow>
  );
}
