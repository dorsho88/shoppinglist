import React from 'react';

const form = {
    name: '',
    description: '',
    quantity: 1,
    checked: false
}

const handleNumber = () => {

}

const useForm = (callback) => {

    const [values, setValues] = React.useState(form);

    const handleSubmit = (event) => {
        if (event) event.preventDefault();
        console.log('submitting ...')
        setValues(form);
        callback(values);
    };

    const handleChange = (event) => {
        event.persist();
        let name = event.target.name;
        let value = event.target.value;

        // min max validation on input will not defend from typing.
        // create usable
        // further validation is required:
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
    }
};

export default useForm;