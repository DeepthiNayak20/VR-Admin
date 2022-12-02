import './Login.css'
import { useFormik } from 'formik'
import { useNavigate } from 'react-router-dom'
import * as Yup from 'yup'

const Login = () => {
  const navigate = useNavigate()

  const formik = useFormik({
    initialValues: {
      userName: '',
      password: '',
    },

    validationSchema: Yup.object({
      userName: Yup.string()
        .max(15, 'Must be 15 charecters or less')
        .required('Required*'),
      password: Yup.string().required('Required*'),
    }),

    onSubmit: (values) => {
      console.log(values)
    },
  })

  console.log(formik.errors)
  return (
    <div>
      <form
        action=""
        className="login-loginContainer"
        onSubmit={formik.handleSubmit}
      >
        <input
          type="text"
          name="userName"
          placeholder=" "
          className="login-input"
          value={formik.values.userName}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
        />
        <label htmlFor="userName" className="login-lable">
          User Name
        </label>
        {formik.errors.userName ? (
          <p className="error-msg">{formik.errors.userName}</p>
        ) : null}
        <input
          type="password"
          id="password"
          name="password"
          placeholder=" "
          className="login-input"
          value={formik.values.password}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
        />
        <label htmlFor="password" className="login-lable">
          Password
        </label>
        {formik.errors.password ? (
          <p className="error-msg">{formik.errors.password}</p>
        ) : null}
        <div>
          <div
            className="login-forgotPassword"
            onClick={() => {
              navigate('/forgotPassword')
            }}
          >
            Forgot Password ?
          </div>
          <div className="login-buttonContainer">
            <button type="submit" className="login-loginButton">
              Login
            </button>
          </div>
        </div>
      </form>
    </div>
  )
}

export default Login
