import { makeStyles } from '@material-ui/core/styles';
export default makeStyles({
  container: {},
  h3: {
    fontFamily: 'helvetica ',
    fontWeight: 'bold ',
    fontSize: '20px',
    lineHeight: '24px',
    textAlign: 'left',
    color: '#353535',
  },
  verMasContainer: {
    height: '100%',
    width: '100%',
    display: 'flex',
    flexDirection: 'column',
    gap: '10px',
    justifyContent: 'center',
    alignItems: 'center',
    cursor: 'pointer',

    '&:hover': {
      color: '#353535',
      transform: 'scale(1.05)',
    },

    '&:active': {
      transform: 'scale(0.95)',
    },
  },
  vermas: { fontSize: '20px', marginRight: '5px' },
  vermasIcon: { fontSize: '50px' },
});
