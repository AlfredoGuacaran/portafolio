import React, { useState, useEffect } from 'react';
import useStyles from './styles';
import { Container } from '@material-ui/core';
import skillIcon from '../../images/javascript-39404.png';
import ScrollContainer from 'react-indiana-drag-scroll';
import Skill from './Skill';
import { useSelector, useDispatch } from 'react-redux';
import { getSkills } from '../../actions/skills';

const fakeskills = [
  { name: 'Javascript Javascript 1', icon: skillIcon },
  { name: 'Javascript 2', icon: skillIcon },
  { name: 'Javascript 3', icon: skillIcon },
  { name: 'Javascript 4', icon: skillIcon },
  { name: 'Javascript 5', icon: skillIcon },
  { name: 'Javascript 6', icon: skillIcon },
  { name: 'Javascript 7', icon: skillIcon },
  { name: 'Javascript 8', icon: skillIcon },
  { name: 'Javascript 9', icon: skillIcon },
  { name: 'Javascript 10', icon: skillIcon },
  { name: 'Javascript 11', icon: skillIcon },
  { name: 'Javascript 14', icon: skillIcon },
  { name: 'Javascript 13', icon: skillIcon },
];

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
          {skills.slice(0, fakeskills.length / 2).map(({ _id, name, skillIcon }) => (
            <Skill key={_id} skill={{ name, skillIcon }} />
          ))}
        </ScrollContainer>
        <ScrollContainer className={classes.scrollContainer} onStartScroll={onStartScroll} onEndScroll={onEndScroll}>
          {skills.slice(-1 * (fakeskills.length / 2 + 1)).map(({ _id, name, skillIcon }) => (
            <Skill key={_id} skill={{ name, skillIcon }} />
          ))}
        </ScrollContainer>
      </div>
    </>
  );
};

export default Skills;
