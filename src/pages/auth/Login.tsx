import TextInput from "../../components/TextInput";
import apple from "../../assets/apple.png";
import google from "../../assets/google.png";
import vitamin_c_up from "../../assets/Natural-Vitamin-C-250mg_1445x 1.png";
import vitamin_c_down from "../../assets/second_bottle.png";
import logo from "../../assets/logo.png";
import { useState } from "react";

const Login = () => {
  const [signUp, setSignUp] = useState(false);
  const [signIn, setSignIn] = useState(true);

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
        <p className="lg:hidden text-center mt-4 lg:border-b py-5">
          Create an account
        </p>
      ) : (
        <p className="lg:hidden text-center mt-4 lg:border-b py-5">
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
          className="text-center mt-4 lg:border-b py-5"
        >
          Create an account
        </p>

        <p
          onClick={() => {
            setSignIn(true);
            setSignUp(false);
          }}
          className="lg:inline text-center mt-4 lg:border-b py-5"
        >
          Log into account
        </p>
      </div>

      {signUp && (
        <form action="submit" className="lg:grid grid-cols-2 gap-4 lg:mt-5">
          <TextInput label="First Name" placeholder="Quine" type="text" />

          <TextInput label="Last Name" placeholder="Bambam" type="text" />

          <TextInput
            label="Email Address"
            placeholder="Bambam@mail.com"
            type="email"
          />

          <TextInput
            label="Phone Number"
            placeholder="+1 456 6543 8765"
            type="number"
          />

          <TextInput
            label="Password"
            placeholder="Enter Password"
            type="password"
          />

          <TextInput
            label="Confirm Password"
            placeholder="Re-Enter Password"
            type="password"
          />
        </form>
      )}

      {signIn && (
        <form action="submit">
          <div className="block space-y-8">
            <TextInput
              label="Email Address"
              placeholder="Bambam@mail.com"
              type="email"
            />
            <TextInput
              label="Password"
              placeholder="Enter Password"
              type="password"
            />
          </div>
        </form>
      )}
      {!signUp && (
        <p className="text-right mt-10 underline cursor-pointer">
          Forgot Password?
        </p>
      )}

      {signUp && (
        <div className="flex items-start mt-5">
          <input className="mt-[5px] mr-2" type="checkbox" />
          <p>
            I agree to the processing of my personal information and the Terms &
            Conditions.
          </p>
        </div>
      )}
      {signUp ? (
        <button
          className="flex justify-center mt-10 bg-black text-white px-14 py-5 rounded-2xl mx-auto w-[60%] lg:w-[70%]"
          type="button"
        >
          Create account
        </button>
      ) : (
        <button
          className="flex justify-center mt-10 bg-black text-white px-14 py-5 rounded-2xl mx-auto w-[60%] lg:w-[70%]"
          type="button"
        >
          Log into account
        </button>
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
        className="hidden lg:block fixed bottom-0 right-0 w-44"
        src={vitamin_c_down}
        alt="vitamin-c bottle image"
      />
    </>
  );
};
export default Login;
