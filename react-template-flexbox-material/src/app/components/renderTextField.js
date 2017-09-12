import React from 'react';

const renderTextField = (
  { input, label, placeholder, type, meta: { touched, error }, ...custom },
) => (
  <div>
    <TextField
      hintText={label}
      floatingLabelText={label}
      errorText={touched && error}
      type={type}
      {...input}
      {...custom}
    />
  </div>
);

export default renderTextField;