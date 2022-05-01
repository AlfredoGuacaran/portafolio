import React from 'react';
import ScrollContainer from 'react-indiana-drag-scroll';
import Skill from './Skill';
import useStyles from './styles';

const SkillsContainer = ({ skills, onStartScroll, onEndScroll, position }) => {
  const classes = useStyles();
  return (
    <ScrollContainer key={position} className={classes.scrollContainer} onStartScroll={onStartScroll} onEndScroll={onEndScroll}>
      {skills.map(({ _id, name, skillIcon }) => (
        <Skill key={_id} skill={{ _id, name, skillIcon }} />
      ))}
    </ScrollContainer>
  );
};

export default SkillsContainer;
