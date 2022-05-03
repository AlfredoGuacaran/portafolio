import React from 'react';
import { Card, CardActionArea, CardActions, CardContent, CardMedia, Button, Typography } from '@material-ui/core';
import useStyles from './styles';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { faSquareArrowUpRight } from '@fortawesome/free-solid-svg-icons';
import { useDispatch } from 'react-redux';
import { setCurrentProject } from '../../../actions/projects';

const Project = (props) => {
  const { _id, title, description, img, tags, githubLink, liveLink } = props.project;
  const classes = useStyles();
  const dispatch = useDispatch();
  const handleClick = () => {
    dispatch(setCurrentProject({ _id }));
  };

  return (
    <Card onClick={handleClick} elevation={0} className={classes.card}>
      <CardActionArea>
        <CardMedia className={classes.media} image={img} />
        <CardContent>
          <Typography className={classes.typo} gutterBottom variant='h5' component='h5'>
            {title}
          </Typography>
          <Typography gutterBottom variant='subtitle2'>
            {tags}
          </Typography>
          <Typography variant='body2' color='textSecondary' component='p'>
            {description}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions className={classes.cardActions}>
        <Button className={classes.actions} href={githubLink} target='_blank' rel='noopener noreferrer' size='small' color='primary'>
          <span className={classes.btnText}>Ver código</span>
          <FontAwesomeIcon icon={faGithub} />
        </Button>
        <Button className={classes.actions} href={liveLink} target='_blank' rel='noopener noreferrer' size='small' color='primary'>
          <span className={classes.btnText}>Ver live</span>
          <FontAwesomeIcon icon={faSquareArrowUpRight} />
        </Button>
      </CardActions>
    </Card>
  );
};

export default Project;
