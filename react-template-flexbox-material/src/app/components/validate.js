const validate = values => {
  const errors = {};

  if (!values.firstName) {
    errors.firstName = 'Required';
  }
  if (!values.lastName) {
    errors.lastName = 'Required';
  }
  if (!values.email) {
    errors.email = 'Email is Required';
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
    errors.email = 'Invalid email address';
  }
  if (!values.gender) {
    values.gender = "male";
    // errors.gender = 'Required';
  }
  if (!values.favoriteColor) {
    errors.favoriteColor = 'Required';
  }
  if (!values.password) {
    errors.password = 'Password is Required';
  } else if (!/^.{6,}$/.test(values.password)) {
    errors.password = 'Password should contain min 6 chars';
  }
  if (!values.confirmpassword) {
    errors.confirmpassword = 'Confirm password is Required';
  } else if (values.password != values.confirmpassword) {
    errors.confirmpassword = 'Passwords do not match';
  }
  if (!values.date) {
    errors.date = 'Required';
  } else if (!/^(0[1-9]|1[0-9]|2[0-9]|3[0-1])$/.test(values.date)) {
    errors.date = 'eg. 01 to 31';
  }
  if (!values.month) {
    errors.month = 'Required';
  } else if (!/^(0[1-9]|1[0-2])$/.test(values.month)) {
    errors.month = 'eg. 01 to 12';
  }
  if (!values.year) {
    errors.year = 'Required';
  } else if (!/^[0-9]{4}$/.test(values.year)) {
    errors.year = 'YYYY format';
  }

  var d = new Date();
  var n = d.getFullYear();
  var current_timestamp = new Date().getTime();
  // console.log('current year '+n);
  // console.log('current timestamp '+current_timestamp);

  var dateString = values.month+"/"+values.date+"/"+values.year;
  var dateObject = new Date(dateString);
  var x = dateObject.getTime()
  // console.log('entered date timestamp '+x);
  // console.log('entered date timestamp '+parseInt(x)+568024668000);

  if (parseInt(x)+568024668000 > current_timestamp ) {
    errors.year = 'age is not 18+';
  }
  
  if (values.date == 1 || values.date == 2 || values.date == 3 || values.date == 4 || values.date == 5 || values.date == 6 || values.date == 7 || values.date == 8 || values.date == 9) {
    // values.date = '0'+values.date;
  }
  

  return errors;
};

export default validate;
