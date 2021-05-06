import { FC } from 'react';
import { createUseStyles } from 'react-jss';

const useStyles = createUseStyles({
  inputField: {
    margin: '0.5em 0',
  },

  inputWrapper: {
    margin: '0.4em 0',
    boxSizing: 'border-box',
    '& input': {
      font: 'inherit',
      color: 'currentColor',
      height: '1.1876em',
      padding: '0.8em',
      borderRadius: 4,
      border: '0.5px grey solid',
    },
  },
});

type Props = {
  label: string;
};

const InputField: FC<Props> = ({ label }) => {
  const classes = useStyles();

  return (
    <div className={classes.inputField}>
      <label>
        {label}
        <div className={classes.inputWrapper}>
          <input type="text" />
        </div>
      </label>
    </div>
  );
};

export default InputField;
