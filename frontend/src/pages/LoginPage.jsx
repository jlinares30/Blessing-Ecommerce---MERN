import { Link } from 'react-router-dom';

function LoginPage() {
  return (
    <div className="container-login d-flex justify-content-center align-items-center vh-100">
      <div className="card-login card p-4 shadow"> 
        <h2 className="title-login text-center mb-4">Log In</h2>
        <form>
          <div className="input-container mb-3">
            <label htmlFor="email" className="form-label">Email:</label>
            <input type="email" name="email" className="form-control" placeholder="Enter your email"/>
          </div>
          <div className='input-container mb-3'>
            <label htmlFor="password" className="form-label">Password:</label>
            <input type="password" name="password" className="form-control" placeholder="Enter your password"/>
          </div>
          <button type="submit" className="btn-login btn w-100 mt-4">Login</button>
        </form>
        <p className="text-center my-3">
          Don't have an account? <Link to="/signup" style={{ color: '#bb86fc' }}>Sign up</Link>
        </p>
      </div>
    </div>
  );
}

export default LoginPage;
