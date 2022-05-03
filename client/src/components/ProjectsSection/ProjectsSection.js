import React, { useState, useEffect } from 'react';import { Grid, Container, CircularProgress } from '@material-ui/core';
import Project from './Project/Project';
import useStyles from './styles';
import { useSelector, useDispatch } from 'react-redux';
import { getProjects } from '../../actions/projects';

const ProjectsSection = () => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const projectsSlice = useSelector((state) => state.projects.projects);
  const [projects, setProjects] = useState([]);
  useEffect(() => {
    dispatch(getProjects());
    setProjects(projectsSlice);
  }, [projectsSlice, setProjects, dispatch]);

  return (
    <Container className={classes.container}>
      <h3 className={classes.h3}>Mis Projectos</h3>
      <Grid container spacing={3}>
        {projects.length ? (
          projects.map((project) => (
            <Grid item key={project._id} xs={12} sm={6} md={4}>
              <Project project={project} />
            </Grid>
          ))
        ) : (
          <CircularProgress />
        )}
      </Grid>
    </Container>
  );
};

export default ProjectsSection;
