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
    width: '100%',
    maxWidth: 320,
  },
  formHeader: {
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: '2em',
  },
  errorSummary: {
    backgroundColor: 'red',
    padding: 5,
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
    watch,
  } = useForm<IFormInput>({ mode: 'onBlur' });
  const onSubmit = (data: IFormInput) => console.log(data);

  return (
    <div className={classes.formContainer}>
      <form className={classes.form} onSubmit={handleSubmit(onSubmit)}>
        <div className={classes.formHeader} role="heading" aria-level={1}>
          Signupzy
        </div>

        <p>Welcome, please signup</p>

        {Object.keys(errors).length > 0 && (
          <div role="alert" tabIndex={-1} className={classes.errorSummary}>
            <h2>Error</h2>

            <ul>
              {Object.entries(errors).map(
                ([key, err]: any): JSX.Element => {
                  return (
                    <li key={key}>
                      <a href={`#${err.ref.id}`}>{err.message}</a>
                    </li>
                  );
                }
              )}
            </ul>
          </div>
        )}

        <InputField
          label="Username"
          control={control}
          name="username"
          required
        />
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
        <InputField
          label="Password"
          type="password"
          control={control}
          name="password"
          required
        />
        <InputField
          label="Confirm Password"
          control={control}
          type="password"
          name="confirmPassword"
          required
          validate={(value) =>
            value === watch('password') ? true : 'The password does not match'
          }
        />

        <button type="submit">submit</button>
      </form>
    </div>
  );
};

export default SignUp;
