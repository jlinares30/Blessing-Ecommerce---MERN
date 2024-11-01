import { Link } from 'react-router-dom';

function LoginPage() {
  return (
    <div className="d-flex justify-content-center align-items-center vh-100" style={{ backgroundColor: '#121212' }}>
      <div className="card p-4 shadow" style={{ width: '23rem', backgroundColor: '#1f1f1f', color: '#e0e0e0' }}> 
        <h2 className="text-center mb-4" style={{ color: '#bb86fc' }}>Log In</h2>
        <form>
          <div className="mb-3">
            <label htmlFor="email" className="form-label" style={{ color: '#e0e0e0' }}>Email:</label>
            <input type="email" name="email" className="form-control" style={{ backgroundColor: '#333', color: '#e0e0e0', border: '1px solid #555' }} placeholder="Enter your email"/>
          </div>
          <div>
            <label htmlFor="password" className="form-label" style={{ color: '#e0e0e0' }}>Password:</label>
            <input type="password" name="password" className="form-control" style={{ backgroundColor: '#333', color: '#e0e0e0', border: '1px solid #555' }} placeholder="Enter your password"/>
          </div>
          <button type="submit" className="btn w-100 mt-4" style={{ backgroundColor: '#bb86fc', color: '#121212' }}>Login</button>
        </form>
        <p className="text-center my-3">
          Don't have an account? <Link to="/signup" style={{ color: '#bb86fc' }}>Sign up</Link>
        </p>
      </div>
    </div>
  );
}

export default LoginPage;
