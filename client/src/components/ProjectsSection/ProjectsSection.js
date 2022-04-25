import React from 'react';
import { Grid, Container } from '@material-ui/core';
import ProjectPreviewImg from '../../images/projectPreview.JPG';
import Project from './Project/Project';
import useStyles from './styles';

const projects = [
  { title: 'Portafolio Web 1', subTitle: 'Projecto elaboraco con react y node', projectPreview: ProjectPreviewImg },
  { title: 'Portafolio Web 2', subTitle: 'Projecto elaboraco con react y node', projectPreview: ProjectPreviewImg },
  { title: 'Portafolio Web 3', subTitle: 'Projecto elaboraco con react y node', projectPreview: ProjectPreviewImg },
  { title: 'Portafolio Web 4', subTitle: 'Projecto elaboraco con react y node', projectPreview: ProjectPreviewImg },
  { title: 'Portafolio Web 5', subTitle: 'Projecto elaboraco con react y node', projectPreview: ProjectPreviewImg },
  { title: 'Portafolio Web 6', subTitle: 'Projecto elaboraco con react y node', projectPreview: ProjectPreviewImg },
];
const ProjectsSection = () => {
  const classes = useStyles();

  return (
    <Container className={classes.container}>
      <h3 className={classes.h3}>Mis Projectos</h3>
      <Grid container spacing={3}>
        {projects.map((project, index) => (
          <Grid item key={index} xs={12} sm={6} md={4}>
            <Project project={{ ...project, id: index + 1 }} />
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default ProjectsSection;