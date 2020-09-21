import React from 'react';
import { FormikProps, Form, Field } from 'formik';
import { OtherProps, FormValues } from '../models/Form';

const InnerForm = (props: OtherProps & FormikProps<FormValues>) => {
  const { touched, errors, isSubmitting, message } = props;
  console.log(errors);
  return (
    <div className="w-full max-w-xs">
      <h1>{message}</h1>
      <Form className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="username">
            Username
          </label>
        </div>

        <Field
          type="email"
          name="email"
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        />
        {touched.email && errors.email && <div>{errors.email}</div>}
        <div className="mb-6">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="password">
            Password
          </label>
          <Field
            type="password"
            name="password"
            className="shadow appearance-none border border-red-500 rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
          />
          {touched.password && errors.password && <div>{errors.password}</div>}
        </div>

        <div className="flex items-center justify-between">
          <button
            disabled={isSubmitting}
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            type="button"
          >
            Submit
          </button>
          <a className="inline-block align-baseline font-bold text-sm text-blue-500 hover:text-blue-800" href="_#">
            Forgot Password?
          </a>
        </div>
      </Form>
    </div>
  );
};

export default InnerForm;
