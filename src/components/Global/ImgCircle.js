import React, { useContext } from 'react';
import AppContext from '../../AppContext';
import { makeStyles } from '@material-ui/core/styles';

function ImgCircle({ size, ...rest }) {
  const { appState } = useContext(AppContext);
  const classes = useStyles({ size });

  return (
    <div className={classes.root} {...rest}>
      <img
        src={require(`../../images/users/${appState.user.avatar}`).default}
        alt=''
      />
    </div>
  );
}

const useStyles = makeStyles({
  root: (props) => ({
    '& img': {
      width: (props.size || 40) + 'px',
      height: (props.size || 40) + 'px',
      borderRadius: '50%'
    }
  })
});

export default ImgCircle;
