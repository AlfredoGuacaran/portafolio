import React from 'react';import { Card, CardActionArea, CardActions, CardContent, CardMedia, Button, Typography } from '@material-ui/core';
import useStyles from './styles';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { faSquareArrowUpRight } from '@fortawesome/free-solid-svg-icons';

const Project = (props) => {
  const { title, subTitle, projectPreview, id } = props.project;
  const classes = useStyles();
  return (
    <Card id={id} elevation={0} className={classes.card}>
      <CardActionArea>
        <CardMedia className={classes.media} image={projectPreview} />
        <CardContent>
          <Typography className={classes.typo} gutterBottom variant='h5' component='h5'>
            {title}
          </Typography>
          <Typography gutterBottom variant='subtitle2'>
            #Html #React #Node #Javascript
          </Typography>
          <Typography variant='body2' color='textSecondary' component='p'>
            {subTitle}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions className={classes.cardActions}>
        <Button className={classes.actions} href='https://github.com/AlfredoGuacaran' target='_blank' rel='noopener noreferrer' size='small' color='primary'>
          <FontAwesomeIcon icon={faGithub} />
        </Button>
        <Button className={classes.actions} href='https://github.com/AlfredoGuacaran' target='_blank' rel='noopener noreferrer' size='small' color='primary'>
          <FontAwesomeIcon icon={faSquareArrowUpRight} />
        </Button>
      </CardActions>
    </Card>
  );
};

export default Project;
