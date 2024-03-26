import { useForm } from "react-hook-form";
import { useRegister } from "../../hooks/auth";
import { LOGIN, PROTECTED } from "../../lib/routes";
import { Navigator, useNavigate } from "react-router-dom";
export default function Register() {
    const navigate = useNavigate();
    const { register: signup, isLoading } = useRegister();
    const {
      register,
      handleSubmit,
      formState: { errors },
    } = useForm();
  
    async function handleRegister(data) {
      signup({
        username: data.name,
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
    
            <form onSubmit={handleSubmit(handleRegister)}>
            <label>Full Name</label>
                <input
                  type="text"
                  placeholder="Name"
                  {...register("name")}
                />
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
                Register
              </button>
              <button onClick={()=> { navigate(LOGIN)}}
              >
                Already Have an Account? Log in
              </button>
            </form>
          
          </div>
        </div>
      );
}