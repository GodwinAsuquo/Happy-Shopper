import apple from "../../assets/apple.png";
import google from "../../assets/google.png";
import vitamin_c_up from "../../assets/Natural-Vitamin-C-250mg_1445x 1.png";
import vitamin_c_down from "../../assets/second_bottle.png";
import logo from "../../assets/logo.png";
import { useState } from "react";
import { createUser } from "../../services/firebase/auth";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addToast } from "../../stateMgt/features/toast/toastSlice";

const Login = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [signUp, setSignUp] = useState(false);
  const [signIn, setSignIn] = useState(true);
  const [isLoading, setIsLoading] = useState(false)
  const [userSignup, setUserSignup] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phoneNumber: "",
    password: "",
    confirmPassword: "",
  });
  const [user, setUser] = useState({ email: "", password: "" });
  const [error, setError] = useState("");

  const handleSubmit = (e: { preventDefault: () => void }) => {
    e.preventDefault();
    console.log(userSignup);
    if (userSignup.password !== userSignup.confirmPassword) {
      console.log("Passwords do not match");
      dispatch(
        addToast({ id: 1, status: "error", description: "Passwords do not match", isClosable:true })
      );
    }
    setIsLoading(true);
    if (user.email && user.password) {
      createUser(user).then((res) => {
        if (res && res.user) {
          navigate("/");
        } else {
          if (res && res.error) setError(res.error);
        }
      });
    }
    setUserSignup({
      firstName: "",
      lastName: "",
      email: "",
      phoneNumber: "",
      password: "",
      confirmPassword: "",
    });
  };

  return (
    <>
      <img
        className="hidden lg:block fixed top-0 right-0 w-52"
        src={vitamin_c_up}
        alt="vitamin-c bottle image"
      />
      <img className="w-10 mx-auto mb-8 lg:mx-0" src={logo} alt="logo" />
      {signUp ? (
        <h1 className="lg:text-6xl lg:w-[500px] lg:text-left text-center text-3xl tracking-wide">
          Welcome to Happy Shopper
        </h1>
      ) : (
        <h1 className="lg:text-6xl lg:w-[500px] lg:text-left text-center text-3xl tracking-wide">
          Welcome Back, Happy Shopper
        </h1>
      )}

      {signUp ? (
        <p className="cursor-pointer lg:hidden text-center mt-4 lg:border-b py-5">
          Create an account
        </p>
      ) : (
        <p className="cursor-pointer lg:hidden text-center mt-4 lg:border-b py-5">
          Log into account
        </p>
      )}

      {/* switch between create account and login for large screen*/}
      <div className="hidden lg:grid grid-cols-2">
        <p
          onClick={() => {
            setSignUp(true);
            setSignIn(false);
          }}
          className={`cursor-pointer text-center mt-4 lg:border-b ${
            signUp && "border-b-black font-normal"
          } py-5`}
        >
          Create an account
        </p>

        <p
          onClick={() => {
            setSignIn(true);
            setSignUp(false);
          }}
          className={`cursor-pointer lg:inline text-center mt-4 lg:border-b ${
            signIn && "border-b-black font-normal"
          } py-5`}
        >
          Log into account
        </p>
      </div>

      {signUp && (
        <form onSubmit={handleSubmit}>
          <div className="lg:grid grid-cols-2 gap-4 lg:mt-5">
            <div className="mt-5">
              <label className="block" htmlFor="First Name">
                First Name
              </label>
              <input
                className="focus:border-b focus:border-b-black outline-none  w-72 px-[1px] "
                type="text"
                placeholder="Quine"
                required
                value={userSignup.firstName}
                onChange={(e) => {
                  setUserSignup({ ...userSignup, firstName: e.target.value });
                }}
              />
            </div>

            <div className="mt-5">
              <label className="block" htmlFor="Last Name">
                Last Name
              </label>
              <input
                className="focus:border-b focus:border-b-black outline-none  w-72 px-[1px] "
                type="text"
                placeholder="Bambam"
                required
                value={userSignup.lastName}
                onChange={(e) => {
                  setUserSignup({ ...userSignup, lastName: e.target.value });
                }}
              />
            </div>

            <div className="mt-5">
              <label className="block" htmlFor="Email Address">
                Email Address
              </label>
              <input
                className="focus:border-b focus:border-b-black outline-none  w-72 px-[1px] "
                type="email"
                placeholder="Bambam@mail.com"
                required
                value={userSignup.email}
                onChange={(e) => {
                  setUserSignup({ ...userSignup, email: e.target.value });
                }}
              />
            </div>

            <div className="mt-5">
              <label className="block" htmlFor="Phone Number">
                Phone Number
              </label>
              <input
                className="focus:border-b focus:border-b-black outline-none  w-72 px-[1px] "
                type="number"
                placeholder="+1 456 6543 8765"
                value={userSignup.phoneNumber}
                onChange={(e) => {
                  setUserSignup({ ...userSignup, phoneNumber: e.target.value });
                }}
              />
            </div>

            <div className="mt-5">
              <label className="block" htmlFor="Enter Password">
                Enter Password
              </label>
              <input
                className="focus:border-b focus:border-b-black outline-none  w-72 px-[1px] "
                type="password"
                placeholder="Enter Password"
                required
                value={userSignup.password}
                onChange={(e) => {
                  setUserSignup({ ...userSignup, password: e.target.value });
                }}
              />
              {error.length ? (
                <p className="py-[20px] text-red-500">{error}</p>
              ) : null}
            </div>

            <div className="mt-5">
              <label className="block" htmlFor="Confirm Password">
                Confirm Password
              </label>
              <input
                className="focus:border-b focus:border-b-black outline-none  w-72 px-[1px] "
                type="password"
                placeholder="Re-Enter Password"
                value={userSignup.confirmPassword}
                onChange={(e) => {
                  setUserSignup({
                    ...userSignup,
                    confirmPassword: e.target.value,
                  });
                }}
              />
            </div>
          </div>

          <p className="text-right mt-10 underline cursor-pointer">
            Forgot Password?
          </p>
          <button
            className="flex justify-center mt-10 bg-black text-white px-14 py-5 rounded-2xl mx-auto w-[60%] lg:w-[70%]"
            type="submit"
          >
            Create account
          </button>
          <div className="flex items-start mt-5">
            <input className="mt-[5px] mr-2" type="checkbox" />
            <p>
              I agree to the processing of my personal information and the Terms
              & Conditions.
            </p>
          </div>
        </form>
      )}

      {signIn && (
        <form onSubmit={handleSubmit}>
          <div className="block space-y-8">
            <div className="mt-5">
              <label className="block" htmlFor="Email Address">
                Email Address
              </label>
              <input
                className="focus:border-b focus:border-b-black outline-none  w-72 px-[1px] "
                type="email"
                placeholder="Bambam@mail.com"
                value={user.email}
                onChange={(e) => setUser({ ...user, email: e.target.value })}
              />
            </div>

            <div className="mt-5">
              <label className="block" htmlFor="Password">
                Password
              </label>
              <input
                className="focus:border-b focus:border-b-black outline-none  w-72 px-[1px] "
                type="password"
                placeholder="Enter Password"
                value={user.password}
                onChange={(e) => setUser({ ...user, password: e.target.value })}
              />
            </div>
          </div>
          <button
            className="flex justify-center mt-10 bg-black text-white px-14 py-5 rounded-2xl mx-auto w-[70%]"
            type="submit"
          >
            Log into account
          </button>
        </form>
      )}

      <p className="my-5 text-gray-500 text-center">or</p>

      {signUp ? (
        <div className="lg:flex lg:justify-center lg:space-x-1 lg:space-y-0 space-y-1 w-full">
          <button
            className="flex bg-white text-black border border-gray-300 px-14 py-5 rounded-2xl w-96 space-x-3 mx-auto lg:mx-0"
            type="button"
          >
            <img src={google} alt="google logo" />
            <p>Create account with Google</p>
          </button>
          <button
            className="flex bg-white text-black border border-gray-300 px-14 py-5 rounded-2xl w-96 space-x-3 mx-auto lg:mx-0"
            type="button"
          >
            <img src={apple} alt="apple logo" />
            <p> Create account with Apple </p>
          </button>
        </div>
      ) : (
        <div className="lg:flex lg:justify-center lg:space-x-1 lg:space-y-0 space-y-1 w-full">
          <button
            className="flex bg-white text-black border border-gray-300 px-14 py-5 rounded-2xl w-96 space-x-3 mx-auto lg:mx-0 "
            type="button"
          >
            <div className="flex space-x-2 mx-auto">
              <img src={google} alt="google logo" />
              <p>Login with Google</p>
            </div>
          </button>
          <button
            className="flex bg-white text-black border border-gray-300 px-14 py-5 rounded-2xl w-96 space-x-3 mx-auto lg:mx-0"
            type="button"
          >
            <div className="flex space-x-2 mx-auto">
              <img src={apple} alt="google logo" />
              <p>Login with Apple</p>
            </div>
          </button>
        </div>
      )}

      {signIn && (
        <p
          onClick={() => setSignUp(true)}
          className="text-sm text-left mt-6 underline cursor-pointer"
        >
          Don't have an account? Create one
        </p>
      )}

      <p className="mt-20">Since 2023 Happy Shopper. All Rights Reserved</p>
      <img
        className="hidden lg:block -z-10 fixed bottom-0 right-0 w-44"
        src={vitamin_c_down}
        alt="vitamin-c bottle image"
      />

     
    </>
  );
};
export default Login;
