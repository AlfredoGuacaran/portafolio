import React from 'react';import { Container, Grow, Grid } from '@material-ui/core';
import Heading from '../../components/Heading/Heading';
import Skills from '../../components/Skills/Skills';
export default function Home() {
  return (
    <Grow in>
      <Container maxwidth='xl'>
        <Grid container>
          <Heading />
          <Grid item xs={12}>
            <Skills />
          </Grid>
          <Grid item xs={12}>
            PROYECTOS SECCION
          </Grid>
          <Grid item xs={12}>
            CONTACTO
          </Grid>
          <Grid item xs={12}>
            CONTACTO
          </Grid>
        </Grid>
      </Container>
    </Grow>
  );
}
