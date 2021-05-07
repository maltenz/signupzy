import React, { FC } from 'react';
import { createUseStyles } from 'react-jss';

import { Controller } from 'react-hook-form';

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
      width: '100%',
    },
  },
});

type Props = {
  id?: string;
  label: string;
  control: any;
  name: string;
  defaultValue?: string;
  type?: string;
  required?: boolean;
  validate?: (value: unknown) => boolean | string;
};

const InputField: FC<Props> = ({
  label,
  control,
  name,
  id = name,
  type = 'text',
  defaultValue = '',
  required,
  validate,
}) => {
  const classes = useStyles();

  return (
    <Controller
      control={control}
      name={name}
      rules={{ required: `${name} is required`, validate }}
      defaultValue={defaultValue}
      render={({ field, fieldState }) => {
        console.log({ fieldState });
        return (
          <div className={classes.inputField}>
            <label htmlFor={id}>{label}</label>

            <div className={classes.inputWrapper}>
              <input
                id={id}
                autoComplete="off"
                type={type}
                {...field}
                aria-invalid={fieldState.invalid}
                aria-describedby={`${id}_feedback`}
                aria-required={required}
              />
            </div>
            {fieldState.error?.message && (
              <span id={`${id}_feedback`} aria-live="assertive">
                {fieldState.error?.message}
              </span>
            )}
          </div>
        );
      }}
    />
  );
};

// const InputField: FC<Props> = ({
//   label,
//   control,
//   name,
//   id = name,
//   type = 'text',
//   defaultValue,
//   required,
//   validate,
// }) => {
//   const classes = useStyles();

//   const { field, fieldState, formState } = useController({
//     control,
//     name,
//     defaultValue,
//     rules: { required, validate, pattern: /[A-Za-z]{3}/ },
//   });
//   console.log({ field, fieldState, formState });

//   return (
//     <div className={classes.inputField}>
//       <label htmlFor={id}>{label}</label>

//       <div className={classes.inputWrapper}>
//         <input id={id} type={type} {...field} aria-required={required} />
//       </div>
//       <span id={`${id}_feedback`} aria-live="polite">
//         123
//       </span>
//     </div>
//   );
// };

export default InputField;
