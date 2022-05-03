import { makeStyles } from '@material-ui/core/styles';export default makeStyles((theme) => ({
  card: {
    width: '100%',
    borderRadius: '14px 14px 0px 0px',
    background: '#F5F5F5',
  },
  media: {
    height: '140px',
  },
  typo: {
    fontFamily: `helvetica`,
    fontWeight: '700',
    lineHeight: '21px',
    letterSpacing: '0em',
    textAlign: 'left',
    color: '#353535',
  },
  cardActions: {
    display: 'flex',
    justifyContent: 'end',
  },
  actions: {
    fontSize: '20px',
    padding: '0px 0px',
    minWidth: '10px',
    color: '#787878',

    '&:hover': {
      color: '#353535',
      cursor: 'pointer',
      transform: 'scale(1.05)',
    },

    '&:active': {
      transform: 'scale(0.95)',
    },
  },
  btnText: {
    fontSize: '10px',
    marginRight: '3px',
  },
}));
