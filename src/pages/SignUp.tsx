import { FC } from 'react';
import { createUseStyles } from 'react-jss';

import InputField from '../components/InputField';

const useStyles = createUseStyles({
  formContainer: {
    display: 'flex',
    height: '100vh',
    width: '100%',
    margin: '1em',
    justifyContent: 'center',
    alignItems: 'center',
  },
  form: {
    padding: '2em',
    border: '1px #cac3c3 solid',
    borderRadius: 8,
  },
  formHeader: {
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: '2em',
  },

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

const SignUp: FC = () => {
  const classes = useStyles();
  return (
    <div className={classes.formContainer}>
      <form className={classes.form}>
        <div className={classes.formHeader} role="heading" aria-level={1}>
          Signupzy
        </div>

        <p>Welcome, please signup</p>

        <div>
          <div>Error</div>
        </div>

        <InputField label="Username" />
        <InputField label="Email" />
        <InputField label="Password" />
        <InputField label="Confirm Password" />
      </form>
    </div>
  );
};

export default SignUp;
