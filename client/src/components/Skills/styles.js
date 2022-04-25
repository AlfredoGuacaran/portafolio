import { makeStyles } from '@material-ui/core/styles';export default makeStyles((theme) => ({
  scrollContainer: {
    height: '60px',
    width: '100%',
    display: 'flex',
    justifyContent: 'space-between',
  },
  skill: {
    height: '50px',
    background: 'rgba(255, 255, 255, 1)',
    borderRadius: '100px',
    border: '2px solid rgba(240, 240, 240, 1)',
    margin: '0 15px',
    padding: '0 20px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    userSelect: 'none',
    cursor: 'pointer',
    [theme.breakpoints.down('sm')]: {
      height: '40px',
      margin: '0 5px',
      padding: '0 10px',
    },

    '& > img': {
      width: '22px',
      height: '22px',
      [theme.breakpoints.down('sm')]: {
        width: '18px',
        height: '18px',
      },
    },
    '& > span': {
      marginLeft: '18px',
      fontFamily: 'helvetica ',
      fontWeight: 'bold ',
      fontSize: '18px',
      lineHeight: '21px',
      color: '#777777',
      whiteSpace: 'nowrap',
      [theme.breakpoints.down('sm')]: {
        fontSize: '16px',
      },
    },
  },
  h3: {
    fontFamily: 'helvetica ',
    fontWeight: 'bold ',
    fontSize: '20px',
    lineHeight: '24px',
    textAlign: 'left',
    color: '#353535',
  },
}));
