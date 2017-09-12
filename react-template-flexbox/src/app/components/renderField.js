import React from 'react';

const renderField = ({ input, label,placeholder, type, meta: { touched, error } }) => (
  <div>
    {touched && error ? <label className="error">{error}</label> : <label>{label}</label>}
    <div>
     	<input {...input} type={type} placeholder={placeholder}/>
    </div>
  </div>
);

export default renderField;
