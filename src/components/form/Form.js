import React from 'react';
import TextField from '../ux/TextField';
import SelectField from '../ux/SelectField';
import { Field, reduxForm } from 'redux-form';

export const Form = ({ handleSubmit, reset, handleCancel }) => {
    return (
        <form onSubmit={ handleSubmit }>
            <Field
                type="text"
                name="title"
                label="Title"
                placeholder="Enter Title"
                component={TextField}
            />

            <Field
                name="author"
                label="Author"
                component={SelectField}
            />

            <Field
                type="text"
                name="category"
                label="Category"
                placeholder="Enter Category"
                component={TextField}
            />

            <Field
                type="text"
                name="length"
                label="Length"
                placeholder="Enter Length"
                component={TextField}
            />

            <div>
                <button type="submit" className="btn btn-primary">Submit</button>

                <button type="button" onClick={reset} className="btn btn-primary">Clear Values</button>

                <button type="button" className="btn btn-primary" onClick={handleCancel}>Cancel</button>
            </div>
        </form>
    );
};

export default reduxForm({
    form: 'Form',
})(Form);