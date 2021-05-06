import React, { FC } from 'react';
import { createUseStyles } from 'react-jss';
import { useForm } from 'react-hook-form';

import InputField from '../components/InputField';

const ERR_MESSAGES = {
  email: 'Invalid Email Address',
};
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

interface IFormInput {
  userName: String;
  email: String;
  password: String;
  confirmPassword: String;
}

const SignUp: FC = () => {
  const classes = useStyles();
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<IFormInput>({ mode: 'onBlur' });
  const onSubmit = (data: IFormInput) => console.log(data);
  console.log({ errors });
  return (
    <div className={classes.formContainer}>
      <form className={classes.form} onSubmit={handleSubmit(onSubmit)}>
        <div className={classes.formHeader} role="heading" aria-level={1}>
          Signupzy
        </div>

        <p>Welcome, please signup</p>

        <div>
          {Object.entries(errors).map(
            ([key, err]: any): JSX.Element => {
              return <div key={key}>{err.message}</div>;
            }
          )}
          <div>Error</div>
        </div>

        <InputField label="Username" control={control} name="username" required />
        <InputField
          label="Email"
          control={control}
          name="email"
          required
          type="email"
          validate={(value: any) => {
            const re = /^\S+@\S+\.\S+$/;
            return re.test(value) ? true : ERR_MESSAGES.email;
          }}
        />
        <InputField label="Password" type="password" control={control} name="password" required />
        <InputField
          label="Confirm Password"
          control={control}
          type="password"
          name="confirmPassword"
          required
        />

        <button type="submit">submit</button>
      </form>
    </div>
  );
};

export default SignUp;
