import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

function Tabs({ spacing, children, fontSize }) {
  const classes = useStyles({ spacing });

  return (
    <div className={`d-flex align-center ${classes.root}`}>
      {/* Passing props to each element of children array */}
      {React.Children.map(children, (child) => {
        if (React.isValidElement(child)) {
          return React.cloneElement(child, { fontSize });
        }
      })}
    </div>
  );
}

const useStyles = makeStyles({
  root: (props) => {
    let spacing;

    switch (props.spacing) {
      case 'sm':
        spacing = '0.5rem';
        break;
      case 'md':
        spacing = '1rem';
        break;
      case 'lg':
        spacing = '2rem';
        break;
      default:
        spacing = 0;
    }

    return {
      paddingTop: '0.25rem',
      paddingBottom: '0.25rem',
      height: '50px',

      '& > * + *': {
        marginLeft: spacing
      }
    };
  }
});

export default Tabs;
