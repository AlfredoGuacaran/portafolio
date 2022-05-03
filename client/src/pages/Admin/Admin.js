import React from 'react';import { Slide } from '@material-ui/core';
import ProjectsSection from '../../components/ProjectsSection/ProjectsSection';
import SkillsForm from '../../components/SkillsForm/SkillsForm';
import ProjectsForm from '../../components/PorjectsForm/ProjectsFrom';
import { Container } from '@material-ui/core';
import useStyles from './styles';
import Skills from '../../components/Skills/Skills';

export default function Admin() {
  const classes = useStyles();
  return (
    <Slide direction='right' in mountOnEnter unmountOnExit>
      <Container className={classes.container}>
        <SkillsForm />
        <Skills />
        <ProjectsForm />
        <ProjectsSection />
      </Container>
    </Slide>
  );
}
