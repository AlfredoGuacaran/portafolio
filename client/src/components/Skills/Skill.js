import React, { useState, useEffect } from 'react';
import useStyles from './styles';
import { useDispatch, useSelector } from 'react-redux';
import { setCurrentSkill } from '../../actions/skills';

const Skill = ({ skill }) => {
  const { _id, name, skillIcon } = skill;
  const dispatch = useDispatch();
  const classes = useStyles();
  const { currentSkill } = useSelector((state) => state.skills);
  const [isSelected, setIsSelected] = useState(false);

  useEffect(() => {
    if (currentSkill && skill && currentSkill._id === skill._id) {
      setIsSelected(true);
    } else {
      setIsSelected(false);
    }
  }, [currentSkill, skill]);

  const handleClick = () => {
    dispatch(setCurrentSkill({ _id }));
  };

  return (
    <div className={`${classes.skill} ${isSelected && classes.selected}`} onClick={handleClick}>
      <img src={skillIcon} alt='icon'></img>
      <span>{name}</span>
    </div>
  );
};

export default Skill;
