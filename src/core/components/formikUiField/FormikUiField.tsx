import React from 'react';
import { ErrorMessage, Field } from 'formik';
import TextField from '@material-ui/core/TextField';

import './FormikUiField.scss';

interface FormikUiFieldProps {
  name: string;
  label: string;
  placeholder?: string;
  color?: string;
  type?: string;
  required?: boolean;
  autoFocus?: boolean;
  fullWidth?: boolean;
  InputProps?: { startAdornment: JSX.Element };
}

const FormikUiField = ({
  name,
  label,
  type = 'text',
  color = 'primary',
  required = false,
  fullWidth = false,
  autoFocus = false,
  placeholder,
  InputProps,
}: FormikUiFieldProps): JSX.Element => {
  return (
    <div className="FormikUiField">
      <Field
        required={required}
        autoComplete="off"
        as={TextField}
        label={label}
        placeholder={placeholder}
        name={name}
        color={color}
        fullWidth={fullWidth}
        autoFocus={autoFocus}
        type={type}
        helperText={<ErrorMessage name={name} />}
        InputProps={InputProps}
      />
    </div>
  );
};

export default FormikUiField;
