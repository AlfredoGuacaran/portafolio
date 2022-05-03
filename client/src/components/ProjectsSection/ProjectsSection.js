import React, { useState, useEffect } from 'react';
import { Grid, Container, CircularProgress, Button } from '@material-ui/core';
import Project from './Project/Project';
import useStyles from './styles';
import { useSelector, useDispatch } from 'react-redux';
import { getProjects } from '../../actions/projects';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons';

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

        <Grid item key={'25516'} xs={12} sm={6} md={4}>
          <Button className={classes.verMasContainer} href={'https://github.com/AlfredoGuacaran'} target='_blank' rel='noopener noreferrer' size='small' color='primary'>
            <span className={classes.vermas}>Ver más proyectos</span>
            <FontAwesomeIcon className={classes.vermasIcon} icon={faGithub} />
          </Button>
        </Grid>
      </Grid>
    </Container>
  );
};

export default ProjectsSection;
