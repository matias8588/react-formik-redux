import { withFormik, FormikErrors } from 'formik';
import InnerForm from '../components/InnerForm';
import { FormValues, MyFormProps } from '../models/Form';

const FormView = withFormik<MyFormProps, FormValues>({
  mapPropsToValues: (props) => {
    return {
      email: props.initialEmail || '',
      password: '',
    };
  },

  validate: (values: FormValues) => {
    const errors: FormikErrors<FormValues> = {};
    if (!values.email) {
      errors.email = 'Required';
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)) {
      errors.email = 'Invalid email address';
    }
    return errors;
  },

  handleSubmit: (values) => {
    console.log(values);
  },
})(InnerForm);

export default FormView;
