
  import {  PROTECTED, REGISTER } from "../../lib/routes";
  import { Link as RouterLink, useNavigate } from "react-router-dom";
  import { useLogin } from "../../hooks/auth";
  import { useForm } from "react-hook-form";
  export default function Login() {
    const navigate = useNavigate();
    const { login, isLoading } = useLogin();
    const {
      register,
      handleSubmit,
      formState: { errors },
    } = useForm();
  
    async function handleLogin(data) {
      login({
        email: data.email,
        password: data.password,
        redirectTo: PROTECTED,
      });
    }
  
    return (
      <div w="100%" h="100vh">
        <div className="loginForm">
          <h1>
            Log In
          </h1>
  
          <form onSubmit={handleSubmit(handleLogin)}>
             <label>Email</label>
              <input
                type="email"
                placeholder="user@email.com"
                {...register("email")}
              />
            <label>Password</label>
              <input
                type="password"
                placeholder="password123"
                {...register("password")}
              />
            <button className="submitButton"
             type="submit"
            >
              Log In
            </button>
            <button onClick={()=> { navigate(REGISTER)}}
            >
              Register for new account
            </button>
          </form>
        
        </div>
      </div>
    );
  }