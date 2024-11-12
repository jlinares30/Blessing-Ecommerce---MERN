import { Link, useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { useAuth } from '../context/AuthContext.jsx';
import { useEffect } from 'react'; 
function SignupPage() {
  const {register, handleSubmit,formState: { errors } } = useForm();
  const {signup, user, isAuthenticated} = useAuth();

  console.log(user);
  const navigate = useNavigate()
  useEffect(()=>{
      if(isAuthenticated) navigate("/services"); 
  }, [isAuthenticated])
  const onSubmit = handleSubmit(async (values) =>{
      try{
          await signup(values); 
      }catch(error){
          console.log(error);
      }
  })

  return (
    <div className="container-signup d-flex justify-content-center align-items-center vh-100">
      <div className="card-signup card p-4 shadow"> 
        <h2 className="title-signup text-center mb-4">Sign Up</h2>
        <form onSubmit={onSubmit}>
          <div className="input-container mb-3">
            <label htmlFor="first_name" className="form-label">Name:</label>
            <input type="text" {...register("first_name", {required: true})} name="first_name" className="form-control" placeholder="Enter your name"/>
            {errors.first_name && <span className="text-danger">{errors.first_name.message}</span>}
          </div>
          <div className="input-container mb-3">
            <label htmlFor="last_name" className="form-label">Last Name:</label>
            <input type="text" {...register("last_name", {required: true})} name="last_name" className="form-control" placeholder="Enter your last name"/>
          </div>
          <div className="input-container mb-3">
            <label htmlFor="email_user" className="form-label">Email:</label>
            <input type="email" {...register("email_user", {required: true})} name="email_user" className="form-control"  placeholder="Enter your email"/>
          </div>
          <div className="input-container mb-3">
            <label htmlFor="phone_number_u" className="form-label">Phone Number:</label>
            <input type="phone" {...register("phone_number_u", {required: true})} name="phone_number_u" className="form-control" placeholder="Enter your phone number"/>
          </div>
          <div className="input-container mb-3">
            <label htmlFor="password_user" className="form-label">Password:</label>
            <input type="password" {...register("password_user", {required: true})} name="password_user" className="form-control" placeholder="Enter your password"/>
          </div>
          <button type="submit" className="btn-signup btn w-100 mt-4">Sign Up</button>
        </form>
        <p className="text-center my-3">
          Already have an account? <Link to="/login" style={{ color: '#bb86fc' }}>Log in</Link>
        </p>
      </div>
    </div>
  );
}

export default SignupPage;
