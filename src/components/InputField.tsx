import { FC } from 'react';
import { createUseStyles } from 'react-jss';

import { useController, Controller } from 'react-hook-form';

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

  // const { field, fieldState, formState } = useController({
  //   control,
  //   name,
  //   defaultValue,
  //   rules: { required, validate, pattern: /[A-Za-z]{3}/ },
  // });
  // console.log({ field, fieldState, formState });

  return (
    <Controller
      control={control}
      name={name}
      rules={{ required, validate }}
      defaultValue={defaultValue}
      render={({ field, fieldState, formState }) => {
        console.log({ field, fieldState });

        return (
          <div className={classes.inputField}>
            <label htmlFor={id}>{label}</label>

            <div className={classes.inputWrapper}>
              <input id={id} type={type} {...field} aria-required={required} />
            </div>
            <span id={`${id}_feedback`} aria-live="polite">
              123
            </span>
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
