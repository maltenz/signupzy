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
    // backgroundColor: '#E11919',
    padding: 20,
    '& h2': {
      textAlign: 'center',
    },
  },
  ul: {
    // listStyle: 'none',
    margin: 0,
    marginLeft: 20,
    padding: 0,
    color: '#E11919',
  },
  li: {
    marginBottom: 10,
  },
  a: {
    textDecoration: 'none',
    color: '#E11919',
    fontWeight: '700',
    fontSize: '0.85em',
  },
  h2: {
    backgroundColor: '#E11919',
    padding: '0.5em',
  },
  button: {
    backgroundColor: '#000',
    color: '#fff',
    appearance: 'none',
    outline: 0,
    padding: '10px 20px',
    borderRadius: 50,
    border: 'none',
    cursor: 'pointer',
    fontSize: '1.5em',
    float: 'right',

    '&:hover': {
      backgroundColor: 'blue',
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
    watch,
  } = useForm<IFormInput>({ mode: 'onBlur' });
  const onSubmit = (data: IFormInput) => console.log(data);

  return (
    <main className={classes.formContainer}>
      <form className={classes.form} onSubmit={handleSubmit(onSubmit)} noValidate>
        <div className={classes.formHeader} role="heading" aria-level={1}>
          Signupzy
        </div>

        <p>Welcome, please signup</p>

        {Object.keys(errors).length > 0 && (
          <div role="alert" tabIndex={-1} className={classes.errorSummary}>
            <h2 className={classes.h2}>Woops, there was an error</h2>
            <ul className={classes.ul}>
              {Object.entries(errors).map(
                ([key, err]: any): JSX.Element => {
                  return (
                    <li key={key} className={classes.li}>
                      <a className={classes.a} href={`#${err.ref.id}`}>
                        {err.message}
                      </a>
                    </li>
                  );
                }
              )}
            </ul>
          </div>
        )}

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
          validate={(value) => (value === watch('password') ? true : 'The password does not match')}
        />

        <button type="submit" className={classes.button}>
          submit
        </button>
      </form>
    </main>
  );
};

export default SignUp;
