import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  header: {
    flexGrow: 1,
    backgroundColor: theme.palette.primary.main,
    padding: '20px',
    color: 'white',
  },
  layout: {
    flexGrow: 1,
    padding: '30px 10%',
  },
}));

export default useStyles;
