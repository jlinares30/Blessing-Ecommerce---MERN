import { Link, useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { useAuth } from '../context/AuthContext.jsx';
import { useEffect } from 'react';

function LoginPage() {
  const { register, handleSubmit, formState: { errors } } = useForm();
  const { signin, isAuthenticated } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    if (isAuthenticated) navigate("/services");
  }, [isAuthenticated, navigate]);

  const onSubmit = handleSubmit(async (values) => {
    try {
      await signin(values);
    } catch (error) {
      console.error("Error logging in:", error);
    }
  });

  return (
    <div className="container-login d-flex justify-content-center align-items-center vh-100">
      <div className="card-login card p-4 shadow">
        <h2 className="title-login text-center mb-4">Log In</h2>
        <form onSubmit={onSubmit}>
          <div className="input-container mb-3">
            <label htmlFor="email_user" className="form-label">Email:</label>
            <input
              type="email"
              {...register("email_user", { required: "Email is required" })}
              name="email_user"
              className="form-control"
              placeholder="Enter your email"
            />
            {errors.email_user && <span className="text-danger">{errors.email_user.message}</span>}
          </div>
          <div className="input-container mb-3">
            <label htmlFor="password_user" className="form-label">Password:</label>
            <input
              type="password"
              {...register("password_user", { required: "Password is required" })}
              name="password_user"
              className="form-control"
              placeholder="Enter your password"
            />
            {errors.password_user && <span className="text-danger">{errors.password_user.message}</span>}
          </div>
          <button type="submit" className="btn-login btn w-100 mt-4">Log In</button>
        </form>
        <p className="text-center my-3">
          Don't have an account? <Link to="/signup" style={{ color: '#bb86fc' }}>Sign Up</Link>
        </p>
      </div>
    </div>
  );
}

export default LoginPage;