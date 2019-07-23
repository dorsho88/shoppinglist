import React from 'react';

const form = {
  name: '',
  description: '',
  quantity: 1,
  checked: false,
};

const useForm = (callback) => {
  const [values, setValues] = React.useState(form);

  const handleSubmit = (event) => {
    if (event) event.preventDefault();
    callback(values);
    setValues(form);
  };

  const handleChange = (event) => {
    event.persist();
    const { name } = event.target;
    let { value } = event.target;
    // min max validation on input will not defend from typing.
    // further validation is required:
    // create usable
    if (name === 'quantity' && value > 99) {
      value = 99;
    } else if (name === 'quantity' && value < 1) {
      value = 1;
    }
    setValues(values => ({ ...values, [event.target.name]: value }));
  };

  return {
    handleChange,
    handleSubmit,
    values,
  };
};

export default useForm;
