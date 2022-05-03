import React, { useState, useEffect } from 'react';
import { Paper, TextField, Button, Typography, Slider, CircularProgress, Zoom } from '@material-ui/core';
import Alert from '@material-ui/lab/Alert';
import FileBase from 'react-file-base64';
import useStyles from './styles';
import { useDispatch, useSelector } from 'react-redux';
import { createProject, deleteProject } from '../../actions/projects';

const ProjectsForm = () => {
  const dispatch = useDispatch();
  const { loading, endLoading, currentProject } = useSelector((state) => state.projects);
  const classes = useStyles();
  const [projectData, setProjectData] = useState({ title: '', img: '', tags: '', description: '', githubLink: '', liveLink: '', ranking: 50 });
  const [loadState, setLoadState] = useState({ loading: false, endLoading: false });
  const [_currentProject, setCurrentProject] = useState(null);

  const clear = () => {
    setProjectData({ title: '', img: '', tags: '', description: '', githubLink: '', liveLink: '', ranking: 50 });
    setCurrentProject(null);
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!projectData.title?.length) {
      return;
    }
    dispatch(createProject(projectData));
    clear();
  };

  const handleDelete = async (e) => {
    e.preventDefault();
    dispatch(deleteProject(_currentProject._id));
    clear();
  };

  useEffect(() => {
    if (currentProject) {
      setProjectData(currentProject);
      setCurrentProject(currentProject);
    }
  }, [currentProject, setProjectData]);

  useEffect(() => {
    setLoadState((prev) => ({ ...prev, loading, endLoading }));
    setTimeout(() => {
      setLoadState((prev) => ({ ...prev, endLoading: false }));
    }, 3000);

    setCurrentProject(_currentProject);
  }, [loading, endLoading, _currentProject]);

  return (
    <Paper elevation={1} className={classes.paper}>
      <Typography variant='subtitle1' className={classes.title}>
        Agregar un nuevo projecto
      </Typography>

      <form className={`${classes.form} ${classes.root}`} autoComplete='false' noValidate onSubmit={handleSubmit}>
        <TextField
          required
          name='title'
          label='Titulo'
          variant='outlined'
          size='small'
          className={classes.textFile}
          value={projectData.title}
          onChange={(e) => setProjectData({ ...projectData, title: e.target.value })}
        />
        <TextField
          required
          name='tags'
          label='Tags'
          variant='outlined'
          size='small'
          className={classes.textFile}
          value={projectData.tags}
          onChange={(e) => setProjectData({ ...projectData, tags: e.target.value })}
        />
        <TextField
          required
          name='description'
          label='Descripción'
          variant='outlined'
          size='small'
          className={classes.textFile}
          value={projectData.description}
          onChange={(e) => setProjectData({ ...projectData, description: e.target.value })}
        />
        <TextField
          required
          name='githubLink'
          label='Link GitHub'
          variant='outlined'
          size='small'
          className={classes.textFile}
          value={projectData.githubLink}
          onChange={(e) => setProjectData({ ...projectData, githubLink: e.target.value })}
        />
        <TextField
          required
          name='liveLink'
          label='Link Live'
          variant='outlined'
          size='small'
          className={classes.textFile}
          value={projectData.liveLink}
          onChange={(e) => setProjectData({ ...projectData, liveLink: e.target.value })}
        />
        <div className={classes.fileContainer}>
          <FileBase required type='file' multiple={false} onDone={({ base64 }) => setProjectData({ ...projectData, img: base64 })} />
        </div>
        <Typography variant='subtitle1' className={classes.label}>
          Prioridad para mostrar
        </Typography>
        <Slider
          value={projectData.ranking}
          onChange={(event, value) => setProjectData({ ...projectData, ranking: value })}
          aria-labelledby='discrete-slider-custom'
          step={10}
          valueLabelDisplay='auto'
          min={10}
        />
        <div className={classes.buttonsContainer}>
          <Button type='submit' onClick={handleSubmit} variant='contained' color='primary' size='small'>
            Publicar
          </Button>
          <Button variant='contained' size='small' onClick={clear}>
            Clear
          </Button>
          {_currentProject && (
            <Button variant='contained' color='secondary' size='small' onClick={handleDelete}>
              Eliminar
            </Button>
          )}
        </div>
      </form>
      <div className={classes.preview}>{loadState.loading && <CircularProgress />}</div>
      {loadState.endLoading && (
        <Zoom in={loadState.endLoading}>
          <Alert severity='success'>Projecto Creado</Alert>
        </Zoom>
      )}
    </Paper>
  );
};

export default ProjectsForm;
