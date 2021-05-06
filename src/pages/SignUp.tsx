/* eslint-disable jsx-a11y/label-has-associated-control */
import React from 'react';
import { useForm } from 'react-hook-form';
import { createUseStyles } from 'react-jss';

const Form = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const classes = useStyles();

  const onSubmit = (data: any) => {
    alert(JSON.stringify(data));
  };

  console.log(errors);

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className={classes.inputField}>
        <label>
          Username
          <div className={classes.inputWrapper}>
            <input type="text" {...register('username', { required: true, maxLength: 80 })} />
          </div>
        </label>
      </div>
      <div className={classes.inputField}>
        <label>
          Email
          <div className={classes.inputWrapper}>
            <input
              type="email"
              {...register('email', {
                required: true,
                pattern: /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
              })}
            />
          </div>
        </label>
      </div>
      <div className={classes.inputField}>
        <label>
          Password
          <div className={classes.inputWrapper}>
            <input
              type="password"
              {...register('password', {
                required: true,
                pattern: /(?=.*[0-9])/,
              })}
            />
          </div>
        </label>
      </div>
      <div className={classes.inputField}>
        <label>
          Confirm Password
          <div className={classes.inputWrapper}>
            <input
              type="password"
              {...register('confirmPassword', {
                required: true,
                validate: (value) => value === watch('password'),
              })}
            />
          </div>
        </label>
      </div>
      <input type="submit" />
    </form>
  );
};

const useStyles = createUseStyles({
  form: {
    width: 380,
  },
  inputField: {
    margin: '0.5em 0',
  },
  inputWrapper: {
    margin: '1em 0',
    boxSizing: 'border-box',
    '& input': {
      font: 'inherit',
      color: 'currentColor',
      height: '1.1876em',
      padding: '0.8em',
      borderRadius: 4,
      border: '0.5px grey solid',
      width: '100%',
    },
  },
});

export default Form;
