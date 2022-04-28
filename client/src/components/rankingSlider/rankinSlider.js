import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Slider from '@material-ui/core/Slider';
const useStyles = makeStyles((theme) => ({
  root: {
    width: 250,
  },
  margin: {
    height: theme.spacing(3),
  },
}));

const marks = [
  {
    value: 10,
    label: '10',
  },
  {
    value: 20,
    label: '20',
  },
  {
    value: 30,
    label: '30',
  },
  {
    value: 40,
    label: '40',
  },
  {
    value: 50,
    label: '50',
  },
  {
    value: 60,
    label: '60',
  },
  {
    value: 70,
    label: '70',
  },
  {
    value: 80,
    label: '80',
  },
  {
    value: 90,
    label: '90',
  },
  {
    value: 100,
    label: '100',
  },
];

export default function RankingSlider({ setRanking }) {
  const classes = useStyles();
  function valuetext(value) {
    return `${value}`;
  }

  return (
    <div className={classes.root}>
      <Typography id='discrete-slider-custom' gutterBottom>
        Custom marks
      </Typography>
      <Slider defaultValue={50} getAriaValueText={setRanking} aria-labelledby='discrete-slider-custom' step={10} valueLabelDisplay='auto' marks={marks} />
    </div>
  );
}
