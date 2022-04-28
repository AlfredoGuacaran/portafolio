import { makeStyles } from '@material-ui/core/styles';export default makeStyles((theme) => ({
  root: {
    '& .MuiTextField-root': {
      width: '100%',
    },
  },
  paper: {
    width: 'fit-content',
    display: 'flex',
    flexDirection: 'column',
    gap: '20px',
    flexWrap: 'wrap',
    alignItems: 'center',
    justifyContent: 'space-around',
    padding: '5px',
    borderRadius: '8px',
  },
  from: {},
  textFile: {},
  title: { flex: '0 0 100%', textAlign: 'center', margin: '5px 0' },
  label: { fontSize: '14px' },
  fileContainer: {
    width: '97%',
    margin: '10px 0',
  },
  buttonsContainer: {
    display: 'flex',
    justifyContent: 'space-around',
    gap: '5px',
  },
}));
