import React from 'react';
import HorizontalScroll from 'react-scroll-horizontal';
import useStyles from './styles';
import skillIcon from '../../images/javascript-39404.png';
import { Container, Typography } from '@material-ui/core';

const ScrollingHorizontally = () => {
  const clasess = useStyles();
  return (
    <Container className={clasess.container}>
      <h4>Competencias técnicas</h4>
      <div className={clasess.scroll}>
        <HorizontalScroll className={clasess.sroll}>
          <div className={clasess.skill}>
            <img src={skillIcon} alt='icon'></img>
            <span>{'Javascript'}</span>
          </div>
          <div className={clasess.skill}>
            <img src={skillIcon} alt='icon'></img>
            <span>{'Javascript'}</span>
          </div>
          <div className={clasess.skill}>
            <img src={skillIcon} alt='icon'></img>
            <span>{'Javascript'}</span>
          </div>
          <div className={clasess.skill}>
            <img src={skillIcon} alt='icon'></img>
            <span>{'Javascript'}</span>
          </div>
          <div className={clasess.skill}>
            <img src={skillIcon} alt='icon'></img>
            <span>{'Javascript'}</span>
          </div>
          <div className={clasess.skill}>
            <img src={skillIcon} alt='icon'></img>
            <span>{'Javascript'}</span>
          </div>
        </HorizontalScroll>
      </div>
      <div className={clasess.scroll}>
        <HorizontalScroll>
          <div className={`${clasess.skill} ${clasess.srollOne}`}>
            <img src={skillIcon} alt='icon'></img>
            <span>{'Javascript'}</span>
          </div>
          <div className={clasess.skill}>
            <img src={skillIcon} alt='icon'></img>
            <span>{'Javascript'}</span>
          </div>
          <div className={clasess.skill}>
            <img src={skillIcon} alt='icon'></img>
            <span>{'Javascript'}</span>
          </div>
          <div className={clasess.skill}>
            <img src={skillIcon} alt='icon'></img>
            <span>{'Javascript'}</span>
          </div>
          <div className={clasess.skill}>
            <img src={skillIcon} alt='icon'></img>
            <span>{'Javascript'}</span>
          </div>
          <div className={clasess.skill}>
            <img src={skillIcon} alt='icon'></img>
            <span>{'Javascript'}</span>
          </div>
        </HorizontalScroll>
      </div>
    </Container>
  );
};

export default ScrollingHorizontally;
