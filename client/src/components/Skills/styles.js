import { makeStyles } from '@material-ui/core/styles';
export default makeStyles((theme) => ({
  container: {
    '&>h4': {
      color: '#353535',
      fontFamily: 'helvetica ',
      fontWeight: 'bold ',
      fontSize: '20px',
    },
  },
  scroll: { width: '88vw', height: '60px' },
  skill: {
    width: '200px',
    height: '50px',
    background: 'rgba(255, 255, 255, 1)',
    borderRadius: '100px',
    border: '2px solid rgba(240, 240, 240, 1)',
    margin: '0 15px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',

    '& > img': {
      width: '22px',
      height: '22px',
    },
    '& > span': {
      marginLeft: '18px',
      fontFamily: 'helvetica ',
      fontWeight: 'bold ',
      fontSize: '18px',
      lineHeight: '21px',
      color: '#777777',
    },
  },
  srollOne: {
    marginLeft: '150px',
  },
}));
