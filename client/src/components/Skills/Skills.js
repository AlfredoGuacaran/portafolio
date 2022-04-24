import React, { useState } from 'react';import useStyles from './styles';
import skillIcon from '../../images/javascript-39404.png';
import { Container } from '@material-ui/core';
import ScrollContainer from 'react-indiana-drag-scroll';
const skills = [
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
  const clasess = useStyles();
  const [scrollState, setScrollState] = useState({ hiddenSkill: [], dragging: false });
  const onStartScroll = (event) => {
    setScrollState((prevScrollState) => ({ ...prevScrollState, dragging: false }));
  };
  const onEndScroll = (event) => {
    setScrollState((prevScrollState) => ({ ...prevScrollState, dragging: false }));
  };
  return (
    <Container styles={{ dragging: scrollState.dragging }}>
      <ScrollContainer className={clasess.scrollContainer} onStartScroll={onStartScroll} onEndScroll={onEndScroll}>
        {skills.slice(0, skills.length / 2).map((skill, index) => (
          <div key={index} className={clasess.skill}>
            <img src={skill.icon} alt='icon'></img>
            <span>{skill.name}</span>
          </div>
        ))}
      </ScrollContainer>
      <ScrollContainer className={clasess.scrollContainer} onStartScroll={onStartScroll} onEndScroll={onEndScroll}>
        {skills.slice(-1 * (skills.length / 2 + 1)).map((skill, index) => (
          <div key={index} className={clasess.skill}>
            <img src={skill.icon} alt='icon'></img>
            <span>{skill.name}</span>
          </div>
        ))}
      </ScrollContainer>
    </Container>
  );
};

export default Skills;
