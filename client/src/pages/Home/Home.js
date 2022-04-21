import React from 'react';import { Container, Grow, Button, Grid } from '@material-ui/core';
export default function Home() {
  return (
    <Grow in>
      <Container maxwidth='xl'>
        <Grid container>
          <Grid item xs={12}>
            HEADER SECCION
          </Grid>
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
