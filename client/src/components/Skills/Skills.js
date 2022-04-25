import React, { useState } from 'react';import useStyles from './styles';
import skillIcon from '../../images/javascript-39404.png';
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
  const classes = useStyles();
  const [scrollState, setScrollState] = useState({ hiddenSkill: [], dragging: false });
  const onStartScroll = (event) => {
    setScrollState((prevScrollState) => ({ ...prevScrollState, dragging: false }));
  };
  const onEndScroll = (event) => {
    setScrollState((prevScrollState) => ({ ...prevScrollState, dragging: false }));
  };
  return (
    <div styles={{ dragging: scrollState.dragging }}>
      <h3 className={classes.h3}>Competencias técnicas</h3>
      <ScrollContainer className={classes.scrollContainer} onStartScroll={onStartScroll} onEndScroll={onEndScroll}>
        {skills.slice(0, skills.length / 2).map((skill, index) => (
          <div key={index} className={classes.skill}>
            <img src={skill.icon} alt='icon'></img>
            <span>{skill.name}</span>
          </div>
        ))}
      </ScrollContainer>
      <ScrollContainer className={classes.scrollContainer} onStartScroll={onStartScroll} onEndScroll={onEndScroll}>
        {skills.slice(-1 * (skills.length / 2 + 1)).map((skill, index) => (
          <div key={index} className={classes.skill}>
            <img src={skill.icon} alt='icon'></img>
            <span>{skill.name}</span>
          </div>
        ))}
      </ScrollContainer>
    </div>
  );
};

export default Skills;
