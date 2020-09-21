import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { usersActions } from '../redux/actions/users.action';

const LoginSchema = Yup.object().shape({
  email: Yup.string().email('Invalid email address format').required('Email is required'),
  password: Yup.string().min(3, 'Password must be 3 characters at minimum').required('Password is required'),
});

const LoginForm: React.FC = () => {
  const dispatch = useDispatch();
  const history = useHistory();

  return (
    <div className="border border-gray-300 p-6 grid grid-cols-1 gap-6 bg-white shadow-user rounded-lg">
      <div className="w-full max-w-xs">
        <h1 className="mt-5">Login Form</h1>
        <Formik
          initialValues={{ email: '', password: '' }}
          validationSchema={LoginSchema}
          onSubmit={(values) => {
            dispatch(usersActions.loginRequest(values));
            history.push('/users');
          }}
        >
          {({ isSubmitting }) => (
            <Form className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
              <div className="mb-4">
                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
                  Email
                </label>
                <Field
                  type="email"
                  name="email"
                  placeholder="Enter email"
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                />
                <ErrorMessage component="div" name="email" className="invalid-feedback" />
              </div>

              <div className="mb-6">
                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="password">
                  Password
                </label>
                <Field
                  type="password"
                  name="password"
                  placeholder="Enter password"
                  className="shadow appearance-none border border-red-500 rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
                />
                <ErrorMessage component="div" name="password" className="invalid-feedback" />
              </div>

              <div className="flex items-center justify-between">
                <button
                  type="submit"
                  className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? 'Please wait...' : 'Login'}
                </button>
              </div>
            </Form>
          )}
        </Formik>
      </div>
    </div>
  );
};

export default LoginForm;
