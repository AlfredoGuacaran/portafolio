import React from 'react';
import useStyles from './styles';
const Skill = ({ skill }) => {
  const classes = useStyles();
  const { name, skillIcon } = skill;

  return name.length ? (
    <div className={classes.skill}>
      <img src={skillIcon} alt='icon'></img>
      <span>{name}</span>
    </div>
  ) : (
    'PREVIEW'
  );
};

export default Skill;
