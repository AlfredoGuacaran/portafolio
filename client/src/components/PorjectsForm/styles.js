import { makeStyles } from '@material-ui/core/styles';export default makeStyles((theme) => ({
  root: {
    '& .MuiTextField-root': {
      width: '100%',
    },
  },
  preview: {
    height: '60px',
  },
  paper: {
    maxWidth: '450px',
    width: 'fit-content',
    display: 'flex',
    flexDirection: 'column',
    gap: '20px',
    flexWrap: 'wrap',
    alignItems: 'center',
    justifyContent: 'space-around',
    padding: '10px',
    borderRadius: '8px',
  },
  from: {},
  textFile: {
    '&:not(:last-child)': {
      marginBottom: '8px',
    },
  },
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
