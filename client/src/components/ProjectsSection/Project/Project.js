import React from 'react';import { Card, CardActionArea, CardActions, CardContent, CardMedia, Button, Typography } from '@material-ui/core';
import useStyles from './styles';

const Project = (props) => {
  const { title, subTitle, projectPreview, id } = props.project;
  const classes = useStyles();
  return (
    <Card id={id} className={classes.root}>
      <CardActionArea>
        <CardMedia className={classes.media} image={projectPreview} />
        <CardContent>
          <Typography gutterBottom variant='h5' component='h2'>
            {title}
          </Typography>
          <Typography variant='body2' color='textSecondary' component='p'>
            {subTitle}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size='small' color='primary'>
          Share
        </Button>
        <Button size='small' color='primary'>
          Learn More
        </Button>
      </CardActions>
    </Card>
  );
};

export default Project;
