import React, { useState, useEffect } from 'react';
import useStyles from './styles';
import { Container, CircularProgress } from '@material-ui/core';
import ScrollContainer from 'react-indiana-drag-scroll';
import Skill from './Skill';
import { useSelector, useDispatch } from 'react-redux';
import { getSkills } from '../../actions/skills';

const Skills = () => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const skills = useSelector((state) => state.skills.skills);
  const [scrollState, setScrollState] = useState({ hiddenSkill: [], dragging: false });
  const onStartScroll = () => {
    setScrollState((prevScrollState) => ({ ...prevScrollState, dragging: false }));
  };
  const onEndScroll = () => {
    setScrollState((prevScrollState) => ({ ...prevScrollState, dragging: false }));
  };

  useEffect(() => {
    dispatch(getSkills());
  }, [dispatch]);
  return (
    <>
      <Container>
        <h3 className={classes.h3}>Competencias técnicas</h3>
      </Container>

      <div styles={{ dragging: scrollState.dragging }}>
        <ScrollContainer className={classes.scrollContainer} onStartScroll={onStartScroll} onEndScroll={onEndScroll}>
          {skills.length ? skills.slice(0, skills.length / 2).map(({ _id, name, skillIcon }) => <Skill key={_id} skill={{ _id, name, skillIcon }} />) : <CircularProgress />}
        </ScrollContainer>
        <ScrollContainer className={classes.scrollContainer} onStartScroll={onStartScroll} onEndScroll={onEndScroll}>
          {skills.length ? skills.slice(-skills.length / 2).map(({ _id, name, skillIcon }) => <Skill key={_id} skill={{ _id, name, skillIcon }} />) : <CircularProgress />}
        </ScrollContainer>
      </div>
    </>
  );
};

export default Skills;
