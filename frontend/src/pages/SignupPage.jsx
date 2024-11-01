import { Link } from 'react-router-dom';

function SignupPage() {
  return (
    <div className="d-flex justify-content-center align-items-center vh-100" style={{ backgroundColor: '#121212' }}>
      <div className="card p-4 shadow" style={{ width: '23rem', backgroundColor: '#1f1f1f', color: '#e0e0e0' }}> 
        <h2 className="text-center mb-4" style={{ color: '#bb86fc' }}>Sign Up</h2>
        <form>
          <div className="mb-3">
            <label htmlFor="text" className="form-label" style={{ color: '#e0e0e0' }}>Name:</label>
            <input type="text" name="text" className="form-control" style={{ backgroundColor: '#333', color: '#e0e0e0', border: '1px solid #555' }} placeholder="Enter your name"/>
          </div>
          <div className="mb-3">
            <label htmlFor="email" className="form-label" style={{ color: '#e0e0e0' }}>Email:</label>
            <input type="email" name="email" className="form-control" style={{ backgroundColor: '#333', color: '#e0e0e0', border: '1px solid #555' }} placeholder="Enter your email"/>
          </div>
          <div className="mb-3">
            <label htmlFor="password" className="form-label" style={{ color: '#e0e0e0' }}>Password:</label>
            <input type="password" name="password" className="form-control" style={{ backgroundColor: '#333', color: '#e0e0e0', border: '1px solid #555' }} placeholder="Enter your password"/>
          </div>
          <button type="submit" className="btn w-100 mt-4" style={{ backgroundColor: '#bb86fc', color: '#121212' }}>Sign Up</button>
        </form>
        <p className="text-center my-3">
          Already have an account? <Link to="/login" style={{ color: '#bb86fc' }}>Log in</Link>
        </p>
      </div>
    </div>
  );
}

export default SignupPage;
