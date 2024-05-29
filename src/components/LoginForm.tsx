import * as Yup from 'yup'
import { ErrorMessage, Field, Form, Formik } from 'formik'

const LoginForm = () => {
  const validationSchema = Yup.object({
    login: Yup.string()
      .required('This field is required')
      .min(3, 'Must be 3 characters or more')
      .max(10, 'Must be 10 characters or less'),
    password: Yup.string().required('This field is required')
      .min(5, 'Must be 5 characters or more')
      .max(15, 'Must be 15 characters or less')
  })

  const handleSubmit = (values: {login: string; password: string}) => {
    console.log("Form data", values)
  }
  return <Formik initialValues={{login: '', password: ''}} validationSchema={validationSchema} onSubmit={handleSubmit}>
    <Form>
      <div className="form-group">
        <label htmlFor="login">Login</label>
        <Field type="text" id="login" name="login" />
        <ErrorMessage name="login" className="error" component="div" />
      </div>
      <div className="form-group">
        <label htmlFor="password">Password</label>
        <Field type="text" id="password" name="password" />
        <ErrorMessage name="password" className="error" component="div" />
      </div>
      <button type="submit">Submit</button>
    </Form>
  </Formik>
}

export default LoginForm